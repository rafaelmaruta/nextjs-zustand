import { WishlistButton } from '.';
import { fireEvent, render, screen } from '@testing-library/react';

vi.mock('@/app/assets/icons/HeartBold.svg', () => ({
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

describe('WishlistButton', () => {
  it('should render the wishlist button', () => {
    render(
      <WishlistButton
        isFavorited={false}
        onClick={() => {}}
      />,
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should display the heart icon', () => {
    render(
      <WishlistButton
        isFavorited={false}
        onClick={() => {}}
      />,
    );

    expect(screen.getByTestId('next-image')).toHaveAttribute('src', '/mocked/heart.svg');
  });

  it('should have the active class when isFavorited prop is true', () => {
    render(
      <WishlistButton
        isFavorited={true}
        onClick={() => {}}
      />,
    );

    expect(screen.getByRole('button')).toHaveClass('bg-[#FF0000]');
  });

  it('should not have the active class when active prop is false', () => {
    render(
      <WishlistButton
        isFavorited={false}
        onClick={() => {}}
      />,
    );

    expect(screen.getByRole('button')).toHaveClass('bg-[#8C8C8C]');
  });

  it('should call onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(
      <WishlistButton
        isFavorited={false}
        onClick={handleClick}
      />,
    );
    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should have correct alt text for accessibility', () => {
    render(
      <WishlistButton
        isFavorited={false}
        onClick={() => {}}
      />,
    );

    expect(screen.getByTestId('next-image')).toHaveAttribute('alt', 'Wishlist');
  });
});
