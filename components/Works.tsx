'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Project Title',
    category: 'Design, Web dev, Jun 2024',
    image: 'https://picsum.photos/seed/vr-girl/800/600',
  },
  {
    title: 'Project Title',
    category: 'Design, Web dev, Jun 2024',
    image: 'https://picsum.photos/seed/robot-blue/800/600',
  }
];

export function Works() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(textRef.current, {
      xPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      }
    });

    gsap.from('.work-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section id="works" ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background scrolling text */}
      <div className="absolute top-0 left-0 w-[200vw] overflow-hidden pointer-events-none opacity-5 dark:opacity-[0.02] z-0">
        <div ref={textRef} className="whitespace-nowrap text-[15vw] font-bold leading-none tracking-tighter uppercase dark:text-white"
        style={{
          color: 'amber'
        }}>
          latest works latest works latest works latest works
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="work-card group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[600px] cursor-pointer">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex justify-between items-end">
                <div className="text-white">
                  <h3 className="text-2xl md:text-3xl font-medium mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm">{project.category}</p>
                </div>
              </div>

              {/* Navigation arrows (decorative for now) */}
              {index === 0 && (
                <div className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowLeft className="w-5 h-5" />
                </div>
              )}
              {index === 1 && (
                <div className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
