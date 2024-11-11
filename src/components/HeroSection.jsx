import React from "react";
import { NavLink } from "react-router-dom";

function HeroSection() {
  return (
    <div className="h-[80vh] flex flex-col max-w-[1400px] m-auto justify-center items-center p-6 space-y-8">
      {/* Heading Section */}

      <h1 className="font-semibold text-4xl text-[#53645a] mb-4 text-center transition duration-300 ease-in-out hover:text-[#5F6F65]">
        Never Miss a Service Date Again!
      </h1>
      <h2 className="font-medium text-xl text-[#7b856a] text-center max-w-3xl mb-8">
        Track your home appliances, set maintenance reminders, and manage all
        your warranty details in one place.
      </h2>

      {/* Buttons */}

      <div className="flex gap-6">
        <NavLink
          to="/get-started"
          className="px-8 py-3 bg-[#7b856a] text-white text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out hover:bg-[#53645a] hover:scale-105"
        >
          Get Started
        </NavLink>
        <NavLink
          to="/view-appliances"
          className="px-8 py-3 border-2 border-[#53645a] text-[#53645a] text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out hover:bg-[#53645a] hover:text-white hover:scale-105"
        >
          View All Appliances
        </NavLink>
      </div>
    </div>
  );
}

export default HeroSection;
