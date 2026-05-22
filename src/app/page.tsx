import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageTransition } from "@/components/ui/PageTransition";
import { CountdownTimer } from "@/components/ui/CountdownTimer";

export const metadata: Metadata = {
  title: "Home | Hack4Hyd 2.0",
  description: "Join Hack4Hyd 2.0, the premier hackathon for future innovators.",
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
          
          {/* Main Title Section */}
          <div className="space-y-6 flex flex-col items-center">
            <span className="section-kicker glow-text-teal">The Premier Hackathon</span>
            
            <Image 
              src="/logo-infinity-text.png" 
              alt="Hack4Hyd 2.0 Logo" 
              width={500} 
              height={500} 
              className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-md mx-auto rounded-[2rem] shadow-[0_0_50px_rgba(78,195,205,0.25)] drop-shadow-2xl" 
              priority
            />
            <h1 className="sr-only">Hack4Hyd 2.0</h1>

            <p className="body-large max-w-2xl mx-auto pt-4">
              Build, innovate, and conquer at the most anticipated coding event of the year. 
              Join hundreds of developers to shape the future of technology.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="glass-card p-6 md:p-8 rounded-2xl w-full max-w-3xl">
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
