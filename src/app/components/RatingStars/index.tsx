import Image from 'next/image';

import Star from '@/app/assets/icons/Star.svg';

import { RatingStarsProps } from './types';

export const RatingStars = ({ rating = 0 }: RatingStarsProps) => {
  return (
    <div>
      <Image
        src={Star}
        alt={`${rating}`}
      />
    </div>
  );
};
