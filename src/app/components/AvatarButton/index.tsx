'use client';

import Image from 'next/image';

import Avatar from '@/app/assets/icons/Avatar.svg';

import { AvatarButtonProps } from './types';

export const AvatarButton = ({ children }: AvatarButtonProps) => {
  return (
    <>
      <button>
        <Image
          src={Avatar}
          alt="Avatar"
        />
      </button>
      <div className="hidden">{children}</div>
    </>
  );
};
