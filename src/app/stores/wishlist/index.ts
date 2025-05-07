import { create } from 'zustand';

import { WishlistStore } from './types';

export const useWishlistStore = create<WishlistStore>((set) => ({
  items: [],
  addItem: (sku) => set((state) => ({ items: [...state.items, sku] })),
  removeItem: (sku) =>
    set((state) => ({
      items: state.items.filter((item) => item !== sku),
    })),
}));
