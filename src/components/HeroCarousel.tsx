import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface HeroCarouselProps {
  images: { src: string; alt: string }[];
  intervalMs?: number;
}

/**
 * Eye-catching auto-rotating banner for the hero section.
 * Cross-fades + slides between a handful of banner photos on a timer,
 * with dot indicators the user can also click.
 *
 * Mobile: a wide, full-bleed, punchy banner (grabs attention immediately).
 * Desktop (lg+): unchanged tall rounded card, positioned beside the hero text.
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
    <div className="relative w-full">
      {/* Glow blobs behind the card — desktop only */}
      <div className="hidden lg:block absolute -top-8 -right-8 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
      <div className="hidden lg:block absolute -bottom-10 -left-10 w-44 h-44 bg-primary/10 rounded-full blur-3xl" />

      {/* Mobile: wide, full-bleed, punchy banner. Desktop: tall rounded card. */}
      <div
        className="relative w-screen -ml-4 sm:-ml-6 aspect-[16/11] overflow-hidden shadow-lg
                   lg:w-full lg:ml-0 lg:aspect-[4/5] lg:max-w-md lg:mx-auto lg:rounded-[2rem] lg:border lg:border-white/60 lg:shadow-2xl bg-white"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index].src}
            src={images[index].src}
            alt={images[index].alt}
            loading="eager"
            fetchPriority={index === 0 ? 'high' : 'auto'}
            initial={{ opacity: 0, x: 40, scale: 1.02 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.98 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Bottom gradient + label */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 via-primary/15 to-transparent p-4 pt-12 lg:p-5 lg:pt-14">
          <p className="text-white font-semibold text-sm tracking-wide">{images[index].alt}</p>
        </div>

        {/* Floating badge */}
        <div className="absolute top-3 left-3 lg:top-4 lg:left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[11px] font-bold text-primary shadow-sm">
          Made for Business
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-4 lg:mt-5">
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
