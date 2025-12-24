import { Metadata } from "next";
import FAQContent from "@/components/sections/FAQContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | EIAG | SITE",
  description: "Common questions about EIAG services, grants, tax credits, incentives, and site selection. Get answers about how we help businesses maximize their financial benefits.",
};

export default function FAQPage() {
  return <FAQContent />;
}

