import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Contact Me",
};

export default function ContactLayout({ children }: PropsWithChildren) {
  return children;
}
