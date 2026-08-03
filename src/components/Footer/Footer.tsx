import React from "react";
import { footerLinks, socialLinks } from "./data";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#132C24] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-360 mx-auto space-y-5 space-x-0.5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-regular text-[70px] tracking-tight max-w-lg">
            Stay updated with our latest news!
          </h2>

          <div className="w-full md:w-auto space-y-2">
            <p className="text-[24px] font-medium text-gray-300">
              Subscribe to Newsletter!
            </p>
            <div className="flex items-center bg-[#18362b] p-1.5 rounded-xl border border-white/10 w-full md:w-80">
              <input
                type="email"
                placeholder="Enter email address"
                className="bg-transparent px-3 text-[16px] font-[regular] w-full text-white focus:outline-none placeholder-gray-400"
              />
              <button className="bg-[#9bf072] text-[#132C24] text-[16px] font-medium px-4 py-2 rounded-xl flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 hover:opacity-90 transition">
                <span>Subscribe</span>
                <span>&gt;</span>
              </button>
            </div>
          </div>
        </div>

        <hr className="border-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[14px] text-gray-400">
          <div className="flex items-center gap-3">
            <img
              src="/footer/logo.png"
              alt="GateShark Logo"
              className="h-8 w-auto"
            />
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {footerLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-white text-[#FFFFFFCC] text-[18px] font-regular"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/5 pt-6 text-[16px] font-regular text-gray-500">
          <p>© 2026 GateShark. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
              >
                <img 
                  src={social.iconUrl} 
                  alt={social.alt} 
                  className="w-5 h-5 object-contain" 
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;