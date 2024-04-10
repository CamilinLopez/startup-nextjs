"use client";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Calendario from "@/components/Calendario/Calendario";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Poppup from "@/components/Poppup/Poppup";
import Faq from "@/components/Faq/Faq";
import Finish from "@/components/Finish/Finish";
import { Inter } from "@next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OnWhatsWidget from "@/components/wiedget";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <ScrollUp />
      <Hero />
      <Poppup />
      <OnWhatsWidget />
      <Features />
      <Brands />
      <Blog />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Calendario />
      <Faq />
      <Finish />
      <Footer />
    </>
  );
}
