import Image from 'next/image';
import { memo, MouseEvent, useCallback, useMemo } from 'react';

import HeartBold from '@/app/assets/icons/HeartBold.svg';

import { type WishlistButtonProps } from './types';

export const WishlistButton = memo(({ onClick, isFavorited = false }: WishlistButtonProps) => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      onClick?.();
    },
    [onClick],
  );

  const heartColor = useMemo(() => (isFavorited ? 'bg-[#FF0000]' : 'bg-[#8C8C8C]'), [isFavorited]);

  return (
    <button
      className={`flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full ${heartColor}`}
      onClick={handleClick}
    >
      <Image
        src={HeartBold}
        alt="Wishlist"
        className="mt-[2px]"
      />
    </button>
  );
});

WishlistButton.displayName = 'WishlistButton';
