'use client';

import { ProductCard } from '@/app/components/ProductCard';
import { RemoveButton } from '@/app/components/RemoveButton';

import { Breadcrumb } from '../components/Breadcrumb';
import { centsToReais } from '../utils/centsToReais';

export default function Wishlist() {
  const onRemoveButtonClick = () => {};

  return (
    <>
      <Breadcrumb />
      <div>
        <ProductCard
          imageSrc="https://static.netshoes.com.br/produtos/tenis-nike-revolution-7-feminino/26/JD8-6363-026/JD8-6363-026_zoom1.jpg?ts=1708096757?ims=544x"
          title="Tênis Nike Revolution 7 Feminino - Preto+Branco"
          rating={3.2}
          fullPrice={centsToReais(+'39999')}
          salePrice={centsToReais(+'30399')}
        >
          <RemoveButton onClick={onRemoveButtonClick} />
        </ProductCard>
      </div>
    </>
  );
}
