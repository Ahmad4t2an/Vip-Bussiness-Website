import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Building2, FileCheck, Mail, MapPin } from 'lucide-react';
import { SEO } from '../components/SEO';

export function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <SEO title="About Us" description="Learn about Vision International Projects, our mission, vision, and commitment to quality." />
      
      {/* Header */}
      <div className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Vision International Projects</h1>
            <div className="w-20 h-1.5 bg-secondary rounded-full" />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="prose prose-lg prose-slate max-w-none mb-16 text-slate-700 font-medium leading-relaxed"
          >
            <p className="text-xl">
              Vision International Projects (VIP) is a premier supplier of high-quality packaging and printing solutions based in Oman. We specialize in providing food-grade plastic containers, eco-friendly paper cups, reliable industrial buckets, and professional business stationery. 
            </p>
            <p>
              Our clients range from established restaurants and industrial manufacturers to advertising agencies and freelancers. We believe that packaging is more than just a container—it's a statement of quality and a commitment to your customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To deliver reliable, durable, and premium packaging solutions that empower businesses to present their products with confidence. We strive to be the most trusted partner for quality and consistency in the region.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, delay: 0.2 }}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
              <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To innovate and lead the packaging industry by continually expanding our capabilities, adopting sustainable materials, and setting the benchmark for manufacturing excellence in the Gulf.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-primary text-white rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-secondary mb-8">Corporate Details</h2>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg shrink-0">
                    <Building2 className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-1">Company</h3>
                    <p className="font-medium text-lg">Vision International Projects</p>
                    <p className="text-slate-400 mt-1">C.R. No: 1650662</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-1">Location</h3>
                    <p className="font-medium">Sohar Industrial Estate</p>
                    <p className="text-slate-400">Plot No 623, Block 07, Oman</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg shrink-0">
                    <FileCheck className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-1">Postal Info</h3>
                    <p className="font-medium">P.O.Box: 111</p>
                    <p className="text-slate-400">Postal Code: 311</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
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

        </div>
      </div>
    </div>
  );
}
