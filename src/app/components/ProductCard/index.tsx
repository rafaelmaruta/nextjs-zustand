import Image from 'next/image';

import { Price } from '@/app/components/Price';
import { RatingStars } from '@/app/components/RatingStars';

import { ProductCardProps } from './types';

export const ProductCard = ({
  imageSrc,
  title,
  rating,
  fullPriceInCents,
  salePriceInCents,
  children,
}: ProductCardProps) => {
  return (
    <div>
      <div>{children}</div>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          width={100}
          height={150}
        />
      )}
      <h3>{title}</h3>
      <RatingStars rating={rating} />
      <Price
        fullPriceInCents={fullPriceInCents}
        salePriceInCents={salePriceInCents}
      />
    </div>
  );
};
