import React from "react";
import { ctaData } from "./data";

const CTASection: React.FC = () => {
  return (
    <section id="cta" className="pb-20 px-6">
      <div
        className="max-w-300 mx-auto rounded-3xl p-12 md:p-16 text-center space-y-6 text-gray-900 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ctaData.bgImageUrl})` }}
      >
        <h2 className="text-3xl md:text-5xl text-[#132C24] font-medium text-[57px] max-w-2xl mx-auto leading-tight">
          {ctaData.title}
        </h2>
        <p className="font-gelix text-[#132C24CC] text-[18px] font-regular md:text-base max-w-xl mx-auto">
          {ctaData.description}
        </p>
        <div>
          <button className="bg-slate-900 text-white text-[16px] font-medium px-8 py-3.5 rounded-xl hover:bg-slate-800 transition">
            {ctaData.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
