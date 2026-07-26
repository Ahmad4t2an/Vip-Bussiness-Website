import { useLocation, Link } from 'wouter';
import { motion } from 'framer-motion';
import { Home, Package, Info, PhoneCall } from 'lucide-react';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/products', icon: Package, label: 'Products' },
  { href: '/about', icon: Info, label: 'About' },
  { href: '/contact', icon: PhoneCall, label: 'Contact' },
];

export function MobileBottomNav() {
  const [location] = useLocation();

  return (
    <div className="md:hidden fixed bottom-4 left-0 right-0 z-50 flex justify-center px-6">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        className="flex items-center gap-1 bg-[#0B1F3D]/95 backdrop-blur-xl rounded-full px-3 py-2 shadow-2xl"
        style={{ border: '1px solid rgba(255,255,255,0.12)' }}
      >
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = location === href;
          return (
            <Link key={href} href={href} data-testid={`mobile-bottom-nav-${label.toLowerCase()}`}>
              <motion.div
                className="flex flex-col items-center justify-center px-4 py-2 rounded-full cursor-pointer relative"
                animate={{
                  backgroundColor: isActive ? 'rgba(227,145,0,0.15)' : 'rgba(255,255,255,0)',
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.15 : 1,
                    y: isActive ? -1 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <Icon
                    className="w-5 h-5 transition-colors duration-200"
                    style={{ color: isActive ? '#E39100' : 'rgba(255,255,255,0.6)' }}
                    strokeWidth={isActive ? 2.2 : 1.8}
                  />
                </motion.div>
                <motion.span
                  animate={{
                    opacity: isActive ? 1 : 0.6,
                    fontSize: isActive ? '10px' : '9px',
                  }}
                  className="font-semibold mt-0.5 leading-none"
                  style={{ color: isActive ? '#E39100' : 'rgba(255,255,255,0.6)' }}
                >
                  {label}
                </motion.span>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
