import Image from 'next/image';
import Link from 'next/link';

import Brand from '@/app/assets/images/Brand.svg';

export const Logo = () => {
  return (
    <Link
      href="/"
      title="Home"
    >
      <Image
        src={Brand}
        alt="Brand"
      />
    </Link>
  );
};
