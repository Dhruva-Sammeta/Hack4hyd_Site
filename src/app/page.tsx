import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageTransition } from "@/components/ui/PageTransition";
import { CountdownTimer } from "@/components/ui/CountdownTimer";

export const metadata: Metadata = {
  title: "Home | Hack4Hyd",
  description: "Join Hack4Hyd, the premier hackathon for future innovators. Byte By Byte Presents.",
};

export default function Home() {
  return (
    <PageTransition>
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
        {/* Background Elements */}
        <div className="particle-bg" />
        <div className="noise-overlay" />
        <div className="grid-bg" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="floating-dots" />

        <div className="section-container relative z-10 flex flex-col items-center text-center space-y-12">
          
          {/* Supported By Badge */}
          <a 
            href="https://bbb-inititiative.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-h4h-glass-border bg-white/[0.03] backdrop-blur-md hover:border-h4h-primary/30 hover:bg-white/[0.06] transition-all duration-400 group"
          >
            <Image 
              src="/bbb-logo.jpeg" 
              alt="Byte By Byte" 
              width={24} 
              height={24} 
              className="h-6 w-6 rounded-md"
            />
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-h4h-text-muted group-hover:text-h4h-primary transition-colors">
              Byte By Byte Presents
            </span>
          </a>

          {/* Main Title Section */}
          <div className="space-y-6 flex flex-col items-center">
            <span className="section-kicker glow-text-teal">The Premier Hackathon</span>
            
            <Image 
              src="/bbb-hack4hyd-logo.jpg" 
              alt="Hack4Hyd Logo" 
              width={500} 
              height={500} 
              className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-md mx-auto rounded-[2rem] shadow-[0_0_50px_rgba(0,210,255,0.2)] drop-shadow-2xl" 
              priority
            />
            <h1 className="sr-only">Hack4Hyd</h1>

            <p className="body-large max-w-2xl mx-auto pt-4">
              Build, innovate, and conquer at the most anticipated coding event of the year. 
              Join hundreds of developers to shape the future of technology.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="glass-card p-6 md:p-8 rounded-2xl w-full max-w-3xl liquid-shimmer">
            <CountdownTimer />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8">
            <Link href="/register" className="btn-primary">
              Register Now
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
