import Image from 'next/image';
import Link from 'next/link';

import Heart from '@/app/assets/icons/Heart.svg';

export const WishlistHeaderButton = () => {
  return (
    <Link
      href="/wishlist"
      title="Wishlist"
    >
      <Image
        src={Heart}
        alt="Heart"
      />{' '}
      Wishlist
    </Link>
  );
};
