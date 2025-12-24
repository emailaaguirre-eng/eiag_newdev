import { Metadata } from "next";
import WhyEIAGContent from "@/components/sections/WhyEIAGContent";

export const metadata: Metadata = {
  title: "Why EIAG | SITE - Our Mission & Philosophy",
  description: "No business should leave money on the table especially when it's rightfully theirs. We make it possible and painless for businesses to secure the funding they are entitled to receive.",
};

export default function WhyEIAGPage() {
  return <WhyEIAGContent />;
}

