import React, { useState } from 'react';
import { PackageOpen } from 'lucide-react';

export function ProductImagePlaceholder() {
  return (
    <div className="w-full h-full bg-slate-50 border border-dashed border-slate-300 rounded-sm flex flex-col items-center justify-center text-slate-400 p-4 min-h-[240px]">
      <PackageOpen className="w-12 h-12 mb-3 text-slate-300" />
      <span className="text-sm font-medium text-center">Product image coming soon</span>
    </div>
  );
}

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: React.ReactNode;
}

export function FallbackImage({ src, alt, className, fallback = <ProductImagePlaceholder />, ...props }: ImageProps) {
  const [error, setError] = useState(!src);

  if (error) {
    return <div className={className}>{fallback}</div>;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
