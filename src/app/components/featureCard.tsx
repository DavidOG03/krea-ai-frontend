import Image from "next/image";
import React from "react";

interface CardProps {
  featureIcon: string;
  feature: string;
  text: string;
}
const FeatureCard: React.FC<CardProps> = ({ feature, featureIcon, text }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex justify-between items-center">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        {/* <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg> */}
        <Image src={featureIcon} alt={feature} width={24} height={24} />
      </div>
      <div className="mr-auto">
        <h3 className="text-lg font-semibold mb-2">{feature}</h3>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
      <button type="button" className="bg-transparent border-0">
        Open
      </button>
    </div>
  );
};

export default FeatureCard;
