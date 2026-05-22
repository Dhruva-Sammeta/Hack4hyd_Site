import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    heading: "Event",
    links: [
      { label: "Schedule", href: "/schedule" },
      { label: "Venue", href: "/venue" },
      { label: "Prizes", href: "/prizes" },
      { label: "Past Event", href: "/past-event" },
    ],
  },
  {
    heading: "Participate",
    links: [
      { label: "Register", href: "/register" },
      { label: "Teams", href: "/teams" },
      { label: "Rules", href: "/rules" },
      { label: "Judging Criteria", href: "/judging" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-h4h-glass-border bg-h4h-ink">
      <div className="section-container py-14 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <Image
                src="/logo-infinity.png"
                alt="Hack4Hyd"
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl drop-shadow-md"
              />
              <span className="text-base font-extrabold uppercase tracking-wider text-h4h-text">
                Hack4Hyd <span className="text-h4h-primary">2.0</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-h4h-text-muted">
              Hyderabad&apos;s premier student-led hackathon. Build, innovate, and create solutions that matter.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border border-h4h-primary/20 bg-h4h-surface-light px-3.5 py-1 text-xs font-bold text-h4h-primary">
                Aug 15–16, 2026
              </span>
              <span className="inline-flex items-center rounded-full border border-h4h-glass-border bg-h4h-surface-light px-3.5 py-1 text-xs font-bold text-h4h-text-muted">
                Hyderabad
              </span>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-h4h-primary">
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-h4h-text-muted transition-colors duration-300 hover:text-h4h-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-h4h-glass-border pt-7 md:flex-row">
          <p className="text-xs text-h4h-text-muted">
            &copy; {new Date().getFullYear()} Hack4Hyd. All rights reserved.
          </p>
          <p className="text-xs text-h4h-text-muted/50">
            Built with 💙 by the Hack4Hyd Team
          </p>
        </div>
      </div>
    </footer>
  );
}
