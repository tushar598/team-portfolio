'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const offers = [
  'User Research & Analysis',
  'Usability Testing & Optimization',
  'Wireframing & Prototyping',
  'Design System & Branding',
  'Mobile App UI/UX Design',
  'Web Development',
  'Website UI/UX Design',
  'E-commerce Solutions'
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      }
    });

    tl.from('.about-title', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
      .from('.about-item', {
        x: -20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power3.out'
      }, '-=0.4');
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6">
        <div className="lg:col-span-3">
          <h2 className="text-xs font-bold tracking-widest uppercase text-black/40 dark:text-white/40">What we offer</h2>
        </div>

        <div className="lg:col-span-9 max-w-4xl">
          <h3 className="about-title text-3xl md:text-5xl font-medium leading-tight mb-16 text-[#141414] dark:text-white">
            We specialize in creating, developing, and managing a brand&apos;s identity to help businesses stand out in the marketplace and connect with their target audience.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
            {offers.map((offer, index) => (
              <div key={index} className="about-item flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-black/40 dark:bg-white/40" />
                <span className="text-black/70 dark:text-white/70 font-medium">{offer}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
