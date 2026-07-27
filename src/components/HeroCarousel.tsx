import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface HeroCarouselProps {
  images: { src: string; alt: string }[];
  intervalMs?: number;
}

/**
 * Eye-catching auto-rotating banner for the hero section.
 * Cross-fades + slides between a handful of product photos on a timer,
 * with dot indicators the user can also click.
 */
export function HeroCarousel({ images, intervalMs = 3500 }: HeroCarouselProps) {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(next, intervalMs);
    return () => clearInterval(timer);
  }, [next, intervalMs]);

  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      {/* Glow blobs behind the card */}
      <div className="absolute -top-8 -right-8 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/60 shadow-2xl bg-white">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index].src}
            src={images[index].src}
            alt={images[index].alt}
            initial={{ opacity: 0, x: 40, scale: 1.02 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.98 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Bottom gradient + label */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent p-5 pt-14">
          <p className="text-white font-semibold text-sm tracking-wide">{images[index].alt}</p>
        </div>

        {/* Floating badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[11px] font-bold text-primary shadow-sm">
          Made for Business
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setIndex(i)}
            aria-label={`Show ${img.alt}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-secondary' : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
