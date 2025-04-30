import Image from 'next/image';
import { useMemo } from 'react';

import Star from '@/app/assets/icons/Star.svg';

import { RatingStarsProps } from './types';

export const RatingStars = ({ rating = 0 }: RatingStarsProps) => {
  const integerPart = Math.floor(rating);
  const decimalPart = rating % 1;

  const fullStars = useMemo(
    () =>
      Array.from({ length: integerPart }, (_, index) => (
        <div
          key={`full-${index}`}
          className="h-[13px] w-[13px]"
        >
          <Image
            src={Star}
            alt="full star"
          />
        </div>
      )),
    [integerPart],
  );

  const halfStar = useMemo(
    () =>
      decimalPart > 0 && (
        <div
          key="half"
          className="relative h-[13px] w-[13px]"
        >
          <div className="absolute inset-0">
            <Image
              src={Star}
              alt="half star"
              className="opacity-25"
            />
          </div>
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${decimalPart * 100}%` }}
          >
            <div style={{ width: '1000%' }}>
              <Image
                src={Star}
                alt="half star"
              />
            </div>
          </div>
        </div>
      ),
    [decimalPart],
  );

  const emptyStars = useMemo(
    () =>
      Array.from({ length: 5 - Math.ceil(rating) }, (_, index) => (
        <div
          key={`empty-${index}`}
          className="h-[13px] w-[13px]"
        >
          <Image
            src={Star}
            alt="empty star"
            className="opacity-25"
          />
        </div>
      )),
    [rating],
  );

  return (
    <div className="flex items-center">
      <div className="flex">
        {fullStars}
        {halfStar}
        {emptyStars}
      </div>
      <span className="ml-[5px] text-[length:var(--font-size-1)]">{rating.toFixed(1)}</span>
    </div>
  );
};
