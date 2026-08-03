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
            <div
              key={idx}
              className="bg-[#F7F7F7] rounded-[20px] overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left font-medium text-[16px] sm:text-[18px] text-[#132C24] flex justify-between items-center px-5 pt-4 pb-3"
              >
                <span>{faq.question}</span>
                <span className="text-xl font-normal leading-none ml-4">
                  {openIdx === idx ? '—' : '+'}
                </span>
              </button>

              {openIdx === idx && (
                <div className="mx-2 mb-2 bg-white rounded-xl p-3.5 text-[#6D6D6D] font-normal text-[15px] sm:text-[16px] leading-relaxed">
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