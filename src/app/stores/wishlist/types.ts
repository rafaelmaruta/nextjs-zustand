export interface WishlistStore {
  items: string[];
  addItem: (sku: string) => void;
  removeItem: (sku: string) => void;
}
