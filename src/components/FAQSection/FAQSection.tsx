import React, { useState } from 'react';
import { faqList } from './data';

const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-20 px-6 bg-white">
      <div className="max-w-192.25 mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-medium text-[57px] text-center text-[#132C25]">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqList.map((faq, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-5 font-medium text-[18px] text-[#132C24] flex justify-between items-center text-sm md:text-base"
              >
                <span>{faq.question}</span>
                <span className="text-xl">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="px-5 pb-5 text-[#6D6D6D] font-[regular] text-[16px] border-t border-gray-100/50 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;