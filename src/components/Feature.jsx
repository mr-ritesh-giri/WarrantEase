// src/components/Feature.js
import React from "react";

const features = [
  {
    title: "Add Devices",
    description:
      "Easily add devices with important details like model, purchase date, and warranty period.",
  },
  {
    title: "Track Maintenance",
    description:
      "Set up reminders for upcoming maintenance and warranty expiration dates.",
  },
  {
    title: "Service History",
    description: "Maintain a detailed log of past services and repairs.",
  },
  {
    title: "Reminders & Notifications",
    description: "Receive alerts when service dates are near.",
  },
];

const Feature = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 bg-white rounded-lg shadow-2xl">
      <h2 className="md:text-4xl text-3xl font-bold text-black text-center">
        App Features
      </h2>
      <p className="text-lg text-center text-gray-900">
        Welcome to
        <span className="text-black font-semibold"> WarrantEase</span>! Here are
        some features that make this app your perfect partner in tracking and
        managing your home appliances.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-black mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-900">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
