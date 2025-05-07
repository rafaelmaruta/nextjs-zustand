import { create } from 'zustand';

import mockProducts from './mock-products.json';
import { ProductsStore } from './types';

export const useProductsStore = create<ProductsStore>((set) => ({
  result: undefined,
  getProducts: () => set(() => ({ result: mockProducts })),
}));
