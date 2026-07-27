import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Shield, Award, Star, Settings, ChevronRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { categories, products } from '../data/products';
import { ProductImagePlaceholder, FallbackImage } from '../components/ProductImagePlaceholder';

/* Returns the first product image found for a given category, if any */
function getCategoryImage(categoryId: string): string | undefined {
  return products.find((p) => p.categoryId === categoryId)?.image;
}
import { SEO } from '../components/SEO';
import { HeroCarousel } from '../components/HeroCarousel';
import logoPath from '@assets/logo.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

/* Packaging SVG decorations for hero */
function HeroBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Large translucent box shape right */}
      <rect x="72%" y="8%" width="200" height="200" rx="16" fill="none" stroke="#0B1F3D" strokeWidth="1.5" strokeOpacity="0.08" />
      <rect x="74%" y="11%" width="160" height="160" rx="10" fill="#0B1F3D" fillOpacity="0.03" stroke="#E39100" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="6 4" />
      {/* Floating small box top-right */}
      <rect x="85%" y="5%" width="80" height="80" rx="8" fill="none" stroke="#E39100" strokeWidth="1.5" strokeOpacity="0.15" />
      {/* Circle accent */}
      <circle cx="80%" cy="80%" r="120" fill="#E39100" fillOpacity="0.04" />
      <circle cx="15%" cy="90%" r="90" fill="#0B1F3D" fillOpacity="0.04" />
      {/* Dot grid */}
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={`${62 + col * 5}%`}
            cy={`${10 + row * 15}%`}
            r="1.5"
            fill="#0B1F3D"
            fillOpacity="0.06"
          />
        ))
      )}
      {/* Diagonal stripe accent bottom-left */}
      <line x1="0%" y1="90%" x2="20%" y2="100%" stroke="#E39100" strokeWidth="60" strokeOpacity="0.04" />
    </svg>
  );
}

export function Home() {
  return (
    <div className="pt-20">
      <SEO title="Home" description="Premium packaging and printing solutions for businesses across Oman. Reliable. Durable. Quality You Can Trust." />

      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#ECF6FE] via-[#EFF7FD] to-[#F5F9FD] py-20 lg:py-28">
        <HeroBg />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* ── Left: text content ── */}
            <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="mb-6 inline-block"
              >
                <img
                  src={logoPath}
                  alt="VIP Logo"
                  className="h-20 md:h-24 mx-auto lg:mx-0 mix-blend-multiply drop-shadow-lg"
                />
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.18 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-primary mb-4 leading-tight"
              >
                Reliable. Durable.
                <br />
                <span className="text-secondary">Quality You Can Trust.</span>
              </motion.h1>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                className="text-base md:text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 font-medium"
              >
                Vision International Projects (VIP) delivers premium food packaging, printing, and stationery solutions across Oman and the region.
              </motion.p>

              {/* CTA Buttons — consistent size */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.42 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#E39100] hover:bg-[#cc8200] text-white font-semibold px-6 py-2.5 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto"
                  data-testid="btn-hero-quote"
                >
                  Get a Quote <ChevronRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/96877444570?text=Hi%2C%20I%20am%20interested%20in%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-2.5 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto"
                  data-testid="btn-hero-wa"
                >
                  <FaWhatsapp className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </motion.div>
            </div>

            {/* ── Right: auto-scrolling banner ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <HeroCarousel
                images={[
                  { src: '/images/products/microwave-containers-7.jpg', alt: 'Microwave-Safe Containers' },
                  { src: '/images/products/cups-lids-9.jpg', alt: 'Premium Cups & Lids' },
                  { src: '/images/products/kraft-bowls-3.jpg', alt: 'Eco Kraft Salad Bowls' },
                ]}
              />
            </motion.div>

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
