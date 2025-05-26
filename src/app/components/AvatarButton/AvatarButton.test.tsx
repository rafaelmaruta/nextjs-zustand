import { AvatarButton } from '.';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

vi.mock('next/image', () => ({
  default: (props: React.ComponentProps<'img'>) => (
    <img
      alt={props.alt || ''}
      {...props}
    />
  ),
}));

vi.mock('@/app/assets/icons/Avatar.svg', () => ({
  default: '/mocked/avatar.svg',
}));

describe('AvatarButton', () => {
  it('should render the avatar button correctly', () => {
    render(<AvatarButton />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render the avatar image with correct alt text', () => {
    render(<AvatarButton />);

    expect(screen.getByAltText('Avatar')).toBeInTheDocument();
  });

  it('should have the correct cursor style', () => {
    render(<AvatarButton />);

    expect(screen.getByRole('button')).toHaveClass('cursor-pointer');
  });

  it('should call onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<AvatarButton onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should call onMouseOver handler when mouse over', () => {
    const handleMouseOver = vi.fn();
    render(<AvatarButton onMouseOver={handleMouseOver} />);
    fireEvent.mouseOver(screen.getByRole('button'));

    expect(handleMouseOver).toHaveBeenCalledTimes(1);
  });

  it('should call onMouseOut handler when mouse out', () => {
    const handleMouseOut = vi.fn();
    render(<AvatarButton onMouseOut={handleMouseOut} />);
    fireEvent.mouseOut(screen.getByRole('button'));

    expect(handleMouseOut).toHaveBeenCalledTimes(1);
  });

  it('should call onFocus handler when focused', () => {
    const handleFocus = vi.fn();
    render(<AvatarButton onFocus={handleFocus} />);
    fireEvent.focus(screen.getByRole('button'));

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('should call onBlur handler when blurred', () => {
    const handleBlur = vi.fn();
    render(<AvatarButton onBlur={handleBlur} />);
    fireEvent.blur(screen.getByRole('button'));

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });
});
