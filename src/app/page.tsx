'use client';

import { useCallback, useState } from 'react';

import { Breadcrumb } from './components/Breadcrumb';
import { ProductCard } from './components/ProductCard';
import { WishlistButton } from './components/WishlistButton';

export default function Home() {
  const [wishlistButtonState, setWishlistButtonState] = useState<boolean>(false);

  const onWishlistButtonClick = useCallback(() => {
    setWishlistButtonState(true);
  }, []);

  return (
    <>
      <Breadcrumb />
      <section className="mt-[var(--content-spacing)]">
        <ProductCard
          imageSrc="https://static.netshoes.com.br/produtos/tenis-nike-revolution-7-feminino/26/JD8-6363-026/JD8-6363-026_zoom1.jpg?ts=1708096757?ims=544x"
          title="Tênis Nike Revolution 7 Feminino - Preto+Branco"
          rating={5}
          fullPrice="39999"
          salePrice="30399"
        >
          <WishlistButton
            onClick={onWishlistButtonClick}
            isFavorited={wishlistButtonState}
          />
        </ProductCard>
      </section>
    </>
  );
}
