import Image from 'next/image';

import { Price } from '@/app/components/Price';
import { RatingStars } from '@/app/components/RatingStars';

import { ProductCardProps } from './types';

export const ProductCard = ({
  imageSrc,
  title,
  rating,
  fullPrice,
  salePrice,
  children,
}: ProductCardProps) => {
  return (
    <div className="relative h-[292px] w-[220px] rounded-[5px] p-[15px] shadow-[3px_1px_6px_var(--card-shadow)]">
      <div className="absolute top-[10px] right-[10px]">{children}</div>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          width={212}
          height={151}
        />
      )}
      <h3 className="mt-[5px]">{title}</h3>
      <div className="mt-[7px]">
        <RatingStars rating={rating} />
      </div>
      <div className="mt-[7px]">
        <Price
          fullPrice={fullPrice}
          salePrice={salePrice}
        />
      </div>
    </div>
  );
};
