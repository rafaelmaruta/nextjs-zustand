import Link from 'next/link';
import { useRef, useEffect } from 'react';

import { menuItems } from '@/app/config/menuItems';

import { NavigationMenuProps } from './types';

export const NavigationMenu = ({
  visibility = 'visible',
  onMouseOver,
  onMouseOut,
  onFocus,
  onBlur,
  onClickOutside,
}: NavigationMenuProps) => {
  const arrow =
    "md:absolute md:before:content-[''] md:before:absolute md:before:right-0 md:before:-translate-x-1/2 md:before:border-l-[12px] md:before:border-r-[12px] md:before:top-[8px] md:before:border-b-[12px] md:before:border-l-transparent md:before:border-r-transparent md:before:border-b-white";

  const ref = useRef<HTMLMenuElement>(null);

  useEffect(() => {
    if (onClickOutside) {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node) && onClickOutside) {
          onClickOutside();
        }
      }

      document.addEventListener('mouseup', handleClickOutside);

      return () => {
        document.removeEventListener('mouseup', handleClickOutside);
      };
    }
  });

  return (
    <menu
      ref={ref}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onFocus={onFocus}
      onBlur={onBlur}
      className={`${visibility} absolute h-full md:top-[-32px] md:right-[var(--content-spacing)] md:mr-[-8px] md:h-auto ${arrow}`}
    >
      <ul className="flex h-full flex-col bg-[var(--background)] pr-[var(--content-spacing)] shadow-[3px_0_4px_var(--menu-shadow)] md:mt-[20px] md:h-auto md:rounded-[8px] md:pt-[5px] md:pr-[10px] md:pb-[5px] md:pl-[10px] md:shadow-[0_4px_4px_var(--desk-menu-shadow)]">
        {menuItems.map(({ href, text }) => (
          <li
            key={href}
            className="border-b-[1px] border-[var(--border-color-100)] md:border-0"
          >
            <Link
              className="block pt-[10px] pb-[10px] text-[length:var(--font-size-3)] text-[var(--gray-200)] md:pt-[5px] md:pb-[5px] md:hover:underline"
              href={href}
              title={text}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </menu>
  );
};
