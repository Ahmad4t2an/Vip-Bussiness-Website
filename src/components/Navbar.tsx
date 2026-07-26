import { useLocation, Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Package, Info, PhoneCall } from 'lucide-react';
import logoPath from '@assets/logo.png';

const navLinks = [
  { name: 'Home',       href: '/',        icon: Home },
  { name: 'About Us',   href: '/about',   icon: Info },
  { name: 'Products',   href: '/products',icon: Package },
  { name: 'Contact Us', href: '/contact', icon: PhoneCall },
];

export function Navbar() {
  const [location] = useLocation();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full max-w-5xl rounded-full bg-[#0B1F3D]/95 backdrop-blur-xl shadow-2xl shadow-black/30"
        style={{ border: '1px solid rgba(255,255,255,0.08)' }}
      >
        {/* ── Shared inner row ── */}
        <div className="flex items-center justify-between px-2 py-1.5">

          {/* Logo in white pill */}
          <Link href="/" data-testid="link-logo" className="flex-shrink-0">
            <div className="bg-white rounded-full px-2.5 py-1 flex items-center justify-center shadow-md">
              <img
                src={logoPath}
                alt="Vision International Projects"
                className="h-7 sm:h-9 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop: text links */}
          <nav className="hidden md:flex items-center gap-1 mx-4 flex-1 justify-center">
            {navLinks.map(({ name, href }) => {
              const isActive = location === href;
              return (
                <Link
                  key={href}
                  href={href}
                  data-testid={`link-nav-${name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#E39100] bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop: CTA */}
          <Link
            href="/contact"
            data-testid="link-nav-quote"
            className="hidden md:flex items-center bg-[#E39100] hover:bg-[#cc8200] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg flex-shrink-0"
          >
            Get a Quote
          </Link>

          {/* Mobile: 4 icon buttons — all fit inside the pill */}
          <div className="flex md:hidden items-center">
            {navLinks.map(({ name, href, icon: Icon }) => {
              const isActive = location === href;
              return (
                <Link
                  key={href}
                  href={href}
                  data-testid={`link-mobile-nav-${name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
                  style={{ background: isActive ? 'rgba(227,145,0,0.18)' : 'transparent' }}
                >
                  <motion.div
                    animate={{ scale: isActive ? 1.12 : 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                  >
                    <Icon
                      style={{ color: isActive ? '#E39100' : 'rgba(255,255,255,0.6)' }}
                      strokeWidth={isActive ? 2.2 : 1.8}
                      size={19}
                    />
                  </motion.div>
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="absolute bottom-1.5 w-1 h-1 rounded-full bg-[#E39100]"
                      />
                    )}
                  </AnimatePresence>
                </Link>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
