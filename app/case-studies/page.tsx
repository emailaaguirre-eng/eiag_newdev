import { Metadata } from "next";
import CaseStudiesContent from "@/components/sections/CaseStudiesContent";

export const metadata: Metadata = {
  title: "Case Studies | EIAG Success Stories",
  description: "Explore how EIAG has helped companies secure billions in incentives and make strategic location decisions. Real results from real clients.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}

