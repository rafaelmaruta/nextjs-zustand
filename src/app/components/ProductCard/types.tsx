import { type ReactNode } from 'react';

export type ProductCardProps = {
  sku: string;
  imageSrc?: string;
  title: string;
  rating?: number;
  fullPrice: string;
  salePrice?: string;
  children?: ReactNode;
  onImageError?: () => void;
};
