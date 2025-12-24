import { Metadata } from "next";
import EconomicIncentivesContent from "@/components/sections/EconomicIncentivesContent";

export const metadata: Metadata = {
  title: "Economic Incentives | EIAG",
  description: "Get government funding without the administrative burden. We apply, report, and follow through so you actually receive the money and claim the credits.",
};

export default function EconomicIncentivesPage() {
  return <EconomicIncentivesContent />;
}

