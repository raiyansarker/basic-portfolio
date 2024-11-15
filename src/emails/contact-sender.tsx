import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Markdown,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

type ContactSenderProps = {
  firstName: string;
};

export const ContactSender = ({ firstName }: ContactSenderProps) => (
  <Html>
    <Head />
    <Preview>
      Thank you for reaching out! We&apos;ve received your message.
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
          <Heading className="text-2xl font-medium">
            Thank you for reaching out! I&apos;ve received your message.
          </Heading>
          <Markdown
            markdownContainerStyles={{
              marginBlock: "22px",
            }}
            markdownCustomStyles={{
              h1: {
                fontSize: "18px",
                fontWeight: "400",
              },
            }}
          >
            {`# Dear **${firstName}**,

Thank you for reaching out! I've received your message and will get back to you as soon as possible. If you have any urgent concerns, please feel free to reply to this email.

Best regards,  
Raiyan`}
          </Markdown>

          <br />

          <Text className="text-gray-950/65">
            This is an automated email, please do not reply directly to this
            message.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

ContactSender.PreviewProps = {
  firstName: "Raiyan",
} satisfies ContactSenderProps;

export default ContactSender;
