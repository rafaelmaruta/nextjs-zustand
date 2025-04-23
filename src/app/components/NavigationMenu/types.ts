import type { FocusEventHandler, MouseEventHandler } from 'react';

export type NavigationMenuProps = {
  visibility?: 'hidden' | 'visible';
  onMouseOver?: MouseEventHandler<HTMLButtonElement>;
  onMouseOut?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onClickOutside?: () => void;
};
