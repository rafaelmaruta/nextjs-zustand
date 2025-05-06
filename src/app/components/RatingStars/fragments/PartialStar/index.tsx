import Image from 'next/image';

import Star from '@/app/assets/icons/Star.svg';

import { type PartialStarProps } from './types';

export const PartialStar = ({ percentage, starSize, starScale }: PartialStarProps) => (
  <div className={`relative ${starSize}`}>
    <div className="absolute inset-0">
      <Image
        src={Star}
        alt="half star"
        className="opacity-25"
      />
    </div>
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ width: `${percentage * 100}%` }}
    >
      <div className={starScale}>
        <Image
          src={Star}
          alt="half star"
        />
      </div>
    </div>
  </div>
);
