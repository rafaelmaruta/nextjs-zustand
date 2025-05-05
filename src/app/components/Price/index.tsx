import { PriceProps } from './types';

export const Price = ({ fullPrice, salePrice }: PriceProps) => {
  return (
    <div>
      <p className="text-[length:var(--font-size-2)] text-[var(--font-color-100)] line-through">
        {fullPrice}
      </p>
      <p className="text-[length:var(--font-size-5)] leading-none font-bold text-[var(--price-font-color)]">
        {salePrice}
      </p>
    </div>
  );
};
