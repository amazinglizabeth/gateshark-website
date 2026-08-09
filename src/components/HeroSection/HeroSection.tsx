import React, { useState } from "react";
import { heroData } from "./data";

const HeroSection: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <section className="relative w-full bg-[#0b1d14] text-white overflow-hidden">
      {/* Background Images & Gradients */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 pointer-events-none"
        style={{ backgroundImage: `url("${heroData.bgImageUrl}")` }}
      />
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,#132C24_0%,transparent_75%)] opacity-80 pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
            <a
              href="#"
              className="flex items-center gap-2 max-w-35 sm:max-w-[176.15px]"
            >
              <img
                src="/hero/logo.svg"
                alt="GateShark Logo"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation Links */}
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

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <a
                href="#cta"
                className="bg-[#9bf072] text-black font-medium text-[14px] sm:text-[16px] px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-transparent border-b border-white/10 px-4 pt-2 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
              <nav className="flex flex-col space-y-3">
                {heroData.navItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-white font-medium text-base py-1.5 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="pt-2">
                <a
                  href="#cta"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-[#9bf072] text-black font-medium text-[15px] px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </header>

        {/* Hero Main Content */}
        <div className="pt-6 sm:pt-12 pb-10 sm:pb-20 px-3 sm:px-6">
          <div className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[74px] font-medium tracking-tight max-w-4xl mx-auto leading-tight sm:leading-tight">
              {heroData.title}
            </h1>
            <p className="font-gelix text-gray-300 text-sm sm:text-[20px] font-normal max-w-2xl mx-auto px-2">
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
              <button className="w-full sm:w-auto border border-[#9BF072]/40 bg-transparent text-[#B2ED97] font-medium text-[15px] sm:text-[16px] px-3.5 py-2.5 sm:py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#9BF072]/10 transition-all">
                <img
                  src={heroData.secondaryCtaIcon}
                  alt=""
                  className="w-5 h-5 object-contain"
                />
                <span>{heroData.secondaryCtaText}</span>
              </button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-8 sm:mt-16 flex items-center justify-center gap-2 sm:gap-6 px-2 w-full">
            {/* Left Image (Dashboard) */}
            <img
              src={heroData.dashboardImgUrl}
              alt="Dashboard preview"
              className="h-30 xs:h-[160px] sm:h-70 md:h-105 max-w-[63%] w-auto object-contain drop-shadow-md rounded-xl"
            />

            {/* Right Image (Verification Card) */}
            <img
              src={heroData.cardImgUrl}
              alt="Instant Verification Card"
              className="h-30 xs:h-[160px] sm:h-70 md:h-105 max-w-[35%] w-auto object-contain drop-shadow-md rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;