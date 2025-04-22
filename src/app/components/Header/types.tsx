import type { FocusEventHandler, MouseEventHandler } from 'react';

export type HeaderProps = {
  styleClasses?: string;
  onAvatarMouseOver?: MouseEventHandler<HTMLButtonElement>;
  onAvatarMouseOut?: MouseEventHandler<HTMLButtonElement>;
  onAvatarFocus?: FocusEventHandler<HTMLButtonElement>;
  onAvatarBlur?: FocusEventHandler<HTMLButtonElement>;
  onAvatarClick?: MouseEventHandler<HTMLButtonElement>;
};
