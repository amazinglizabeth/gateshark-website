import React from 'react';
import { audienceHeader, roleCards } from './data';

const AudienceSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-300 mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-medium text-[57px] text-[#132C25] ">{audienceHeader.title}</h2>
          <p className="font-gelix text-[#4A4A4A] text-[18px] font-[regular] max-w-xl mx-auto">{audienceHeader.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roleCards.map((card, idx) => (
            <div key={idx} className="space-y-4">
              <div className="rounded-2xl overflow-hidden bg-emerald-50 border border-gray-100 w-90 h-95">
                <img src={card.imgUrl} alt={card.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-medium text-[24px] text-[#132C24] ">{card.title}</h3>
              <p className="text-[#6D6D6D] text-[16px] font-[regular]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;