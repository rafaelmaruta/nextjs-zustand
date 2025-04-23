'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

import { Breadcrumb } from '@/app/components/Breadcrumb';
import { Header } from '@/app/components/Header';
import { NavigationMenu } from '@/app/components/NavigationMenu';
import { type NavigationMenuProps } from '@/app/components/NavigationMenu/types';

const centerContent =
  'flex w-full pr-[var(--content-spacing)] pl-[var(--content-spacing)]  md:w-[var(--desk-content-width)]';

export const BaseContainer = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const breadcrumbLinks = [
    {
      label: 'Home',
      href: '/',
      title: 'Home',
    },
  ];

  const [menuVisibility, setMenuVisibility] = useState<NavigationMenuProps['visibility']>('hidden');

  const setMenuVisible = () => {
    setMenuVisibility('visible');
  };

  const setMenuHidden = () => {
    setMenuVisibility('hidden');
  };

  const ref = useRef<HTMLMenuElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setMenuHidden();
      }
    }

    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Header
        onAvatarMouseOver={setMenuVisible}
        onAvatarMouseOut={setMenuHidden}
        onAvatarFocus={setMenuVisible}
        onAvatarBlur={setMenuHidden}
        onAvatarClick={setMenuVisible}
        styleClasses={`${centerContent} h-[var(--header-height)] md:h-[var(--desk-header-height)] items-center justify-between`}
      />
      <main className="flex h-full justify-center">
        <section className={`${centerContent} relative h-full`}>
          <NavigationMenu
            ref={ref}
            visibility={menuVisibility}
            onMouseOver={setMenuVisible}
            onMouseOut={setMenuHidden}
            onFocus={setMenuVisible}
            onBlur={setMenuHidden}
          />
          <Breadcrumb links={breadcrumbLinks} />
          {children}
        </section>
      </main>
    </>
  );
};
