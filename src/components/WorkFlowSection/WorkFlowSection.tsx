import React from "react";
import { workflowSteps, bannerData } from "./data";

const WorkflowSection: React.FC = () => {
  return (
    <section id="how-it-works" className="pt-12 sm:pt-20 pb-0 mb-0 bg-white space-y-12 sm:space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Workflow Steps */}
        <div className="space-y-6 sm:space-y-8">
          {workflowSteps.map((step) => (
            <div
              key={step.id}
              className="space-y-1.5 sm:space-y-2 pb-6 sm:pb-8 border-b border-gray-100 last:border-b-0"
            >
              <h3
                className={`text-lg sm:text-[24px] font-medium ${
                  step.description ? "text-[#337357]" : "text-gray-800"
                }`}
              >
                {step.title}
              </h3>
              {step.description && (
                <p className="text-gray-600 font-normal text-sm sm:text-[16px]">
                  {step.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Phone Preview Image */}
        <div className="rounded-3xl overflow-hidden">
          <img
            src={bannerData.phoneImgUrl}
            alt="Phone and QR code preview"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Banner Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-5 overflow-hidden">
        {/* Left: Green Text Content */}
        <div className="md:col-span-3 bg-[#1b5e39] text-white p-6 xs:p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between space-y-8 sm:space-y-10">
          <div className="space-y-4 sm:space-y-6 max-w-xl">
            {/* ─── Fixed Heading Responsiveness ─── */}
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-medium leading-tight sm:leading-[1.15]">
              {bannerData.heading}
            </h2>
            <p className="font-gelix text-gray-200 text-sm sm:text-base md:text-[18px] leading-relaxed font-normal">
              {bannerData.description}
            </p>
          </div>

          <div>
            <button className="bg-[#9bf072] text-[#132C24] text-sm sm:text-[16px] font-medium px-4 py-3 sm:py-3.5 rounded-xl flex items-center gap-2.5 hover:opacity-90 transition">
              <img
                src={bannerData.ctaIcon}
                alt=""
                className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
              />
              <span>{bannerData.ctaText}</span>
            </button>
          </div>
        </div>

        {/* Right: Building Image */}
        <div className="md:col-span-2 w-full h-full min-h-62.5 sm:min-h-75">
          <img
            src={bannerData.buildingImgUrl}
            alt="Aerial view of estate buildings"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;