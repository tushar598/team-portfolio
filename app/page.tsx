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
      <Header />
      <Hero />
      <Services />
      <Works />
      <About />
      <Feedback />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
