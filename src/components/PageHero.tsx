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
 * Consistent hero header used across all inner pages (About, Contact, etc.)
 * so heading size, spacing, and layout always match exactly.
 */
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary py-14 md:py-20 text-center">
      <HeroPattern />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 bg-white/10 text-secondary text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">
            {eyebrow}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            {title}
          </h1>
          <div className="w-16 h-1.5 bg-secondary rounded-full mb-6" />
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
