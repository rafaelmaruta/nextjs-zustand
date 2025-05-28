import { NavigationMenu } from '.';
import { fireEvent, render, screen } from '@testing-library/react';

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

describe('NavigationMenu', () => {
  it('should render the navigation menu', () => {
    render(<NavigationMenu />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should render menu items from constants', () => {
    render(<NavigationMenu />);

    expect(screen.getAllByTestId('next-link').length).toBeGreaterThan(0);
  });

  it('should have default hidden visibility', () => {
    render(<NavigationMenu />);

    expect(screen.getByRole('navigation')).toHaveClass('hidden');
  });

  it('should have visible class when visibility is set to visible', () => {
    render(<NavigationMenu visibility="visible" />);

    expect(screen.getByRole('navigation')).toHaveClass('visible');
  });

  it('should have hidden class when visibility is set to hidden', () => {
    render(<NavigationMenu visibility="hidden" />);

    expect(screen.getByRole('navigation')).toHaveClass('hidden');
  });

  it('should call onMouseOver handler when mouse over', () => {
    const handleMouseOver = vi.fn();
    render(<NavigationMenu onMouseOver={handleMouseOver} />);
    fireEvent.mouseOver(screen.getByRole('navigation'));

    expect(handleMouseOver).toHaveBeenCalledTimes(1);
  });

  it('should call onMouseOut handler when mouse out', () => {
    const handleMouseOut = vi.fn();
    render(<NavigationMenu onMouseOut={handleMouseOut} />);
    fireEvent.mouseOut(screen.getByRole('navigation'));

    expect(handleMouseOut).toHaveBeenCalledTimes(1);
  });

  it.skip('should call onClickOutside handler when clicking outside', () => {
    const handleClickOutside = vi.fn();
    render(<NavigationMenu onClickOutside={handleClickOutside} />);

    fireEvent.click(document);

    expect(handleClickOutside).toHaveBeenCalledTimes(1);
  });
});
