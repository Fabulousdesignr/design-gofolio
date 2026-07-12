import React from 'react';
import { Mail, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { useContactModal } from '../../context/ContactModalContext';

export default function EditorialMessageMe() {
  const { openModal } = useContactModal();
  const contactMethods = [
    {
      title: "Email Me",
      description: "For Shopify builds, product design work, project details, and long-form discussions.",
      icon: <Mail size={24} className="text-text-primary" />,
      action: openModal,
      isModal: true,
      actionText: "Send an email"
    },
    {
      title: "Message on WhatsApp",
      description: "For quick chats, casual introductions, and rapid communication.",
      icon: <MessageCircle size={24} className="text-text-primary" />,
      action: "https://wa.me/2348123456789",
      actionText: "Start a chat"
    },
    {
      title: "Book a Call",
      description: "Schedule a 30-minute discovery call to discuss your store, website, or product needs.",
      icon: <Calendar size={24} className="text-text-primary" />,
      action: "https://calendly.com",
      actionText: "Find a time"
    }
  ];

  return (
    <section id="message-me" className="w-full py-24 md:py-32 bg-bg-primary px-6 md:px-12 border-t border-card-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 relative z-10">
        <div className="w-full lg:w-[45%] flex flex-col">
          <span className="text-accent-orange text-[13px] font-bold tracking-widest uppercase mb-4">Let's Talk</span>
          <h2 className="font-serif text-[48px] md:text-[64px] lg:text-[80px] leading-[1.0] text-text-primary tracking-tight mb-8">
            Message Me
          </h2>
          <p className="text-text-secondary text-[20px] md:text-[22px] leading-[1.5] mb-12 max-w-lg font-medium">
            If you need a Shopify store, ecommerce website, landing page, or product experience designed with clarity and built with care, let's talk.
          </p>

          <div className="prose prose-lg text-text-secondary">
            <p className="mb-6 leading-[1.7]">
              I work with founders, ecommerce brands, startups, and teams building meaningful products across Shopify, SaaS, AI, fintech, and digital platforms.
            </p>
            <p className="leading-[1.7]">
              Whether you need product strategy, UX direction, Shopify development, conversion-focused pages, or design execution, I'm always open to thoughtful conversations and exciting ideas.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[55%] flex flex-col gap-6 justify-center">
          {contactMethods.map((method, idx) => (
            method.isModal ? (
              <button
                key={idx}
                onClick={method.action}
                className="flex items-center text-left p-8 bg-card border border-card-border rounded-[1.5rem] hover:border-accent-orange hover:shadow-[0_8px_30px_rgba(255,122,26,0.08)] transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-bg-primary flex items-center justify-center shrink-0 mr-6 group-hover:bg-accent-orange/10 transition-colors">
                  {method.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-[20px] font-bold text-text-primary mb-1 tracking-tight group-hover:text-accent-orange transition-colors">{method.title}</h3>
                  <p className="text-text-secondary text-[15px] leading-relaxed">{method.description}</p>
                </div>
                <div className="hidden md:flex shrink-0 ml-4 items-center gap-2 text-[14px] font-semibold text-text-primary group-hover:text-accent-orange transition-colors">
                  {method.actionText} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ) : (
              <a
                key={idx}
                href={method.action}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-8 bg-card border border-card-border rounded-[1.5rem] hover:border-accent-orange hover:shadow-[0_8px_30px_rgba(255,122,26,0.08)] transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-bg-primary flex items-center justify-center shrink-0 mr-6 group-hover:bg-accent-orange/10 transition-colors">
                  {method.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-[20px] font-bold text-text-primary mb-1 tracking-tight group-hover:text-accent-orange transition-colors">{method.title}</h3>
                  <p className="text-text-secondary text-[15px] leading-relaxed">{method.description}</p>
                </div>
                <div className="hidden md:flex shrink-0 ml-4 items-center gap-2 text-[14px] font-semibold text-text-primary group-hover:text-accent-orange transition-colors">
                  {method.actionText} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
