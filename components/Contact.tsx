'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      }
    });

    tl.from('.contact-title', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
      .from('.contact-input', {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power3.out'
      }, '-=0.4');
  }, { scope: containerRef });

  return (
    <section id="contact" ref={containerRef} className="px-6 md:px-12 py-24 md:py-32 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
        <div>
          <h2 className="text-xs font-bold tracking-widest uppercase text-black/40 dark:text-white/40 mb-8">Let&apos;s get in touch</h2>
          <h3 className="contact-title text-6xl md:text-8xl font-medium tracking-tight leading-[0.9] lowercase dark:text-white">
            have a<br />project?
          </h3>
        </div>

        <div className="flex flex-col justify-center">
          <form className="flex flex-col gap-12 max-w-xl w-full">
            <div className="contact-input relative">
              <input
                type="text"
                placeholder="Name*"
                className="w-full bg-transparent border-b border-black/20 dark:border-white/20 pb-4 text-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder:text-black/40 dark:placeholder:text-white/40 dark:text-white"
                required
              />
            </div>
            <div className="contact-input relative">
              <input
                type="email"
                placeholder="E-mail*"
                className="w-full bg-transparent border-b border-black/20 dark:border-white/20 pb-4 text-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder:text-black/40 dark:placeholder:text-white/40 dark:text-white"
                required
              />
            </div>
            <div className="contact-input relative">
              <input
                type="text"
                placeholder="Message*"
                className="w-full bg-transparent border-b border-black/20 dark:border-white/20 pb-4 text-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder:text-black/40 dark:placeholder:text-white/40 dark:text-white"
                required
              />
            </div>
            <div className="contact-input">
              <button type="submit" className="flex items-center gap-2 text-sm font-medium border-b border-black dark:border-white pb-1 hover:opacity-70 transition-opacity w-max dark:text-white">
                Send message <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
