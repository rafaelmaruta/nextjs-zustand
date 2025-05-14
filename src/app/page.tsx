'use client';

import { useCallback, useEffect } from 'react';

import { Breadcrumb } from './components/Breadcrumb';
import { ProductCard } from './components/ProductCard';
import { WishlistButton } from './components/WishlistButton';
import { INNER_PAGE_CLASSES, OUTER_PAGE_CLASSES } from './constants/styles';
import { useProductsStore } from './stores/products';
import { useWishlistStore } from './stores/wishlist';
import { centsToReais } from './utils/centsToReais';

export default function Home() {
  const { isInWishlist, addItem, removeItem } = useWishlistStore();
  const { result, getProducts } = useProductsStore();

  const onWishlistButtonClick = useCallback(
    (code: string) => () => {
      if (isInWishlist(code)) {
        removeItem(code);
      } else {
        addItem(code);
      }
    },
    [isInWishlist, addItem, removeItem],
  );

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <Breadcrumb />
      <section className={OUTER_PAGE_CLASSES}>
        <div className={INNER_PAGE_CLASSES}>
          {result?.products.map((product) => (
            <ProductCard
              key={product.code}
              sku={product.code}
              imageSrc={product.image}
              title={product.name}
              rating={product.rating}
              fullPrice={centsToReais(+product.fullPriceInCents)}
              salePrice={centsToReais(+product.salePriceInCents)}
              stockAvailable={product.stockAvailable}
            >
              {product.stockAvailable && (
                <WishlistButton
                  onClick={onWishlistButtonClick(product.code)}
                  isFavorited={isInWishlist(product.code)}
                />
              )}
            </ProductCard>
          ))}
        </div>
      </section>
    </>
  );
}
