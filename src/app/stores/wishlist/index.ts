import { create } from 'zustand';
import { combine, devtools, persist } from 'zustand/middleware';

export const useWishlistStore = create(
  devtools(
    persist(
      combine({ items: [] as string[] }, (set, get) => ({
        isInWishlist: (code: string) => get().items.some((item) => item === code),
        addItem: (code: string) => set((state) => ({ items: [...state.items, code] })),
        removeItem: (code: string) =>
          set((state) => ({
            items: state.items.filter((item) => item !== code),
          })),
      })),
      { name: 'wishlistStore' },
    ),
  ),
);
