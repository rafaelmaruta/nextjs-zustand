import Image from 'next/image';

import Heart from '@/app/assets/icons/Heart.svg';

import { WishlistButtonProps } from './types';

export const WishlistButton = ({ onClick, state = null }: WishlistButtonProps) => {
  return (
    <button onClick={onClick}>
      <Image
        src={Heart}
        alt={`${Heart}`}
      />
    </button>
  );
};
