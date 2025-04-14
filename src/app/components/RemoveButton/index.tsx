import Image from 'next/image';

import Close from '@/app/assets/icons/Close.svg';

import { RemoveButtonProps } from './types';

export const RemoveButton = ({ onClick }: RemoveButtonProps) => {
  return (
    <button onClick={onClick}>
      <Image
        src={Close}
        alt={`${Close}`}
      />
    </button>
  );
};
