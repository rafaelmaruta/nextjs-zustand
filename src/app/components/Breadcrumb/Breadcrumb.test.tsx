import { Breadcrumb } from '.';
import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn().mockReturnValue('/wishlist'),
}));

describe('Breadcrumb', () => {
  it('should render the breadcrumb component', () => {
    render(<Breadcrumb />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should display Home as the first link', () => {
    render(<Breadcrumb />);

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('should link Home to the root path', () => {
    render(<Breadcrumb />);

    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
  });

  it('should display the current page name based on path', () => {
    render(<Breadcrumb />);

    expect(screen.getByText('wishlist')).toBeInTheDocument();
  });

  it('should show separator between links', () => {
    render(<Breadcrumb />);

    expect(screen.getByText('/')).toBeInTheDocument();
  });

  it('should format the current page name correctly', () => {
    vi.mocked(usePathname).mockReturnValue('/product-details');
    render(<Breadcrumb />);

    expect(screen.getByText('product-details')).toBeInTheDocument();
  });
});
