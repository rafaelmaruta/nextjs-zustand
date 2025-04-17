'use client';

import { AvatarButton } from '@/app/components/AvatarButton';
import { Logo } from '@/app/components/Logo';
import { NavigationMenu } from '@/app/components/NavigationMenu';
import { WishlistHeaderButton } from '@/app/components/WishlistHeaderButton';

export const Header = () => {
  return (
    <header className="flex w-full justify-center bg-[var(--purple-light)]">
      <div className="flex h-[var(--header-height)] w-full items-center justify-between md:h-[var(--desk-header-height)] md:w-[var(--desk-content-width)]">
        <div className="order-2 md:order-1">
          <Logo />
        </div>
        <div className="order-3 md:right-[80px] md:order-2 md:mr-[80px] md:ml-auto">
          <WishlistHeaderButton />
        </div>
        <div className="relative order-1 flex items-center md:order-3">
          <AvatarButton>
            <NavigationMenu />
          </AvatarButton>
        </div>
      </div>
    </header>
  );
};
