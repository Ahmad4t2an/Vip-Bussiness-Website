import React, { useState, useEffect } from 'react';
import { useSearch } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SEO } from '../components/SEO';
import { Search, SlidersHorizontal, X, Check, LayoutGrid } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

export function Products() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const initialCategory = params.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync state if URL changes directly
  useEffect(() => {
    const cat = params.get('category');
    if (cat && cat !== activeCategory) {
      setActiveCategory(cat);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString]);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.categoryId === activeCategory);

  const countFor = (id: string) =>
    id === 'all' ? products.length : products.filter(p => p.categoryId === id).length;

  const activeCategoryName =
    activeCategory === 'all' ? 'All Products' : categories.find(c => c.id === activeCategory)?.name;

  const CategoryList = ({ onSelect }: { onSelect?: () => void }) => (
    <nav className="flex flex-col gap-1">
      <button
        onClick={() => { setActiveCategory('all'); onSelect?.(); }}
        className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-colors ${
          activeCategory === 'all'
            ? 'bg-primary text-white'
            : 'text-slate-600 hover:bg-slate-100'
        }`}
        data-testid="filter-btn-all"
      >
        <span>All Products</span>
        <span className={`text-xs ${activeCategory === 'all' ? 'text-secondary' : 'text-slate-400'}`}>
          {countFor('all')}
        </span>
      </button>

      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => { setActiveCategory(cat.id); onSelect?.(); }}
          className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-colors ${
            activeCategory === cat.id
              ? 'bg-primary text-white'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
          data-testid={`filter-btn-${cat.id}`}
        >
          <span>{cat.name}</span>
          <span className={`text-xs ${activeCategory === cat.id ? 'text-secondary' : 'text-slate-400'}`}>
            {countFor(cat.id)}
          </span>
        </button>
      ))}
    </nav>
  );

  return (
    <div className="pt-16 bg-slate-50 min-h-screen pb-20">
      <SEO title="Products" description="Explore our range of packaging and printing solutions. Contact us for a custom quote on any product." />

      {/* Compact header */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <LayoutGrid className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-primary leading-tight">Our Products</h1>
            <p className="text-sm text-slate-500">Browse by category and request a quote</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-8">

          {/* ── Desktop sidebar ─────────────────────────── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 bg-white rounded-xl border border-slate-200 shadow-sm p-4">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-4 mb-3">
                Categories
              </h2>
              <CategoryList />
            </div>
          </aside>

          {/* ── Main content ────────────────────────────── */}
          <div>
            {/* Mobile filter trigger + results row */}
            <div className="flex items-center justify-between gap-3 mb-5">
              <Sheet open={mobileFilterOpen} onOpenChange={setMobileFilterOpen}>
                <SheetTrigger asChild>
                  <button
                    className="lg:hidden inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm rounded-lg px-4 py-2.5 text-sm font-semibold text-primary"
                    data-testid="btn-mobile-filter"
                  >
                    <SlidersHorizontal className="w-4 h-4 text-secondary" />
                    Filter
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[85vw] max-w-xs p-0 flex flex-col">
                  <SheetHeader className="px-5 py-4 border-b border-slate-100 flex-row items-center justify-between space-y-0">
                    <SheetTitle className="text-primary">Categories</SheetTitle>
                    <SheetClose asChild>
                      <button className="text-slate-400 hover:text-slate-600" aria-label="Close">
                        <X className="w-5 h-5" />
                      </button>
                    </SheetClose>
                  </SheetHeader>
                  <div className="p-4 overflow-y-auto">
                    <CategoryList onSelect={() => setMobileFilterOpen(false)} />
                  </div>
                </SheetContent>
              </Sheet>

              <div className="flex items-center gap-2 text-sm text-slate-500 font-medium ml-auto">
                <Search className="w-4 h-4 text-secondary shrink-0" />
                <span className="whitespace-nowrap">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </span>
              </div>
            </div>

            {/* Active category chip */}
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 bg-primary/5 text-primary text-sm font-semibold px-3 py-1.5 rounded-full">
                <Check className="w-3.5 h-3.5 text-secondary" />
                {activeCategoryName}
              </span>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
              >
                <AnimatePresence>
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
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
        </div>
      </div>
    </div>
  );
}
