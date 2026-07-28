import { useRef, useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Shield, Award, Star, Settings, ChevronRight, ChevronLeft } from 'lucide-react';
import { categories, products } from '../data/products';
import { ProductImagePlaceholder, FallbackImage } from '../components/ProductImagePlaceholder';

/* Returns the first product image found for a given category, if any */
function getCategoryImage(categoryId: string): string | undefined {
  return products.find((p) => p.categoryId === categoryId)?.image;
}
import { SEO } from '../components/SEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export function Home() {
  const heroScrollRef = useRef<HTMLDivElement>(null);
  const [heroIndex, setHeroIndex] = useState(0);
  const heroBannerCount = 2;

  const goToHeroSlide = (index: number) => {
    const container = heroScrollRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(heroBannerCount - 1, index));
    container.scrollTo({ left: clamped * container.clientWidth, behavior: 'smooth' });
    setHeroIndex(clamped);
  };

  return (
    <div className="pt-20">
      <SEO title="Home" description="Premium packaging and printing solutions for businesses across Oman. Reliable. Durable. Quality You Can Trust." />

      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-50 py-6 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">

            {/* Prev arrow */}
            <button
              type="button"
              onClick={() => goToHeroSlide(heroIndex - 1)}
              disabled={heroIndex === 0}
              aria-label="Previous banner"
              data-testid="btn-hero-prev"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center disabled:opacity-0 disabled:pointer-events-none transition-opacity"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </button>

            {/* Next arrow */}
            <button
              type="button"
              onClick={() => goToHeroSlide(heroIndex + 1)}
              disabled={heroIndex === heroBannerCount - 1}
              aria-label="Next banner"
              data-testid="btn-hero-next"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center disabled:opacity-0 disabled:pointer-events-none transition-opacity"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </button>

          <div
            ref={heroScrollRef}
            onScroll={(e) => {
              const container = e.currentTarget;
              const idx = Math.round(container.scrollLeft / container.clientWidth);
              setHeroIndex(idx);
            }}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 md:gap-6 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >

            {/* Paper Products banner */}
            <Link
              href="/products?category=paper-products"
              data-testid="hero-banner-paper"
              className="shrink-0 w-full snap-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <picture>
                  <source media="(min-width: 768px)" srcSet="/images/hero-banners/paper-desktop.jpg" />
                  <img
                    src="/images/hero-banners/paper-mobile.jpg"
                    alt="Premium Paper Packaging — Eco-friendly cups, bowls, boxes & business printing"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                </picture>
              </motion.div>
            </Link>

            {/* Plastic Products banner */}
            <Link
              href="/products?category=plastic-products"
              data-testid="hero-banner-plastic"
              className="shrink-0 w-full snap-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <picture>
                  <source media="(min-width: 768px)" srcSet="/images/hero-banners/plastic-desktop.jpg" />
                  <img
                    src="/images/hero-banners/plastic-mobile.jpg"
                    alt="Durable Plastic Packaging — Microwave-safe containers, cutlery & tubs"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                </picture>
              </motion.div>
            </Link>

          </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {Array.from({ length: heroBannerCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToHeroSlide(i)}
                  aria-label={`Go to banner ${i + 1}`}
                  data-testid={`btn-hero-dot-${i}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    heroIndex === i ? 'w-6 bg-secondary' : 'w-2 bg-slate-300'
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── CATEGORIES ─────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">Our Product Range</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {categories.map((category) => (
              <motion.div key={category.id} variants={fadeInUp}>
                <Link
                  href={`/products?category=${category.id}`}
                  className="group block bg-slate-50 border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-secondary/30 transition-all duration-300 h-full flex flex-col"
                  data-testid={`link-category-${category.id}`}
                >
                  <div className="flex-grow flex items-center justify-center bg-white border-b border-slate-100 min-h-[160px] overflow-hidden p-0">
                    <FallbackImage
                      src={getCategoryImage(category.id)}
                      alt={category.name}
                      className="w-full h-40 object-cover"
                      loading="lazy"
                      fallback={<ProductImagePlaceholder />}
                    />
                  </div>
                  <div className="px-4 py-3 flex items-center justify-between bg-primary group-hover:bg-secondary transition-colors duration-300">
                    <h3 className="font-semibold text-sm text-white group-hover:text-primary transition-colors pr-2 leading-snug">{category.name}</h3>
                    <ChevronRight className="w-4 h-4 text-secondary group-hover:text-primary transition-colors shrink-0" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────── */}
      <section className="py-16 bg-[#ECF6FE]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">Why Choose VIP?</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Shield, title: 'Reliable', desc: 'Consistent delivery and uncompromised standards for every order.' },
              { icon: Award, title: 'Durable', desc: 'High-quality materials engineered to protect and present your products perfectly.' },
              { icon: Star, title: 'Trusted Quality', desc: 'The partner of choice for leading brands, restaurants, and agencies across Oman.' },
              { icon: Settings, title: 'Custom Solutions', desc: 'From bespoke business cards to custom-branded food packaging.' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-1.5 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────── */}
      <section className="bg-primary py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-1">Have a product in mind?</h2>
              <p className="text-lg text-white/80">Let's bring your packaging to life.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#E39100] hover:bg-[#cc8200] text-white font-semibold px-6 py-2.5 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap"
              data-testid="btn-banner-quote"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}