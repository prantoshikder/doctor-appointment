"use client";

import BusinessInfo from "@/components/home/BusinessInfo";
import DentalTerms from "@/components/home/DentalTerms";
import HeroSection from "@/components/home/HeroSection";
import OurServices from "@/components/home/OurServices";
import Footer from "@/components/partials/Footer";

const MainHomepage = () => {
  return (
    <>
      <HeroSection />
      <BusinessInfo />
      <OurServices />
      <DentalTerms />
      <Footer />
    </>
  );
};

export default MainHomepage;
