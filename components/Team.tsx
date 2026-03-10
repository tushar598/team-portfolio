'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const team = [
  {
    name: 'Mark Weber',
    role: 'Lead Designer',
    description: 'Ea pro tibique comprehensam, sed ea verear numquam molestie. Ex vel populo appellantur. Eos ne delenit admodum.',
    image: 'https://picsum.photos/seed/mark-weber/600/400'
  },
  {
    name: 'Kate Johnson',
    role: 'SEO Specialist',
    description: 'Ea pro tibique comprehensam, sed ea verear numquam molestie. Ex vel populo appellantur. Eos ne delenit admodum.',
    image: 'https://picsum.photos/seed/kate-johnson-2/600/400'
  },
  {
    name: 'Alex Smith',
    role: 'Web Developer',
    description: 'Ea pro tibique comprehensam, sed ea verear numquam molestie. Ex vel populo appellantur. Eos ne delenit admodum.',
    image: 'https://picsum.photos/seed/alex-smith/600/400'
  }
];

export function Team() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.team-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="px-6 md:px-12 py-24 max-w-[1600px] mx-auto">
      <h2 className="text-6xl md:text-8xl font-medium tracking-tight mb-16 lowercase dark:text-white">team</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {team.map((member, index) => (
          <div key={index} className="team-card group cursor-pointer">
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-6">
              <Image 
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-medium mb-2 dark:text-white">{member.name}</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-black/50 dark:text-white/50 mb-4">{member.role}</p>
            <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
