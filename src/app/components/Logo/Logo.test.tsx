import { Logo } from '.';
import { render, screen } from '@testing-library/react';

vi.mock('next/image', () => ({
  default: (props) => (
    <img
      data-testid="next-image"
      alt={props.alt || ''}
      {...props}
    />
  ),
}));

vi.mock('next/link', () => ({
  default: ({ href, children }) => (
    <a
      href={href}
      data-testid="next-link"
    >
      {children}
    </a>
  ),
}));

vi.mock('@/app/assets/images/Brand.svg', () => ({
  default: '/mocked/brand.svg',
}));

describe('Logo', () => {
  it('should render the logo component', () => {
    render(<Logo />);

    expect(screen.getByTestId('next-link')).toBeInTheDocument();
  });

  it('should link to the home page', () => {
    render(<Logo />);

    expect(screen.getByTestId('next-link')).toHaveAttribute('href', '/');
  });

  it('should render the brand image', () => {
    render(<Logo />);

    expect(screen.getByTestId('next-image')).toBeInTheDocument();
  });

  it('should use the mocked brand SVG', () => {
    render(<Logo />);

    expect(screen.getByTestId('next-image')).toHaveAttribute('src', '/mocked/brand.svg');
  });

  it('should have correct alt text for accessibility', () => {
    render(<Logo />);

    expect(screen.getByTestId('next-image')).toHaveAttribute('alt', 'Brand');
  });

  it('should have the appropriate height class for mobile', () => {
    render(<Logo />);

    expect(screen.getByTestId('next-image')).toHaveClass('h-[var(--logo-height)]');
  });

  it('should have the appropriate height class for desktop', () => {
    render(<Logo />);

    expect(screen.getByTestId('next-image')).toHaveClass('md:h-[var(--desk-logo-height)]');
  });
});
