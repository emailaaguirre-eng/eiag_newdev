import { Metadata } from "next";
import ContactContent from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Get Started with EIAG | SITE",
  description: "Schedule your free review call or get in touch with our team. Learn about government incentives and site selection services.",
};

export default function ContactPage() {
  return <ContactContent />;
}

