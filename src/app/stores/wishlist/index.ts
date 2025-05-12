import { create } from 'zustand';
import { combine, devtools, persist } from 'zustand/middleware';

export const useWishlistStore = create(
  devtools(
    persist(
      combine({ items: [] as string[] }, (set) => ({
        addItem: (sku: string) => set((state) => ({ items: [...state.items, sku] })),
        removeItem: (sku: string) =>
          set((state) => ({
            items: state.items.filter((item) => item !== sku),
          })),
      })),
      { name: 'wishlistStore' },
    ),
  ),
);
