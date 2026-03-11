import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Works } from '@/components/Works';
import { About } from '@/components/About';
import { Feedback } from '@/components/Feedback';
import { Team } from '@/components/Team';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] dark:bg-[#0a0a0a] transition-colors duration-300">

      {/* ── Hero + Header share the same full-viewport Spline background ── */}
      <div className="relative w-full h-screen overflow-hidden" data-lenis-prevent>
        {/* Spline 3D fills the entire block */}
        <Hero />

        {/* Header floats on top, transparent bg */}
        <div className="relative z-10 pointer-events-auto">
          <Header />
        </div>
      </div>

      {/* ── Rest of the page ── */}
      <div className="lazy-section"><Services /></div>
      <div className="lazy-section"><Works /></div>
      <div className="lazy-section"><About /></div>
      <div className="lazy-section"><Feedback /></div>
      <div className="lazy-section"><Team /></div>
      <div className="lazy-section"><Contact /></div>
      <Footer />
    </main>
  );
}
