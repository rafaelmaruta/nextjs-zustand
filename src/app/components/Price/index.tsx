import { PriceProps } from './types';

export const Price = ({ fullPrice, salePrice }: PriceProps) => {
  return (
    <div>
      <p>{fullPrice}</p>
      <p>{salePrice}</p>
    </div>
  );
};
