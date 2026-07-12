import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What kind of products do you work on?",
    answer: "I work on SaaS products, mobile and web applications, Shopify stores, ecommerce websites, landing pages, and early-stage startup platforms. I enjoy projects where UX, visual design, business goals, and execution all matter."
  },
  {
    question: "Can you design and build Shopify stores?",
    answer: "Yes. I can help with Shopify store design, theme customization, landing pages, product-page UX, store setup, and conversion-focused improvements using Shopify, Liquid, HTML, CSS, and JavaScript."
  },
  {
    question: "Do you work with early-stage startups?",
    answer: "Yes. I especially enjoy working with founders and small teams because I can move across strategy, UX, visual design, prototyping, and implementation without needing a large handoff process."
  },
  {
    question: "Do you use AI in your workflow?",
    answer: "Yes. AI plays a major role in how I work today. I use AI to speed up research, exploration, prototyping, copy iteration, and execution, while still keeping product thinking and human judgment at the center."
  },
  {
    question: "Can you work with developers and product teams?",
    answer: "Absolutely. I work well with founders, developers, product managers, and operators. I can provide clean design systems and handoffs, or move closer to implementation when the project needs design and build support."
  },
  {
    question: "Are you available for freelance or full-time roles?",
    answer: "Yes. I'm open to freelance projects, Shopify and ecommerce work, contract product design roles, startup collaborations, and strong full-time opportunities where I can contribute meaningfully."
  }
];

export default function EditorialFAQ({ faqs: customFaqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const displayFaqs = customFaqs || faqs;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 md:py-32 bg-bg-primary px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-16">
          <h2 className="font-serif text-[40px] md:text-[56px] leading-[1.1] text-text-primary tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary text-[19px] leading-[1.6]">
            Things founders, teams, and ecommerce brands usually want to know before working with me.
          </p>
        </div>

        <div className="flex flex-col border-t border-card-border">
          {displayFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-b border-card-border py-8 cursor-pointer group"
              onClick={() => toggleFAQ(idx)}
            >
              <div className="flex items-center justify-between gap-6">
                <h3 className={`text-[20px] md:text-[22px] font-medium transition-colors duration-300 ${openIndex === idx ? 'text-accent-orange' : 'text-text-primary group-hover:text-accent-orange'}`}>
                  {faq.question}
                </h3>
                <div className="shrink-0 text-text-secondary group-hover:text-accent-orange transition-colors duration-300">
                  {openIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-text-secondary text-[17px] leading-[1.7] max-w-3xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
