'use client';

import { AvatarButton } from '@/app/components/AvatarButton';
import { Logo } from '@/app/components/Logo';
import { WishlistHeaderButton } from '@/app/components/WishlistHeaderButton';

import { type HeaderProps } from './types';

export const Header = ({
  styleClasses,
  onAvatarMouseOver,
  onAvatarMouseOut,
  onAvatarFocus,
  onAvatarBlur,
  onAvatarClick,
}: HeaderProps) => {
  return (
    <header
      className="flex w-full justify-center bg-[var(--purple-100)]"
      role="header"
    >
      <div className={styleClasses}>
        <div className="order-2 md:order-1">
          <Logo data-testid="Logo" />
        </div>
        <div className="order-3 md:right-[80px] md:order-2 md:mr-[80px] md:ml-auto">
          <WishlistHeaderButton data-testid="WishlistHeaderButton" />
        </div>
        <div className="relative order-1 flex items-center md:order-3">
          <AvatarButton
            data-testid="AvatarButton"
            onMouseOver={onAvatarMouseOver}
            onMouseOut={onAvatarMouseOut}
            onFocus={onAvatarFocus}
            onBlur={onAvatarBlur}
            onClick={onAvatarClick}
          />
        </div>
      </div>
    </header>
  );
};

Header.displayName = 'Header';
