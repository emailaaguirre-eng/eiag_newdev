import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EIAG - Economic Incentives Advisory Group",
  description: "Securing over $15 billion in economic incentives for clients. Expert guidance on federal and state hiring credits, R&D tax credits, and site selection.",
  keywords: "economic incentives, tax credits, hiring credits, R&D credits, site selection, business incentives",
  openGraph: {
    title: "EIAG - Economic Incentives Advisory Group",
    description: "Securing over $15 billion in economic incentives for clients.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.variable}>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

