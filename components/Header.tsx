'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useLenis } from 'lenis/react';

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const lenis = useLenis();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    lenis?.scrollTo(target, {
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expoOut easing
    });
  };

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, { scope: headerRef });

  return (
    <header ref={headerRef} className="w-full px-6 py-6 md:px-12 md:py-8 flex items-center justify-between z-50 relative">
      <div className="text-2xl font-bold tracking-tighter leading-none dark:text-white">
        AGNO
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium dark:text-white">
        <Link href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="hover:opacity-70 transition-opacity flex items-center gap-1">Home</Link>
        <Link href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="hover:opacity-70 transition-opacity">Services</Link>
        <Link href="#works" onClick={(e) => handleScrollTo(e, '#works')} className="hover:opacity-70 transition-opacity">Works</Link>
        <Link href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="hover:opacity-70 transition-opacity">About</Link>
        <Link href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="hover:opacity-70 transition-opacity">Contact</Link>
      </nav>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link href="#works" onClick={(e) => handleScrollTo(e, '#works')} className="flex items-center gap-1 text-sm font-medium border-b border-black dark:border-white pb-0.5 hover:opacity-70 transition-opacity dark:text-white">
          Discover more <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </header>
  );
}
