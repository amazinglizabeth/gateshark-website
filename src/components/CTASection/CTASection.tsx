import React from "react";
import { ctaData } from "./data";

const CTASection: React.FC = () => {
  return (
    <section id="cta" className="pb-12 sm:pb-20 px-4 sm:px-6">
      <div
        className="max-w-7xl mx-auto rounded-3xl p-6 sm:p-12 md:p-16 text-center space-y-5 sm:space-y-6 text-gray-900 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ctaData.bgImageUrl})` }}
      >
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#132C24] font-medium max-w-2xl mx-auto leading-tight sm:leading-[1.15] tracking-tight">
          {ctaData.title}
        </h2>

        <p className="font-gelix text-[#132C24CC] text-sm sm:text-base md:text-[18px] font-normal max-w-xl mx-auto leading-relaxed">
          {ctaData.description}
        </p>

        <div>
          <button className="bg-slate-900 text-white text-sm sm:text-[16px] font-medium px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl hover:bg-slate-800 transition">
            {ctaData.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;