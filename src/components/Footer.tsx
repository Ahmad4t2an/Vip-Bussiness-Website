import React from 'react';
import { Link } from 'wouter';
import { MapPin, Mail, Phone, Building2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import logoPath from '@assets/logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#061226] text-slate-300 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="inline-block bg-white rounded-2xl px-4 py-2 shadow-md mb-2">
              <img src={logoPath} alt="VIP Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Premium packaging and printing solutions for businesses across Oman and the Gulf region. Reliable. Durable. Quality You Can Trust.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors text-sm" data-testid="footer-link-home">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors text-sm" data-testid="footer-link-about">About Us</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-secondary transition-colors text-sm" data-testid="footer-link-products">Products</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors text-sm" data-testid="footer-link-contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Contact Information</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm">Sohar Industrial Estate, Plot No 623, Block 07, Oman</span>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm">P.O.Box: 111, Postal Code: 311<br />C.R. No: 1650662</span>
              </div>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="w-5 h-5 text-secondary shrink-0" />
                <a href="https://wa.me/96877444570" className="text-sm hover:text-white transition-colors" data-testid="footer-link-wa">+968 7744 4570</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:info@visioninterntaionalprojects.com" className="text-sm hover:text-white transition-colors" data-testid="footer-link-email">info@visioninterntaionalprojects.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Vision International Projects. All rights reserved.
          </p>
          <div className="text-sm text-slate-500">
            Designed for Excellence
          </div>
        </div>
      </div>
    </footer>
  );
}
