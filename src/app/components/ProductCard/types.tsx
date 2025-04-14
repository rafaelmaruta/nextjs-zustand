import { type ReactNode } from 'react';

export interface ProductCardProps {
  imageSrc?: string;
  title: string;
  rating?: number;
  fullPrice: string;
  salePrice?: string;
  children?: ReactNode;
}
