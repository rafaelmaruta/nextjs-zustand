import { Header } from '.';
import { fireEvent, render, screen } from '@testing-library/react';

describe.skip('Header', () => {
  it('should render the header element', () => {
    render(<Header />);

    expect(screen.getByRole('header')).toBeInTheDocument();
  });

  it('should render the Logo component', () => {
    render(<Header />);

    expect(screen.getByTestId('Logo')).toBeInTheDocument();
  });

  it('should render the WishlistHeaderButton component', () => {
    render(<Header />);

    expect(screen.getByTestId('WishlistHeaderButton')).toBeInTheDocument();
  });

  it('should render the AvatarButton component', () => {
    render(<Header />);

    expect(screen.getByTestId('AvatarButton')).toBeInTheDocument();
  });

  it('should apply default style classes', () => {
    render(<Header />);

    expect(screen.getByRole('banner')).toHaveClass('fixed');
    expect(screen.getByRole('banner')).toHaveClass('w-full');
  });

  it('should apply custom style classes when provided', () => {
    const customClass = 'test-class';
    render(<Header styleClasses={customClass} />);

    expect(screen.getByRole('banner')).toHaveClass(customClass);
  });

  it('should call onAvatarClick when avatar is clicked', () => {
    const mockOnClick = vi.fn();
    render(<Header onAvatarClick={mockOnClick} />);

    fireEvent.click(screen.getByRole('button'));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should call onAvatarMouseOver when avatar is hovered', () => {
    const mockOnMouseOver = vi.fn();
    render(<Header onAvatarMouseOver={mockOnMouseOver} />);

    fireEvent.mouseOver(screen.getByRole('button'));

    expect(mockOnMouseOver).toHaveBeenCalledTimes(1);
  });

  it('should call onAvatarMouseOut when mouse leaves avatar', () => {
    const mockOnMouseOut = vi.fn();
    render(<Header onAvatarMouseOut={mockOnMouseOut} />);

    fireEvent.mouseOut(screen.getByRole('button'));

    expect(mockOnMouseOut).toHaveBeenCalledTimes(1);
  });
});
