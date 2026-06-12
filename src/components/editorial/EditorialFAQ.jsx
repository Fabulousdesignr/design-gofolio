import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What kind of products do you work on?",
    answer: "I mainly work on digital products across SaaS, AI, fintech, productivity, marketplaces, and startup platforms. I enjoy solving complex product problems where strategy and execution matter equally."
  },
  {
    question: "Do you only design interfaces?",
    answer: "No. I go beyond interface design. I think deeply about product strategy, user flows, systems design, interaction logic, and business outcomes. My goal is to help build products that work, not just products that look good."
  },
  {
    question: "Do you work with early-stage startups?",
    answer: "Yes. I especially enjoy working with early-stage startups because I love shaping products from zero to one. That includes idea validation, MVP planning, rapid prototyping, and product execution."
  },
  {
    question: "Do you use AI in your workflow?",
    answer: "Yes. AI plays a major role in how I work today. I use AI to speed up research, exploration, prototyping, and execution, while still keeping product thinking and human judgment at the center."
  },
  {
    question: "Can you work with developers and product teams?",
    answer: "Absolutely. I work well across cross-functional teams and enjoy collaborating with founders, developers, product managers, and operators to move ideas from concept to launch."
  },
  {
    question: "Are you available for freelance or full-time roles?",
    answer: "Yes. I’m open to freelance projects, contract work, startup collaborations, and strong full-time opportunities where I can contribute meaningfully."
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
            Things people usually want to know before working with me.
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
