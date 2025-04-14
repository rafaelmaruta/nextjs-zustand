import { PriceProps } from './types';

export const Price = ({ fullPriceInCents, salePriceInCents }: PriceProps) => {
  return (
    <>
      <p>{fullPriceInCents}</p>
      <p>{salePriceInCents}</p>
    </>
  );
};
