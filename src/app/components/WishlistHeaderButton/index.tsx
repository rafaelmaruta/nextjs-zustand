import Image from 'next/image';
import Link from 'next/link';

import Heart from '@/app/assets/icons/Heart.svg';

export const WishlistHeaderButton = () => {
  return (
    <Link
      href="/wishlist"
      title="Wishlist"
      className="flex flex-row md:gap-[10px]"
    >
      <Image
        src={Heart}
        alt="Heart"
      />{' '}
      <span className="hidden md:inline">Wishlist</span>
    </Link>
  );
};
