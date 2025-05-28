import { RemoveButton } from '.';
import { fireEvent, render, screen } from '@testing-library/react';

describe('RemoveButton', () => {
  it('should render the remove button', () => {
    render(<RemoveButton onClick={() => {}} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<RemoveButton onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
