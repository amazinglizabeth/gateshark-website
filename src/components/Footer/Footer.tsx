import React from "react";
import { footerLinks, socialLinks } from "./data";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#132C24] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-360 mx-auto space-y-12">
        {/* Top Row: Heading & Subscription */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-normal text-[48px] lg:text-[56px] tracking-tight max-w-md leading-[1.15]">
            Stay updated with our latest news!
          </h2>

          <div className="w-full md:w-auto space-y-3">
            <p className="text-[18px] md:text-[20px] font-medium text-white">
              Subscribe to Newsletter!
            </p>
            <div className="flex items-center bg-[#1D3B31] p-1.5 rounded-xl w-full md:w-[360px]">
              <input
                type="email"
                placeholder="Enter email address"
                className="bg-transparent px-3 text-sm md:text-base font-normal w-full text-white focus:outline-none placeholder-gray-400"
              />
              <button className="bg-[#9bf072] text-[#132C24] text-[15px] font-medium px-4 py-2.5 rounded-lg flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 hover:opacity-90 transition">
                <span>Subscribe</span>
                <span>&gt;</span>
              </button>
            </div>
          </div>
        </div>

        {/* Single Divider Line */}
        <hr className="border-white/10 my-0" />

        <div className="pt-8 space-y-6">
          {/* Middle Row: Large Logo & Navigation Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <a href="#" className="flex items-center">
              <img
                src="/footer/logo.svg"
                alt="GateShark Logo"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </a>

            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              {footerLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="hover:text-white text-gray-300 text-[15px] md:text-[16px] font-normal transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Row: Copyright & Social Icons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] md:text-[14px] font-normal text-gray-400">
            <p>© 2026 GateShark. All rights reserved.</p>
            <div className="flex items-center gap-3 text-white">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                >
                  <img 
                    src={social.iconUrl} 
                    alt={social.alt} 
                    className="w-4 h-4 object-contain" 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;