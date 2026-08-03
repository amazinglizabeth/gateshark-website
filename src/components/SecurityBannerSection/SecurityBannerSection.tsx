import React from "react";
import { securityBannerData } from "./data";

const SecurityBannerSection: React.FC = () => {
  return (
    <section id="security" className="py-12 md:py-10 px-6 bg-white">
      <div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Left: Security Details Card (5 Columns ~ 41%) */}
        <div className="md:col-span-5 bg-[#3d7e52] text-white p-8 sm:p-10 lg:p-12 rounded-[28px] flex flex-col justify-between space-y-8 min-h-105">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-medium text-[57px] tracking-tight leading-[1.1] whitespace-pre-line">
              {securityBannerData.heading}
            </h2>
            <p className="font-gelix text-[#FFFFFFCC] text-[16px] md:text-base leading-relaxed font-regular whitespace-pre-line">
              {securityBannerData.description}
            </p>
          </div>

          <div>
            <button className="bg-[#9bf072] text-[16px] text-[#132C24] font-medium px-5 py-3 rounded-xl flex items-center gap-2.5 hover:opacity-90 transition">
              <img
                src={securityBannerData.ctaIcon}
                alt=""
                className="w-4 h-4 object-contain"
              />
              <span className="text-[16px] text-[#132C24] font-medium">
                {securityBannerData.ctaText}
              </span>
            </button>
          </div>
        </div>

        {/* Right: Phone Scanner Image (7 Columns ~ 59%) */}
        <div className="md:col-span-7 rounded-[28px] overflow-hidden min-h-87.5 md:min-h-full">
          <img
            src={securityBannerData.scannerImgUrl}
            alt="Girl scanning a QR code with a smartphone"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default SecurityBannerSection;
