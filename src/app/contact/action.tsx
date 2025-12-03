"use server";

import "server-only";

import { ContactAdmin, ContactAdminProps } from "@/emails/contact-admin";
import ContactSender from "@/emails/contact-sender";
import { env } from "@/env";
import { Client, Databases, ID } from "node-appwrite";
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

async function getUserAgent() {
  const head = await headers();
  return head.get("user-agent") || null;
}

const actionClient = createSafeActionClient();

// Appwrite client (used to store contact form submissions)
const appwriteClient = new Client()
  .setEndpoint(env.APPWRITE_ENDPOINT)
  .setProject(env.APPWRITE_PROJECT_ID)
  .setKey(env.APPWRITE_API_KEY);

const databases = new Databases(appwriteClient);

export const contactAction = actionClient.schema(contactFormSchema).action(
  async ({ parsedInput }) => {
    const ip = await getIP();
    const userAgent = await getUserAgent();
    const head = await headers();
    const host = head.get("host") || "acme.local";

    const adminEmailProps = {
      date: Date.now(),
      email: parsedInput.email,
      firstName: parsedInput.firstName,
      lastName: parsedInput.lastName,
      ip: ip ?? "",
      message: parsedInput.message,
      subject: parsedInput.subject,
      host: host,
    } satisfies ContactAdminProps;

    // Store submission in Appwrite instead of sending emails
    await databases.createDocument({
      databaseId: env.APPWRITE_DATABASE_ID,
      collectionId: env.APPWRITE_CONTACT_COLLECTION_ID,
      documentId: ID.unique(),
      data: {
        firstName: parsedInput.firstName,
        lastName: parsedInput.lastName,
        email: parsedInput.email,
        subject: parsedInput.subject,
        message: parsedInput.message,
        ip: ip ?? "",
        userAgent: userAgent ?? "",
      },
    });

    // Previous mailing logic is kept here (commented out) in case it is needed again
    //
    // const mailer = createTransport({
    //   host: env.SMTP_HOST,
    //   port: env.SMTP_PORT,
    //   auth: {
    //     user: env.SMTP_USER,
    //     pass: env.SMTP_PASS,
    //   },
    //   secure: env.SMTP_PORT === 465 ? true : false,
    // });
    //
    // // Mail to admin
    // const sendMailToAdmin = mailer.sendMail({
    //   to: env.ADMIN_EMAIL,
    //   from: env.SMTP_FROM,
    //   replyTo: parsedInput.email,
    //   subject: "Contact Form Submission",
    //   text: await render(<ContactAdmin {...adminEmailProps} />, {
    //     plainText: true,
    //   }),
    //   html: await render(<ContactAdmin {...adminEmailProps} />),
    // });
    //
    // // Mail to sender
    // const sendMailToSender = mailer.sendMail({
    //   from: env.SMTP_FROM,
    //   replyTo: env.ADMIN_EMAIL,
    //   to: parsedInput.email,
    //   subject: "Recieved Message",
    //   text: await render(
    //     <ContactSender firstName={parsedInput.firstName} />,
    //     {
    //       plainText: true,
    //     },
    //   ),
    //   html: await render(<ContactSender firstName={parsedInput.firstName} />),
    // });
    //
    // await Promise.all([sendMailToAdmin, sendMailToSender]);
  },
  {
    onError: async (error) => {
      console.error(error);
    },
  },
);
