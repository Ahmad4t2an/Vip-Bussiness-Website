import React, { useState, useEffect } from 'react';
import { useSearch } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SEO } from '../components/SEO';
import { Search } from 'lucide-react';

export function Products() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const initialCategory = params.get('category') || 'all';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  // Sync state if URL changes directly
  useEffect(() => {
    const cat = params.get('category');
    if (cat && cat !== activeCategory) {
      setActiveCategory(cat);
    }
  }, [searchString]);

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.categoryId === activeCategory);

  return (
    <div className="pt-20 bg-slate-50 min-h-screen pb-20">
      <SEO title="Products" description="Explore our range of packaging and printing solutions. Contact us for a custom quote on any product." />
      
      {/* Header */}
      <div className="bg-primary py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Explore our range of packaging and printing solutions. Contact us for a custom quote on any product.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Filter Tabs */}
        <div className="mb-10 bg-white p-2 rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-2 md:pb-0 md:flex-wrap md:justify-center gap-2 px-2 md:px-4 py-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`snap-start whitespace-nowrap px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeCategory === 'all' 
                  ? 'bg-secondary text-primary shadow-sm' 
                  : 'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-primary'
              }`}
              data-testid="filter-btn-all"
            >
              All Products
            </button>
            
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`snap-start whitespace-nowrap px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id 
                    ? 'bg-secondary text-primary shadow-sm' 
                    : 'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-primary'
                }`}
                data-testid={`filter-btn-${cat.id}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 flex items-center justify-between text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-secondary" />
            <span>Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}</span>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
            <div className="text-slate-400 mb-4">
              <Search className="w-12 h-12 mx-auto opacity-20" />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">No products found</h3>
            <p className="text-slate-500">More products coming soon to this category.</p>
            <button 
              onClick={() => setActiveCategory('all')}
              className="mt-6 text-secondary font-semibold hover:text-yellow-600 transition-colors"
            >
              View all products &rarr;
            </button>
          </div>
        )}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
