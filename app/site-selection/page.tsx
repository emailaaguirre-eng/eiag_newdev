import { Metadata } from "next";
import SiteSelectionContent from "@/components/sections/SiteSelectionContent";

export const metadata: Metadata = {
  title: "Site Selection | EIAG | SITE",
  description: "Smart growth starts with the right location. We help companies grow with confidence by identifying the best locations for expansion driven by data, guided strategy, and tailored to your unique goals.",
};

export default function SiteSelectionPage() {
  return <SiteSelectionContent />;
}

