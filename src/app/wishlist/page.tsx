'use client';

import { useCallback, useEffect } from 'react';

import { Breadcrumb } from '@/app/components/Breadcrumb';
import { ProductCard } from '@/app/components/ProductCard';
import { RemoveButton } from '@/app/components/RemoveButton';
import { INNER_PAGE_CLASSES, OUTER_PAGE_CLASSES } from '@/app/constants/styles';
import { useProductsStore } from '@/app/stores/products';
import { useWishlistStore } from '@/app/stores/wishlist';
import { centsToReais } from '@/app/utils/centsToReais';

export default function Wishlist() {
  const { isInWishlist, removeItem } = useWishlistStore();
  const { result, getProducts } = useProductsStore();

  const onRemoveButtonClick = useCallback(
    (code: string) => () => {
      removeItem(code);
    },
    [removeItem],
  );

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <Breadcrumb />
      <section className={OUTER_PAGE_CLASSES}>
        <div className={INNER_PAGE_CLASSES}>
          {result?.products
            .filter((product) => isInWishlist(product.code))
            .map((product) => (
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
                <RemoveButton onClick={onRemoveButtonClick(product.code)} />
              </ProductCard>
            ))}
        </div>
      </section>
    </>
  );
}
