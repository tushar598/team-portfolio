'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const services = [
  {
    title: 'Design',
    description: 'We provide design services to enhance brand identity and help businesses engage their audience.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    dark: false
  },
  {
    title: 'WebDev',
    description: 'We provide web development services to enhance your brand\'s online presence and connect with your audience.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    dark: false
  },
  {
    title: 'Support',
    description: 'We provide support services to enhance brand identity and help businesses engage with their audience.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    dark: true
  }
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section id="services" ref={containerRef} className="px-6 md:px-12 py-16 md:py-24 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card p-10 md:p-14 rounded-3xl flex flex-col justify-between min-h-[320px] transition-transform hover:-translate-y-2 duration-300 ${service.dark ? 'bg-[#141414] dark:bg-[#1a1a1a] text-white' : 'bg-white dark:bg-[#141414] text-black dark:text-white shadow-sm dark:shadow-none'
              }`}
          >
            <div className="mb-12 opacity-80">
              {service.icon}
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
              <p className={`text-sm leading-relaxed ${service.dark ? 'text-white/60' : 'text-black/60 dark:text-white/60'}`}>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
