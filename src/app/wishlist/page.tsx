'use client';

import { ProductCard } from '@/app/components/ProductCard';
import { RemoveButton } from '@/app/components/RemoveButton';

import { Breadcrumb } from '../components/Breadcrumb';

export default function Wishlist() {
  const onRemoveButtonClick = () => {};

  const breadcrumbLinks = [
    {
      label: 'Home',
      href: '/',
      title: 'Home',
      className: '',
    },
    {
      label: 'Wishlist',
      href: '/wishlist',
      title: 'Wishlist',
      className: '',
    },
  ];

  return (
    <>
      <Breadcrumb links={breadcrumbLinks} />
      <div>
        <ProductCard
          imageSrc="https://static.netshoes.com.br/produtos/tenis-nike-revolution-7-feminino/26/JD8-6363-026/JD8-6363-026_zoom1.jpg?ts=1708096757?ims=544x"
          title="Tênis Nike Revolution 7 Feminino - Preto+Branco"
          fullPrice="39999"
          salePrice="30399"
        >
          <RemoveButton onClick={onRemoveButtonClick} />
        </ProductCard>
      </div>
    </>
  );
}
