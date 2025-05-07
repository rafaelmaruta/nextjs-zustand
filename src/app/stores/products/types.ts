export interface ProductsStore {
  result?: {
    total: number;
    pageSize: number;
    totalPages: number;
    products: Product[];
  };
  getProducts: () => void;
}

type Product = {
  code: string;
  name: string;
  available: boolean;
  visible: boolean;
  details: {
    name: string;
    description: string;
  };
  fullPriceInCents: string;
  salePriceInCents: string;
  rating: number;
  image: string;
  stockAvailable: boolean;
};
