import Image from 'next/image';

import { Price } from '@/app/components/Price';
import { RatingStars } from '@/app/components/RatingStars';

import { type ProductCardProps } from './types';

export const ProductCard = ({
  sku,
  imageSrc,
  title,
  rating,
  fullPrice,
  salePrice,
  stockAvailable,
  children,
}: ProductCardProps) => {
  return (
    <article
      aria-label={`Product: ${title} ${sku}`}
      className={`relative h-[335px] w-[220px] rounded-[5px] p-[15px] shadow-[3px_1px_6px_var(--card-shadow)] ${stockAvailable ? '' : 'opacity-50'}`}
    >
      <div className="absolute top-[10px] right-[10px]">{children}</div>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          width={212}
          height={151}
        />
      )}
      <h3 className="mt-[7px] block h-[40px] overflow-hidden leading-5">{title}</h3>
      <div className="mt-[5px]">
        <RatingStars rating={rating} />
      </div>
      <div className="mt-[5px]">
        {stockAvailable ? (
          <Price
            fullPrice={fullPrice}
            salePrice={salePrice}
          />
        ) : (
          <span className="text-(length:--font-size-4) font-bold text-red-500">Sem estoque</span>
        )}
      </div>
    </article>
  );
};
