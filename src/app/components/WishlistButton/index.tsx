import Image from 'next/image';

import HeartBold from '@/app/assets/icons/HeartBold.svg';

import { WishlistButtonProps } from './types';

export const WishlistButton = ({ onClick, isFavorited = false }: WishlistButtonProps) => {
  const heartColor = isFavorited ? 'bg-[#FF0000]' : 'bg-[#8C8C8C]';

  return (
    <button
      className={`flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full ${heartColor}`}
      onClick={onClick}
    >
      <Image
        src={HeartBold}
        alt={`${HeartBold}`}
        className="mt-[2px]"
      />
    </button>
  );
};
