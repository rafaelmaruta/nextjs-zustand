import Image from 'next/image';
import { useMemo } from 'react';

import Star from '@/app/assets/icons/Star.svg';

import { RatingStarsProps } from './types';

const STAR_SIZE = 'h-[13px] w-[13px]';

// Ensures the star maintains its size even with small decimal values
const STAR_SCALE = 'w-[1000%]';

export const RatingStars = ({ rating = 0 }: RatingStarsProps) => {
  const normalizedRating = Math.min(rating, 5);
  let countRating = normalizedRating;

  const Stars = useMemo(
    () =>
      Array.from({ length: 5 })
        .map(() => countRating--)
        .map((count) => {
          if (count >= 1) {
            return (
              <div
                key={`full-${count}`}
                className={STAR_SIZE}
              >
                <Image
                  src={Star}
                  alt="full star"
                />
              </div>
            );
          } else if (count > 0 && count < 1) {
            return (
              <div
                key="half"
                className={`relative ${STAR_SIZE}`}
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
                  style={{ width: `${count * 100}%` }}
                >
                  <div className={STAR_SCALE}>
                    <Image
                      src={Star}
                      alt="half star"
                    />
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={`empty-${count}`}
                className={STAR_SIZE}
              >
                <Image
                  src={Star}
                  alt="empty star"
                  className="opacity-25"
                />
              </div>
            );
          }
        }),
    [countRating],
  );

  return (
    <div className="flex items-center">
      <div className="flex">{Stars}</div>
      <span className="ml-[5px] text-[length:var(--font-size-1)]">{rating.toFixed(1)}</span>
    </div>
  );
};
