import Image from 'next/image';

import Heart from '@/app/assets/icons/Heart.svg';

import { WishlistButtonProps } from './types';

export const WishlistButton = ({ onClick, state = null }: WishlistButtonProps) => {
  return (
    <Image
      onClick={onClick}
      src={Heart}
      alt={`${Heart}`}
    />
  );
};
