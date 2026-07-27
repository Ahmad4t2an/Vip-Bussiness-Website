import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/* Soft decorative pattern shared across inner-page heroes */
function HeroPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12%" cy="15%" r="120" fill="#E39100" fillOpacity="0.06" />
      <circle cx="90%" cy="85%" r="160" fill="#E39100" fillOpacity="0.05" />
      <rect x="82%" y="10%" width="120" height="120" rx="14" fill="none" stroke="#E39100" strokeWidth="1.5" strokeOpacity="0.15" />
      <rect x="4%" y="70%" width="90" height="90" rx="12" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.10" />
    </svg>
  );
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string | ReactNode;
}

/**
 * Consistent hero used across all inner pages (About, Contact, etc.)
 * A compact, rounded card — not a full-bleed banner — for a modern look.
 */
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-8">
      <section className="relative overflow-hidden bg-primary rounded-2xl md:rounded-3xl py-10 md:py-14 px-5 text-center shadow-lg">
        <HeroPattern />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto flex flex-col items-center relative z-10"
        >
          <span className="inline-flex items-center gap-2 bg-white/10 text-secondary text-[11px] font-semibold tracking-wider uppercase px-3.5 py-1 rounded-full mb-4">
            {eyebrow}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
            {title}
          </h1>
          <div className="w-12 h-1 bg-secondary rounded-full mb-4" />
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </motion.div>
      </section>
    </div>
  );
}
