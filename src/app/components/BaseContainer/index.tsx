'use client';

import { useCallback, useMemo, useState, type ReactNode } from 'react';

import { Header } from '@/app/components/Header';
import { NavigationMenu } from '@/app/components/NavigationMenu';
import { type NavigationMenuProps } from '@/app/components/NavigationMenu/types';
import { isMobile } from '@/app/utils/isMobile';

const CENTER_CONTENT =
  'flex w-full pr-[var(--content-spacing)] pl-[var(--content-spacing)]  md:w-[var(--desk-content-width)]';

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

  const isMobileMemo = useMemo(isMobile, []);

  return (
    <>
      <Header
        {...(isMobileMemo
          ? {
              onAvatarClick: showMenu,
            }
          : {
              onAvatarMouseOver: showMenu,
              onAvatarMouseOut: hideMenu,
              onAvatarFocus: showMenu,
              onAvatarBlur: hideMenu,
            })}
        styleClasses={`${CENTER_CONTENT} h-[var(--header-height)] md:h-[var(--desk-header-height)] items-center justify-between`}
      />
      <main className="flex justify-center">
        <section className={`${CENTER_CONTENT} relative flex-col`}>
          <NavigationMenu
            visibility={menuVisibility}
            {...(isMobileMemo
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
