import type { FocusEventHandler, MouseEventHandler, RefObject } from 'react';

export type NavigationMenuProps = {
  visibility?: 'hidden' | 'visible';
  ref?: RefObject<HTMLMenuElement | null>;
  onMouseOver?: MouseEventHandler<HTMLButtonElement>;
  onMouseOut?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
};
