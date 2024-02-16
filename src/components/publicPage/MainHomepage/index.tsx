"use client";

import HeroSection from "@/components/home/HeroSection";
import dynamic from "next/dynamic";

const BusinessInfo = dynamic(() => import("@/components/home/BusinessInfo"), {
  loading: () => <p>Loading...</p>,
});
const OurServices = dynamic(() => import("@/components/home/OurServices"), {
  loading: () => <p>Loading...</p>,
});
const DentalTerms = dynamic(() => import("@/components/home/DentalTerms"), {
  loading: () => <p>Loading...</p>,
});
const MakeAppointment = dynamic(
  () => import("@/components/home/MakeAppointment"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Testimonial = dynamic(() => import("@/components/home/Testimonial"), {
  loading: () => <p>Loading...</p>,
});
const OurBlogs = dynamic(() => import("@/components/home/OurBlogs"), {
  loading: () => <p>Loading...</p>,
});
const OurDoctors = dynamic(() => import("@/components/home/OurDoctors"), {
  loading: () => <p>Loading...</p>,
});
const ContactUs = dynamic(() => import("@/components/home/ContactUs"), {
  loading: () => <p>Loading...</p>,
});
const Footer = dynamic(() => import("@/components/partials/Footer"), {
  loading: () => <p>Loading...</p>,
});

const MainHomepage = () => {
  return (
    <>
      <HeroSection />
      <BusinessInfo />
      <OurServices />
      <DentalTerms />
      <MakeAppointment />
      <Testimonial />
      <OurBlogs />
      <OurDoctors />
      <ContactUs />
      <Footer />
    </>
  );
};

export default MainHomepage;
