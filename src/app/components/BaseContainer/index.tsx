'use client';

import { useCallback, useState, type ReactNode } from 'react';

import { Header } from '@/app/components/Header';
import { NavigationMenu } from '@/app/components/NavigationMenu';
import { type NavigationMenuProps } from '@/app/components/NavigationMenu/types';
import { isMobile } from '@/app/utils/isMobile';

export const BaseContainer = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const [menuVisibility, setMenuVisibility] = useState<NavigationMenuProps['visibility']>('hidden');

  const showMenu = useCallback(() => {
    setMenuVisibility('visible');
  }, []);

  const hideMenu = useCallback(() => {
    setMenuVisibility('hidden');
  }, []);

  const centerContent =
    'flex w-full pr-[var(--content-spacing)] pl-[var(--content-spacing)]  md:w-[var(--desk-content-width)]';

  return (
    <>
      <Header
        {...(isMobile()
          ? {
              onAvatarClick: showMenu,
            }
          : {
              onAvatarMouseOver: showMenu,
              onAvatarMouseOut: hideMenu,
              onAvatarFocus: showMenu,
              onAvatarBlur: hideMenu,
            })}
        styleClasses={`${centerContent} h-[var(--header-height)] md:h-[var(--desk-header-height)] items-center justify-between`}
      />
      <main className="flex justify-center">
        <section className={`${centerContent} relative flex-col`}>
          <NavigationMenu
            visibility={menuVisibility}
            {...(isMobile()
              ? {
                  onClickOutside: hideMenu,
                  onClick: showMenu,
                }
              : {
                  onMouseOver: showMenu,
                  onMouseOut: hideMenu,
                  onFocus: showMenu,
                  onBlur: hideMenu,
                })}
          />
          {children}
        </section>
      </main>
    </>
  );
};
