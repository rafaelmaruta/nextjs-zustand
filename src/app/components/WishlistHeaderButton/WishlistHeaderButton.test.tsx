import { WishlistHeaderButton } from '.';
import { render, screen } from '@testing-library/react';
import React from 'react';

type NextLinkProp = {
  href: string;
  children: React.ReactNode;
};

vi.mock('next/link', () => ({
  default: ({ href, children }: NextLinkProp) => (
    <a
      href={href}
      data-testid="next-link"
    >
      {children}
    </a>
  ),
}));

vi.mock('@/app/assets/icons/Heart.svg', () => ({
  default: '/mocked/heart.svg',
}));

vi.mock('next/image', () => ({
  default: (props: React.ComponentProps<'img'>) => (
    <img
      data-testid="next-image"
      alt={props.alt || ''}
      {...props}
    />
  ),
}));

describe('WishlistHeaderButton', () => {
  beforeEach(() => {
    render(<WishlistHeaderButton />);
  });

  it('should render the wishlist header button', () => {
    expect(screen.getByTestId('next-link')).toBeInTheDocument();
  });

  it('should link to the wishlist page', () => {
    expect(screen.getByTestId('next-link')).toHaveAttribute('href', '/wishlist');
  });

  it('should display the heart icon', () => {
    expect(screen.getByTestId('next-image')).toHaveAttribute('src', '/mocked/heart.svg');
  });
});
