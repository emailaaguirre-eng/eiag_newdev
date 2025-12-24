import { Metadata } from "next";
import VideosContent from "@/components/sections/VideosContent";

export const metadata: Metadata = {
  title: "Videos | Learn About EIAG Programs & Services",
  description: "Learn more about EIAG and the programs we help businesses with everyday. Discover how EIAG helps companies unlock the full value of government incentives.",
};

export default function VideosPage() {
  return <VideosContent />;
}

