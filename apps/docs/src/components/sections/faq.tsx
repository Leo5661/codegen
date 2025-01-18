"use client";

import { FAQ_LIST } from "@/src/lib/lists";
import { useState } from "react";
import { FAQItem } from "../FaqItem";

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center justify-center w-full py-10 md:py-20 overflow-hidden relative">
      <div className="text-xl sm:text-3xl font-bold tracking-tighter text-center  md:text-4xl/tight">
        Frequently Asked Questions
      </div>
      <div className="mt-4 text-sm sm:text-base max-w-[320px] text-muted-foreground font-light lg:text-lg sm:max-w-[600px] md:max-w-[800px] text-center mb-8 sm:mb-12 md:mb-24">
        Got questions? We've got answers. If you can't find what you're looking
        for, feel free to contact us.
      </div>

      <div className="flex flex-col gap-4 items-center mt-8 max-w-3xl mx-auto">
        {FAQ_LIST.map((faq, index) => (
          <FAQItem
            key={index}
            item={faq}
            isOpen={openIndex === index}
            toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}

export default FaqSection;
