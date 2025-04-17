'use client';

import { AvatarButton } from '@/app/components/AvatarButton';
import { Logo } from '@/app/components/Logo';
import { Submenu } from '@/app/components/Submenu';
import { WishlistHeaderButton } from '@/app/components/WishlistHeaderButton';

export const Header = () => {
  return (
    <header className="flex w-full justify-center bg-[var(--purple-light)]">
      <div className="flex h-[var(--header-height)] w-full items-center justify-between md:h-[var(--desk-header-height)] md:w-[var(--desk-content-width)]">
        <Logo />
        <section className="flex flex-row items-center gap-[40px]">
          <WishlistHeaderButton />
          <AvatarButton>
            <Submenu />
          </AvatarButton>
        </section>
      </div>
    </header>
  );
};
