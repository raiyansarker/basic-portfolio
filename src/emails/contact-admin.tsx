import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { format } from "date-fns";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export interface ContactAdminProps {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  date: number;
  ip: string;
}

export const ContactAdmin = ({
  firstName,
  lastName,
  email,
  subject,
  message,
  date,
  ip,
}: ContactAdminProps) => (
  <Html>
    <Head />
    <Preview>
      You&apos;ve got a new message from your website! Check it out now
    </Preview>
    <Tailwind>
      <Body className="bg-white">
        <Container
          style={{
            fontFamily:
              "-apple-system, blinkmacsystemfont, 'segoe ui', 'roboto', 'oxygen', 'ubuntu', 'cantarell', 'fira sans', 'droid sans', 'helvetica neue', sans-serif",
          }}
          className="mx-auto my-12 px-3"
        >
          <Heading>New Website Inquiry</Heading>
          <table className="my-4 w-full">
            <tbody>
              <tr className="w-full">
                <td className="font-medium">Name</td>
                <td>
                  {firstName} {lastName}
                </td>
              </tr>
              <tr className="w-full">
                <td className="font-medium">Email</td>
                <td>{email}</td>
              </tr>
              <tr className="w-full">
                <td className="font-medium">Subject</td>
                <td>{subject}</td>
              </tr>
              <tr className="w-full">
                <td className="font-medium">Sent</td>
                <td>{format(date, "h:mm b, do MMM, yyy [z]")}</td>
              </tr>
              <tr className="w-full">
                <td className="font-medium">IP</td>
                <td>
                  <Link
                    href={`https://ip-api.com/#${ip}`}
                    className="font-semibold text-indigo-500 underline underline-offset-4"
                  >
                    {ip}
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
          <Section className="my-4">
            <Text className="!my-0 text-lg font-semibold">Message</Text>
            <Text className="!my-0">{message}</Text>
          </Section>

          <br />

          <Text className="text-gray-950/65">
            This email is sent from {baseUrl}
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

ContactAdmin.PreviewProps = {
  firstName: "Raiyan",
  lastName: "Sarker",
  email: "me@riayansarker.com",
  subject: "Query",
  message: "Hello, I have a query.",
  date: Date.now(),
  ip: "1.1.1.1",
} satisfies ContactAdminProps;

export default ContactAdmin;
