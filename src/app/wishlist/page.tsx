'use client';

import { ProductCard } from '@/app/components/ProductCard';
import { RemoveButton } from '@/app/components/RemoveButton';

export default function Wishlist() {
  const onRemoveButtonClick = () => {};

  return (
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
  );
}
