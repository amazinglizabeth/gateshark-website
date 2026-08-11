import React from "react";
import { securityBannerData } from "./data";

const SecurityBannerSection: React.FC = () => {
  return (
    <section id="security" className="py-8 sm:py-12 md:py-10 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Left: Security Details Card */}
        <div className="md:col-span-5 bg-[#3d7e52] text-white p-6 sm:p-10 lg:p-12 rounded-[28px] flex flex-col justify-start md:justify-between gap-5 sm:gap-6 md:gap-8 min-h-0 md:min-h-105">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-medium tracking-tight leading-tight sm:leading-[1.1] whitespace-pre-line">
              {securityBannerData.heading}
            </h2>
            <p className="font-gelix text-[#FFFFFFCC] text-sm md:text-base leading-relaxed font-normal whitespace-pre-line">
              {securityBannerData.description}
            </p>
          </div>

          <div>
            <button className="bg-[#9bf072] text-[#132C24] text-sm sm:text-[16px] font-medium px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl flex items-center gap-2.5 hover:opacity-90 transition">
              <img
                src={securityBannerData.ctaIcon}
                alt=""
                className="w-4 h-4 object-contain"
              />
              <span className="text-sm sm:text-[16px] text-[#132C24] font-medium">
                {securityBannerData.ctaText}
              </span>
            </button>
          </div>
        </div>

        {/* Right: Phone Scanner Image */}
        <div className="md:col-span-7 rounded-[28px] overflow-hidden min-h-55 sm:min-h-87.5 md:min-h-full">
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