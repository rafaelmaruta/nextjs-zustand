import Image from 'next/image';

import Star from '@/app/assets/icons/Star.svg';

import { RatingStarsProps } from './types';

export const RatingStars = ({ rating = 0 }: RatingStarsProps) => {
  return (
    <div className="flex items-center">
      <Image
        src={Star}
        alt={`${rating}`}
      />
      <span className="ml-[5px] text-[length:var(--font-size-1)]">5.0</span>
    </div>
  );
};
