import { type ReactNode } from 'react';

export interface ProductCardProps {
  imageSrc?: string;
  title: string;
  rating?: number;
  fullPriceInCents: string;
  salePriceInCents?: string;
  children?: ReactNode;
}
