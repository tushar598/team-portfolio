'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useLenis } from 'lenis/react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    lenis?.scrollTo(target, {
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    tl.from('.hero-card', {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      delay: 0.2
    });
  }, { scope: containerRef });

  return (
    <section id="home" ref={containerRef} className="px-6 md:px-12 py-8 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
        {/* Main large card */}
        <div className="hero-card lg:col-span-7 bg-[#111111] rounded-3xl overflow-hidden relative group text-white p-8 md:p-12 flex flex-col justify-end min-h-[400px]">
          <Image
            src="https://picsum.photos/seed/abstract-gradient/1200/800"
            alt="Abstract Gradient"
            fill
            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="relative z-10 max-w-xl">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
              Elevate Your Brand<br />with Next-Gen AI<br />Solutions
            </h1>
            <p className="text-white/70 text-base md:text-lg mb-8 max-w-md">
              We are passionate about delivering innovative solutions tailored to your unique goals.
            </p>
            <Link
              href="#works"
              onClick={(e) => handleScrollTo(e, '#works')}
              className="inline-flex items-center gap-2 text-sm font-medium border-b border-white/30 pb-1 hover:border-white transition-colors"
            >
              Discover more <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right side grid */}
        <div className="lg:col-span-5 grid grid-rows-2 gap-6">
          {/* Top right card */}
          <div className="hero-card bg-gradient-to-br from-[#80A4E3] via-[#E2D2E8] to-[#F1E4B3] rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
            <h2 className="text-6xl md:text-8xl font-medium text-white drop-shadow-sm mb-2">70+</h2>
            <p className="text-white/90 text-lg font-medium">Successful Projects</p>
          </div>

          {/* Bottom right split */}
          <div className="grid grid-cols-2 gap-6">
            <div className="hero-card relative rounded-3xl overflow-hidden min-h-[200px]">
              <Image
                src="https://picsum.photos/seed/cyberpunk-girl/600/600"
                alt="AI Model"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="hero-card bg-gradient-to-br from-[#A5DDF8] to-[#E7F2FA] rounded-3xl p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
              <Image
                src="https://picsum.photos/seed/gradient-wave/600/600"
                alt="Wave"
                fill
                className="object-cover opacity-30 mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10">
                <h2 className="text-5xl md:text-6xl font-medium text-black mb-2">10+</h2>
                <p className="text-black/70 font-medium">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
