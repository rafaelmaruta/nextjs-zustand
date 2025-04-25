import Image from 'next/image';
import Link from 'next/link';

import Heart from '@/app/assets/icons/Heart.svg';

export const WishlistHeaderButton = () => {
  return (
    <Link
      href="/wishlist"
      title="Wishlist"
      className="flex flex-row items-center md:gap-[10px]"
    >
      <Image
        src={Heart}
        alt="Heart"
      />{' '}
      <span className="hidden text-(length:--font-size-4) font-bold text-[var(--white)] hover:underline md:inline">
        Wishlist
      </span>
    </Link>
  );
};
