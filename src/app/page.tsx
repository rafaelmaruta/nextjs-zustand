'use client';

import { useState } from 'react';

import { Breadcrumb } from './components/Breadcrumb';
import { ProductCard } from './components/ProductCard';
import { WishlistButton } from './components/WishlistButton';

export default function Home() {
  const [wishlistButtonState, setWishlistButtonState] = useState<'active' | null>(null);

  const onWishlistButtonClick = () => {
    setWishlistButtonState('active');
  };

  const breadcrumbLinks = [
    {
      label: 'Home',
      href: '/',
      title: 'Home',
      className: '',
    },
  ];

  return (
    <>
      <Breadcrumb links={breadcrumbLinks} />
      <section>
        <ProductCard
          imageSrc="https://static.netshoes.com.br/produtos/tenis-nike-revolution-7-feminino/26/JD8-6363-026/JD8-6363-026_zoom1.jpg?ts=1708096757?ims=544x"
          title="Tênis Nike Revolution 7 Feminino - Preto+Branco"
          fullPrice="39999"
          salePrice="30399"
        >
          <WishlistButton
            onClick={onWishlistButtonClick}
            state={wishlistButtonState}
          />
        </ProductCard>
      </section>
    </>
  );
}
