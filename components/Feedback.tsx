'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Feedback() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      }
    });

    tl.from('.feedback-bg', {
      scale: 0.95,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.feedback-content', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .from('.feedback-image', {
      x: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5');
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="px-6 md:px-12 py-12 max-w-[1600px] mx-auto">
      <div className="feedback-bg bg-[#141414] rounded-[2rem] overflow-hidden relative min-h-[500px] md:min-h-[600px] flex">
        <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center relative z-10">
          <div className="feedback-content max-w-xl">
            {/* Quote Icon */}
            <svg className="w-16 h-16 text-white/20 mb-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight mb-12">
              Welcome to AGNO, where creativity meets technology to transform your brand&apos;s online presence.
            </h3>
            
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/20">
                <Image 
                  src="https://picsum.photos/seed/kate-johnson/200/200"
                  alt="Kate Johnson"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">Kate Johnson</h4>
                <p className="text-white/60 text-sm uppercase tracking-wider">UX Expert</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="feedback-image hidden md:block w-1/2 relative">
          <Image 
            src="https://picsum.photos/seed/robot-forest/800/800"
            alt="Robot in forest"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
