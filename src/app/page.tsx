'use client';

import { useCallback, useEffect, useState } from 'react';

import { Breadcrumb } from './components/Breadcrumb';
import { ProductCard } from './components/ProductCard';
import { WishlistButton } from './components/WishlistButton';
import { OUTER_PAGE_CLASSES, INNER_PAGE_CLASSES } from './constants/styles';
import { useProductsStore } from './stores/products';
import { centsToReais } from './utils/centsToReais';

export default function Home() {
  const [wishlistButtonState, setWishlistButtonState] = useState<boolean>(false);

  const { result, getProducts } = useProductsStore();

  const onWishlistButtonClick = useCallback(() => {
    setWishlistButtonState(true);
  }, []);

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
            >
              <WishlistButton
                onClick={onWishlistButtonClick}
                isFavorited={wishlistButtonState}
              />
            </ProductCard>
          ))}
        </div>
      </section>
    </>
  );
}
