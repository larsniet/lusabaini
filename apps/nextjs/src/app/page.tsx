"use server";

import { getHomepageContent } from "@/lib/queries";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandLogos from "@/components/BrandLogos";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default async function Home() {
  const { profileHeader, socialLinks = [] } = await getHomepageContent();

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <BrandLogos />
      <Services />
      <Footer />
    </main>
  );
}


