import { FocusEventHandler, type MouseEventHandler } from 'react';

export interface AvatarButtonProps {
  onMouseOver?: MouseEventHandler<HTMLButtonElement>;
  onMouseOut?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
