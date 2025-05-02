'use client';

import { Breadcrumb } from '@/app/components/Breadcrumb';
import { ProductCard } from '@/app/components/ProductCard';
import { RemoveButton } from '@/app/components/RemoveButton';
import { OUTER_PAGE_CLASSES, INNER_PAGE_CLASSES } from '@/app/styles/constants';
import { centsToReais } from '@/app/utils/centsToReais';

export default function Wishlist() {
  const onRemoveButtonClick = () => {};

  return (
    <>
      <Breadcrumb />
      <section className={OUTER_PAGE_CLASSES}>
        <div className={INNER_PAGE_CLASSES}>
          <ProductCard
            imageSrc="https://static.netshoes.com.br/produtos/tenis-nike-revolution-7-feminino/26/JD8-6363-026/JD8-6363-026_zoom1.jpg?ts=1708096757?ims=544x"
            title="Tênis Nike Revolution 7 Feminino - Preto+Branco"
            rating={4.2}
            fullPrice={centsToReais(+'39999')}
            salePrice={centsToReais(+'30399')}
          >
            <RemoveButton onClick={onRemoveButtonClick} />
          </ProductCard>
        </div>
      </section>
    </>
  );
}
