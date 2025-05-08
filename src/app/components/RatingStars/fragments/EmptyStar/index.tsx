import Image from 'next/image';

import Star from '@/app/assets/icons/Star.svg';

import { type EmptyStarProps } from './types';

export const EmptyStar = ({ starSize }: EmptyStarProps) => (
  <div className={starSize}>
    <Image
      src={Star}
      alt="empty star"
      className="opacity-25"
    />
  </div>
);
