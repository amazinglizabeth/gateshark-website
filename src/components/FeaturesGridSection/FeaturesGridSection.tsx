import React from "react";
import { featuresHeader, featuresList } from "./data";

const FeaturesGridSection: React.FC = () => {
  return (
    <section id="features" className="py-20 px-6 bg-[#FAFAFA]">
      <div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl sm:text-3x1 font-medium lg:text-[57px] text-[#132C25] leading-tight whitespace-pre-line">
            {featuresHeader.title}
          </h2>
          <p className="font-gelix-TRIAL text-[#4A4A4A] text-[18px] font-[regular] leading-relaxed">
            {featuresHeader.description}
          </p>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featuresList.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] p-6 rounded-2xl border border-gray-100 space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center p-2">
                <img
                  src={item.iconImg}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-inter font-medium text-[18px] text-[#132C24]">
                {item.title}
              </h3>
              <p className="font-inter text-[#6D6D6D] text-[14.8px] font-[regular] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGridSection;
