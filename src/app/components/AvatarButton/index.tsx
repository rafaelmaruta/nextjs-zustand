'use client';

import Image from 'next/image';

import Avatar from '@/app/assets/icons/Avatar.svg';

import { AvatarButtonProps } from './types';

export const AvatarButton = ({
  onMouseOver,
  onMouseOut,
  onFocus,
  onBlur,
  onClick,
}: AvatarButtonProps) => {
  return (
    <button
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
    >
      <Image
        src={Avatar}
        alt="Avatar"
      />
    </button>
  );
};
