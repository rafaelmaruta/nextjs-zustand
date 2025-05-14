import { type ReactNode } from 'react';

export type ProductCardProps = {
  sku: string;
  imageSrc?: string;
  title: string;
  rating?: number;
  fullPrice: string;
  salePrice?: string;
  stockAvailable: boolean;
  children?: ReactNode;
  onImageError?: () => void;
};
