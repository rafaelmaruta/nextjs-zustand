import Image from 'next/image';

import Close from '@/app/assets/icons/Close.svg';

import { RemoveButtonProps } from './types';

export const RemoveButton = ({ onClick }: RemoveButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-[var(--gray-90)]"
    >
      <Image
        src={Close}
        alt={`${Close}`}
      />
    </button>
  );
};
