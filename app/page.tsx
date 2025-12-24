import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import MissingOut from "@/components/sections/MissingOut";
import Process from "@/components/sections/Process";
import NextSite from "@/components/sections/NextSite";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      <MissingOut />
      <Process />
      <NextSite />
      <Testimonials />
      <CTA />
    </>
  );
}

