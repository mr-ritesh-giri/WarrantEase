import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="h-[80vh] flex flex-col max-w-[1400px] m-auto justify-center items-center p-6 space-y-8">
      {/* Heading Section */}

      <h1 className="font-semibold text-4xl text-black mb-4 text-center transition duration-300 ease-in-out">
        Never Miss a Service Date Again!
      </h1>
      <h2 className="font-medium text-xl text-gray-800 text-center max-w-3xl mb-8">
        Track your home appliances, set maintenance reminders, and manage all
        your warranty details in one place.
      </h2>

      {/* Buttons */}

      <div className="flex gap-6">
        <Link
          to="/add-appliances"
          className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out hover:scale-105"
        >
          Get Started
        </Link>
        <Link
          to="/view-appliances"
          className="px-8 py-3 border-2 border-black text-black text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105"
        >
          View All Appliances
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
