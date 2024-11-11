import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="h-screen w-full bg-[#e9f0e5] ">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
