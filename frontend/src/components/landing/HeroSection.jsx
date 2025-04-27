import React from "react";
import SearchBar from "../SearchBar";

const HeroSection = () => {
  return (
    <div className="h-[80vh] relative">
      <img
        src="/Hero Background.png"
        alt="Hero background"
        className="w-full h-full object-cover rounded-2xl hidden sm:block" // Show this image on screens larger than 'sm'
      />
      <img
        src="/Hero Background mobile.png"
        alt="Hero background mobile"
        className="w-full h-full object-cover rounded-2xl sm:hidden" // Show this image on screens smaller than 'sm'
      />
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-40px]">
        <SearchBar />
      </div>
    </div>
  );
};

export default HeroSection;
