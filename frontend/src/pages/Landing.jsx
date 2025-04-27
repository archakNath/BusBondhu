import React from "react";
import HeroSection from "../components/landing/HeroSection";
import MapSection from "../components/landing/MapSection";
import HowItWorks from "../components/landing/HowItWorks";
import StatusSection from "../components/landing/StatusSection";
import FAQSection from "../components/landing/FAQSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Landing() {
  return (
    <div className="p-4 max-w-[1200px] container mx-auto">
      <Header />
      <HeroSection />
      <div className="my-24 w-full" />
      <MapSection />
      <div className="my-24 w-full" />
      <HowItWorks />
      <div className="my-24 w-full" />
      <StatusSection />
      <div className="my-24 w-full" />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default Landing;
