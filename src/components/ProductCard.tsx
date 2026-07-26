import React from 'react';
import { Product, categories } from '../data/products';
import { FallbackImage } from './ProductImagePlaceholder';
import { Recycle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const category = categories.find((c) => c.id === product.categoryId);
  const categoryName = category ? category.name : 'Unknown Category';

  const specsText = product.specs.map((s) => `${s.label}: ${s.value}`).join(', ');
  const message = `Hi, I'm interested in ${product.name} (${categoryName}). Specs: ${specsText}. Please share more details and a quote.`;
  const whatsappUrl = `https://wa.me/96877444570?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow group" data-testid={`card-product-${product.id}`}>
      {/* Image container */}
      <div className="relative aspect-square p-4 flex items-center justify-center bg-white border-b border-slate-100">
        <FallbackImage 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.recycleCode && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-600 text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
            <Recycle className="w-3 h-3 text-green-600" />
            {product.recycleCode}
          </div>
        )}
      </div>

      {/* Banner */}
      <div className="bg-primary text-primary-foreground p-3 text-center">
        <h3 className="font-bold text-sm md:text-base leading-tight tracking-wide">{product.name}</h3>
      </div>

      {/* Specs table */}
      <div className="p-4 flex-grow bg-slate-50 flex flex-col">
        <div className="space-y-2 mb-4 flex-grow">
          {product.specs.map((spec, index) => (
            <div key={index} className="flex justify-between items-center text-xs md:text-sm border-b border-slate-200 pb-1 last:border-0 last:pb-0">
              <span className="text-slate-500 font-medium">{spec.label}</span>
              <span className="text-slate-800 font-semibold text-right pl-2">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-secondary hover:bg-yellow-500 text-primary font-bold text-center py-2.5 rounded transition-colors text-sm"
          data-testid={`btn-quote-${product.id}`}
        >
          Get a Quote
        </a>
      </div>
    </div>
  );
}
