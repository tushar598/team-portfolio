'use client';

import { ReactLenis } from 'lenis/react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Sync GSAP ScrollTrigger with Lenis RAF
    const update = () => {
      ScrollTrigger.update();
    };

    gsap.ticker.add(update);
    // Cap GSAP ticker to 60fps max — prevents unnecessary GPU work
    gsap.ticker.fps(60);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis root options={{
      lerp: 0.12,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      syncTouch: true,
    }}>
      {children}
    </ReactLenis>
  );
}
