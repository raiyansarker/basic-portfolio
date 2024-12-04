"use server";

import "server-only";

import { ContactAdmin, ContactAdminProps } from "@/emails/contact-admin";
import ContactSender from "@/emails/contact-sender";
import { env } from "@/env";
import { render } from "@react-email/components";
import { createSafeActionClient } from "next-safe-action";
import { headers } from "next/headers";
import { createTransport } from "nodemailer";
import { contactFormSchema } from "./schema";

async function getIP() {
  const head = await headers();
  const cfConnectingIp = head.get("cf-connecting-ip");
  const forwardedFor = head.get("x-forwarded-for");
  const realIp = head.get("x-real-ip");

  if (cfConnectingIp) return cfConnectingIp.trim();

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  if (realIp) return realIp.trim();

  return null;
}

const actionClient = createSafeActionClient();
const mailer = createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
  secure: env.SMTP_PORT === 465 ? true : false,
});

export const contactAction = actionClient.schema(contactFormSchema).action(
  async ({ parsedInput }) => {
    const ip = await getIP();

    const adminEmailProps = {
      date: Date.now(),
      email: parsedInput.email,
      firstName: parsedInput.firstName,
      lastName: parsedInput.lastName,
      ip: ip ?? "",
      message: parsedInput.message,
      subject: parsedInput.subject,
      host: (await headers()).get("host") || "acme.local",
    } satisfies ContactAdminProps;

    // Mail to admin
    const sendMailToAdmin = mailer.sendMail({
      to: env.ADMIN_EMAIL,
      from: env.SMTP_FROM,
      replyTo: parsedInput.email,
      subject: "Contact Form Submission",
      text: await render(<ContactAdmin {...adminEmailProps} />, {
        plainText: true,
      }),
      html: await render(<ContactAdmin {...adminEmailProps} />),
    });

    // Mail to sender
    const sendMailToSender = mailer.sendMail({
      from: env.SMTP_FROM,
      replyTo: env.ADMIN_EMAIL,
      to: parsedInput.email,
      subject: "Recieved Message",
      text: await render(<ContactSender firstName={parsedInput.firstName} />, {
        plainText: true,
      }),
      html: await render(<ContactSender firstName={parsedInput.firstName} />),
    });

    /**
     * wait for both promises to resolve before returning
     * this will ensure that the action is only considered successful
     * if any of the promises fail, the action will be considered failed
     */
    await Promise.all([sendMailToAdmin, sendMailToSender]);
  },
  {
    onError: async (error) => {
      console.error(error);
    },
  },
);
