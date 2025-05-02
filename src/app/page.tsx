'use client';

import { useCallback, useState } from 'react';

import { Breadcrumb } from './components/Breadcrumb';
import { ProductCard } from './components/ProductCard';
import { WishlistButton } from './components/WishlistButton';
import { OUTER_PAGE_CLASSES, INNER_PAGE_CLASSES } from './styles/constants';
import { centsToReais } from './utils/centsToReais';

export default function Home() {
  const [wishlistButtonState, setWishlistButtonState] = useState<boolean>(false);

  const onWishlistButtonClick = useCallback(() => {
    setWishlistButtonState(true);
  }, []);

  return (
    <>
      <Breadcrumb />
      <section className={OUTER_PAGE_CLASSES}>
        <div className={INNER_PAGE_CLASSES}>
          <ProductCard
            imageSrc="https://static.netshoes.com.br/produtos/tenis-nike-revolution-7-feminino/26/JD8-6363-026/JD8-6363-026_zoom1.jpg?ts=1708096757?ims=544x"
            title="Tênis Nike Revolution 7 Feminino - Preto+Branco"
            rating={4.7}
            fullPrice={centsToReais(+'39999')}
            salePrice={centsToReais(+'30399')}
          >
            <WishlistButton
              onClick={onWishlistButtonClick}
              isFavorited={wishlistButtonState}
            />
          </ProductCard>
          <ProductCard
            imageSrc="https://static.netshoes.com.br/produtos/tenis-nike-revolution-7-feminino/26/JD8-6363-026/JD8-6363-026_zoom1.jpg?ts=1708096757?ims=544x"
            title="Tênis Nike Revolution 7 Feminino - Preto+Branco"
            rating={4.7}
            fullPrice={centsToReais(+'39999')}
            salePrice={centsToReais(+'30399')}
          >
            <WishlistButton
              onClick={onWishlistButtonClick}
              isFavorited={wishlistButtonState}
            />
          </ProductCard>
          <ProductCard
            imageSrc="https://static.netshoes.com.br/produtos/tenis-nike-revolution-7-feminino/26/JD8-6363-026/JD8-6363-026_zoom1.jpg?ts=1708096757?ims=544x"
            title="Tênis Nike Revolution 7 Feminino - Preto+Branco"
            rating={4.7}
            fullPrice={centsToReais(+'39999')}
            salePrice={centsToReais(+'30399')}
          >
            <WishlistButton
              onClick={onWishlistButtonClick}
              isFavorited={wishlistButtonState}
            />
          </ProductCard>
          <ProductCard
            imageSrc="https://static.netshoes.com.br/produtos/tenis-nike-revolution-7-feminino/26/JD8-6363-026/JD8-6363-026_zoom1.jpg?ts=1708096757?ims=544x"
            title="Tênis Nike Revolution 7 Feminino - Preto+Branco"
            rating={4.7}
            fullPrice={centsToReais(+'39999')}
            salePrice={centsToReais(+'30399')}
          >
            <WishlistButton
              onClick={onWishlistButtonClick}
              isFavorited={wishlistButtonState}
            />
          </ProductCard>
          <ProductCard
            imageSrc="https://static.netshoes.com.br/produtos/tenis-nike-revolution-7-feminino/26/JD8-6363-026/JD8-6363-026_zoom1.jpg?ts=1708096757?ims=544x"
            title="Tênis Nike Revolution 7 Feminino - Preto+Branco"
            rating={4.7}
            fullPrice={centsToReais(+'39999')}
            salePrice={centsToReais(+'30399')}
          >
            <WishlistButton
              onClick={onWishlistButtonClick}
              isFavorited={wishlistButtonState}
            />
          </ProductCard>
        </div>
      </section>
    </>
  );
}
