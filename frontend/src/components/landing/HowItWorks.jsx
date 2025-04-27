import React from "react";
import { MapPin, Map, Bus } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Enter Location",
      description:
        "Type your starting point and destination to begin your search.",
      icon: MapPin,
    },
    {
      title: "Get Optimal Route",
      description:
        "We instantly show you the fastest and most convenient bus routes.",
      icon: Map,
    },
    {
      title: "Start Your Journey",
      description:
        "Hop on the bus and enjoy a smoother, smarter commute with BusBondhu.",
      icon: Bus,
    },
  ];

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl italic text-center mb-24">
        How It Works?
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step Container */}
            <div className="flex flex-col items-center text-center max-w-xs w-full mb-8 md:mb-0">
              {/* Icon Circle */}
              <div className="bg-gray-800 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <step.icon size={28} strokeWidth={2} />
              </div>

              {/* Step Content */}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>

            {/* Dashed Line Connector */}
            {index < steps.length - 1 && (
              <div className="hidden md:block w-24 h-0.5 border-t-2 border-dashed border-gray-300"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
