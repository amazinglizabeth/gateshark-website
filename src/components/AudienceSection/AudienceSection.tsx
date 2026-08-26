import React from 'react';
import { audienceHeader, roleCards } from './data';

const AudienceSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Header Content */}
        <div className="text-center space-y-3">
          <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-medium tracking-tight leading-tight text-[#132C25]">
            {audienceHeader.title}
          </h2>
          <p className="font-gelix text-[#4A4A4A] text-sm sm:text-base md:text-[18px] font-normal max-w-xl mx-auto leading-relaxed">
            {audienceHeader.description}
          </p>
        </div>

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {roleCards.map((card, idx) => (
            <div key={idx} className="space-y-3 sm:space-y-4">
              <div className="rounded-2xl overflow-hidden bg-emerald-50 border border-gray-100 w-full aspect-4/3 sm:aspect-square">
                <img
                  src={card.imgUrl}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-lg sm:text-[24px] text-[#132C24]">
                {card.title}
              </h3>
              <p className="text-[#6D6D6D] text-sm sm:text-[16px] font-normal leading-tight whitespace-pre-line">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;