import { useMemo } from 'react';

import { EmptyStar } from './fragments/EmptyStar';
import { FullStar } from './fragments/FullStar';
import { PartialStar } from './fragments/PartialStar';
import { type RatingStarsProps } from './types';

const STAR_SIZE = 'h-[13px] w-[13px]';

// Ensures the star maintains its size even with small decimal values
const STAR_SCALE = 'w-[1000%]';

export const RatingStars = ({ rating = 0, maxSize = 5 }: RatingStarsProps) => {
  const normalizedRating = useMemo(() => Math.min(rating, maxSize), [rating, maxSize]);

  const renderStars = useMemo(
    () =>
      Array.from({ length: maxSize }).map((_, index) => {
        const value = normalizedRating - index;
        if (value >= 1) {
          return (
            <FullStar
              key={`full-${index}`}
              starSize={STAR_SIZE}
            />
          );
        } else if (value > 0) {
          return (
            <PartialStar
              key={`partial-${index}`}
              percentage={value}
              starSize={STAR_SIZE}
              starScale={STAR_SCALE}
            />
          );
        }
        return (
          <EmptyStar
            key={`empty-${index}`}
            starSize={STAR_SIZE}
          />
        );
      }),
    [normalizedRating, maxSize],
  );

  return (
    <div
      className="flex items-center"
      data-testid="RatingStars"
    >
      <div className="flex">{renderStars}</div>
      <span className="ml-[5px] text-[length:var(--font-size-1)]">{rating.toFixed(1)}</span>
    </div>
  );
};
