import type { FocusEventHandler, MouseEventHandler } from 'react';

export type AvatarButtonProps = {
  onMouseOver?: MouseEventHandler<HTMLButtonElement>;
  onMouseOut?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
