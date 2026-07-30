import React from "react";
import { heroData } from "./data";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0b1d14] text-white overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 pointer-events-none"
        style={{ backgroundImage: `url("${heroData.bgImageUrl}")` }}
      />

      <div className="relative z-10">
        <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-360 mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 max-w-35 sm:max-w-[176.15px] max-h-13">
              <img
                src="/hero/logo.png"
                alt="GateShark Logo"
                className="h-6 sm:h-8 w-auto"
              />
            </a>

            <nav className="hidden md:flex items-center gap-8 text-[16px] font-normal text-gray-300">
              {heroData.navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#cta"
              className="bg-[#9bf072] text-black font-medium text-[14px] sm:text-[16px] px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Started
            </a>
          </div>
        </header>

        {/* Hero Main Content */}
        <div className="pt-8 sm:pt-12 pb-12 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl md:text-[74px] font-medium tracking-tight max-w-4xl mx-auto leading-tight sm:leading-tight">
              {heroData.title}
            </h1>
            <p className="font-gelix text-gray-300 text-base sm:text-[20px] font-normal max-w-2xl mx-auto">
              {heroData.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#9bf072] text-[#132C24] font-medium text-[15px] sm:text-[16px] px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-opacity-90 transition">
                <img
                  src={heroData.primaryCtaIcon}
                  alt=""
                  className="w-4 h-4 object-contain"
                />
                <span>{heroData.primaryCtaText}</span>
              </button>
              <button className="w-full sm:w-auto border border-white/20 bg-black/20 backdrop-blur-sm text-[#B2ED97] font-medium text-[15px] sm:text-[16px] px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition">
                <img
                  src={heroData.secondaryCtaIcon}
                  alt=""
                  className="w-4 h-4 object-contain"
                />
                <span>{heroData.secondaryCtaText}</span>
              </button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Left: Dashboard Image Container */}
            <div className="md:col-span-2 overflow-hidden flex items-center justify-center">
              <img
                src={heroData.dashboardImgUrl}
                alt="Dashboard preview"
                className="object-contain max-w-194 max-h-109.75 sm:max-h-125"
              />
            </div>

            {/* Right: Verification Card Image Container */}
            <div className="overflow-hidden flex items-center justify-center">
              <img
                src={heroData.cardImgUrl}
                alt="Instant Verification Card"
                className="object-contain max-w-[320px] max-h-109.75 sm:max-h-125"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;