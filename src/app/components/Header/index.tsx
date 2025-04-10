'use client';

import { AvatarButton } from '@/app/components/AvatarButton';
import { Logo } from '@/app/components/Logo';
import { Submenu } from '@/app/components/Submenu';
import { WishlistHeaderButton } from '@/app/components/WishlistHeaderButton';

export const Header = () => {
  const onAvatarButtonHover = () => {};
  const onAvatarButtonOut = () => {};

  return (
    <header>
      <Logo />
      <section>
        <WishlistHeaderButton />
        <AvatarButton
          onMouseOver={onAvatarButtonHover}
          onMouseOut={onAvatarButtonOut}
          onFocus={onAvatarButtonHover}
          onBlur={onAvatarButtonOut}
        />
        <Submenu />
      </section>
    </header>
  );
};
