import Image from 'next/image';

import Star from '@/app/assets/icons/Star.svg';

import { type FullStarProps } from './types';

export const FullStar = ({ starSize }: FullStarProps) => (
  <div className={starSize}>
    <Image
      src={Star}
      alt="full star"
    />
  </div>
);
