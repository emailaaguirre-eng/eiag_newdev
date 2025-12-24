import { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About Us | Discover Who We Are | EIAG",
  description: "EIAG is a firm made up of professionals who share similar core values. We love our clients, respect each other, embrace challenges, and deliver exceptional results.",
};

export default function AboutPage() {
  return <AboutContent />;
}

