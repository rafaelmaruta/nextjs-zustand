import Link from 'next/link';

import { NavigationMenuProps } from './types';

export const NavigationMenu = ({ visibility = 'visible' }: NavigationMenuProps) => {
  const menuOptions = [
    {
      href: '/login',
      text: 'Entrar',
    },
    {
      href: '/my-account',
      text: 'Minha Conta',
    },
    {
      href: '/address',
      text: 'Endereços',
    },
    {
      href: '/my-netshoes',
      text: 'Minha Netshoes',
    },
  ];

  return (
    <menu
      className={`${visibility} absolute h-full bg-[var(--background)] pr-[var(--content-spacing)] shadow-[3px_0_4px_rgba(0,0,0,0.05)]`}
    >
      <ul className="flex h-full flex-col">
        {menuOptions.map((option) => (
          <li
            key={option.href}
            className="border-b-[1px] border-[var(--border-color-100)]"
          >
            <Link
              className="block pt-[10px] pb-[10px]"
              href={option.href}
              title={option.text}
            >
              {option.text}
            </Link>
          </li>
        ))}
      </ul>
    </menu>
  );
};
