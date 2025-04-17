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
        className="h-[var(--logo-height)] w-auto md:h-[var(--desk-logo-height)]"
      />
    </Link>
  );
};
