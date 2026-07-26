import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Target, Eye, Building2, FileCheck, Mail, MapPin, ChevronRight, ShieldCheck, Recycle, Factory } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SEO } from '../components/SEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

/* Soft decorative pattern for the hero — echoes the Home hero language */
function AboutHeroBg() {
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
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 10 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={`${8 + col * 9}%`} cy={`${12 + row * 7}%`} r="1.4" fill="#ffffff" fillOpacity="0.10" />
        ))
      )}
    </svg>
  );
}

export function About() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <SEO title="About Us" description="Learn about Vision International Projects, our mission, vision, and commitment to quality packaging across Oman." />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-24 text-center">
        <AboutHeroBg />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 text-secondary text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">
              About Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Vision International Projects
            </h1>
            <div className="w-16 h-1.5 bg-secondary rounded-full mb-6" />
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              A premier supplier of food-grade packaging, paper products, and business printing —
              built on reliability, durability, and quality you can trust.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="max-w-5xl mx-auto">

          {/* ── STORY ──────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          >
            <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed mb-5">
              Based in Oman, VIP specializes in food-grade plastic containers, eco-friendly paper cups,
              reliable industrial buckets, and professional business stationery.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our clients range from established restaurants and industrial manufacturers to advertising
              agencies and freelancers. We believe packaging is more than a container — it's a statement
              of quality and a commitment to your customers.
            </p>
          </motion.div>

          {/* ── HIGHLIGHTS STRIP ───────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16 md:mb-20"
          >
            {[
              { icon: ShieldCheck, title: 'Trusted Quality', desc: 'Consistent standards on every order, every time.' },
              { icon: Recycle, title: 'Eco-Conscious', desc: 'Sustainable materials wherever the product allows.' },
              { icon: Factory, title: 'In-House Production', desc: 'Full control from raw material to finished piece.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 text-center flex flex-col items-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-bold text-primary mb-1.5">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* ── MISSION & VISION ───────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden text-center flex flex-col items-center"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Target className="w-7 h-7 text-secondary" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3 relative z-10">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed relative z-10">
                To deliver reliable, durable, and premium packaging solutions that empower businesses to
                present their products with confidence — becoming the most trusted partner for quality and
                consistency in the region.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden text-center flex flex-col items-center"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
              <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Eye className="w-7 h-7 text-secondary" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3 relative z-10">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed relative z-10">
                To innovate and lead the packaging industry by expanding our capabilities, adopting
                sustainable materials, and setting the benchmark for manufacturing excellence in the Gulf.
              </p>
            </motion.div>
          </motion.div>

          {/* ── CORPORATE DETAILS ──────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
            className="bg-primary text-white rounded-2xl overflow-hidden shadow-lg mb-16 md:mb-20"
          >
            <div className="p-8 md:p-12">
              <h2 className="text-xl md:text-2xl font-bold text-secondary mb-8 text-center sm:text-left">
                Corporate Details
              </h2>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4 text-left">
                  <div className="bg-white/10 p-3 rounded-lg shrink-0">
                    <Building2 className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-1">Company</h3>
                    <p className="font-medium text-lg">Vision International Projects</p>
                    <p className="text-slate-400 mt-1">C.R. No: 1650662</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-left">
                  <div className="bg-white/10 p-3 rounded-lg shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-1">Location</h3>
                    <p className="font-medium">Sohar Industrial Estate</p>
                    <p className="text-slate-400">Plot No 623, Block 07, Oman</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-left">
                  <div className="bg-white/10 p-3 rounded-lg shrink-0">
                    <FileCheck className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-1">Postal Info</h3>
                    <p className="font-medium">P.O.Box: 111</p>
                    <p className="text-slate-400">Postal Code: 311</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-left">
                  <div className="bg-white/10 p-3 rounded-lg shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-1">Contact</h3>
                    <p className="font-medium break-all">info@visioninterntaionalprojects.com</p>
                    <p className="text-slate-400 mt-1">+968 7744 4570</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── CTA ────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Let's work together</h2>
            <p className="text-slate-500 mb-7">Reach out and let's bring your packaging to life.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#E39100] hover:bg-[#cc8200] text-white font-semibold px-6 py-2.5 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto"
                data-testid="btn-about-quote"
              >
                Get a Quote <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/96877444570?text=Hi%2C%20I%20am%20interested%20in%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-2.5 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto"
                data-testid="btn-about-wa"
              >
                <FaWhatsapp className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
