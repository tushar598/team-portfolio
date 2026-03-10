'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
import Link from 'next/link';

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.footer-text', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <footer className="pt-20 pb-12 px-6 border-t border-white/10 relative overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start mb-20 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm text-gray-400 w-full md:w-auto mb-12 md:mb-0">
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-medium mb-2">Ecosystem</h4>
              <a href="#" className="hover:text-white transition-colors">For Founders</a>
              <a href="#" className="hover:text-white transition-colors">For Builders</a>
              <a href="#" className="hover:text-white transition-colors">Metrics</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-medium mb-2">Resources</h4>
              <a
                href={
                   "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                Sepolia Contract 
              </a>
              <a
                href={
                  
                    "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                Etherscan 
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
                GitHub 
              </a>
            </div>
            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <h4 className="text-white font-medium mb-2">Connect</h4>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
                Twitter 
              </a>
              <a href="#" className="hover:text-white transition-colors">Discord</a>
            </div>
          </div>

          <div className="md:text-right w-full md:w-auto">
            <div className="flex items-center md:justify-end gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm">
                P
              </div>
              <span className="font-bold tracking-widest text-lg">PROMPTCOIN</span>
            </div>
            <p className="text-xs text-gray-500 max-w-xs md:ml-auto leading-relaxed border border-white/10 p-4 rounded-xl bg-white/5">
              PromptCoin is a demo token deployed on Sepolia for testing purposes
              only. Not financial advice.
            </p>
          </div>
        </div>

        <div className="text-[14vw] font-bold text-center leading-none tracking-tighter text-white/5 select-none pointer-events-none mt-10 -mb-20">
          PROMPTCOIN
        </div>
      </footer>
    
  );
}
