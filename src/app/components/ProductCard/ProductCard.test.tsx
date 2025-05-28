import { ProductCard } from '.';
import { render, screen, within } from '@testing-library/react';

type NextLinkProp = {
  href: string;
  children: React.ReactNode;
};

vi.mock('next/image', () => ({
  default: (props: React.ComponentProps<'img'>) => (
    <img
      data-testid="next-image"
      alt={props.alt || ''}
      {...props}
    />
  ),
}));

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

describe('ProductCard', () => {
  const defaultProps = {
    sku: '123',
    imageSrc: '/sample-image.jpg',
    title: 'Test Product',
    rating: 4,
    fullPrice: 'R$ 100,00',
    salePrice: 'R$ 80,00',
    stockAvailable: true,
  };

  it('should render the product card', () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByTestId('ProductCard')).toBeInTheDocument();
  });

  it('should display the product image', () => {
    render(<ProductCard {...defaultProps} />);
    const figureElement = screen.getByRole('figure');

    expect(within(figureElement).getByTestId('next-image')).toHaveAttribute(
      'src',
      '/sample-image.jpg',
    );
  });

  it.skip('should link to the product details page', () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByTestId('next-link')).toHaveAttribute('href', '/product/123');
  });

  it('should display the product title', () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('should display the correct rating', () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByTestId('RatingStars')).toBeInTheDocument();
  });

  it('should display the full price', () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByText('R$ 100,00')).toBeInTheDocument();
  });

  it('should display the sale price', () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByText('R$ 80,00')).toBeInTheDocument();
  });

  it('should render children components when provided', () => {
    render(
      <ProductCard {...defaultProps}>
        <div data-testid="child-component">Child Component</div>
      </ProductCard>,
    );

    expect(screen.getByTestId('child-component')).toBeInTheDocument();
  });

  it('should display "Sem estoque" when stock is not available', () => {
    render(
      <ProductCard
        {...defaultProps}
        stockAvailable={false}
      />,
    );

    expect(screen.getByText('Sem estoque')).toBeInTheDocument();
  });
});
