import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useMemo } from 'react';

export const Breadcrumb = () => {
  const pathname = usePathname();

  const formatLabelBasedOnPathname = useCallback((pathname: string) => {
    return pathname.replace(/\s/g, '-').replace('/', '');
  }, []);

  const links = useMemo(() => {
    return pathname === '/'
      ? [
          {
            label: 'Home',
            href: '/',
            className: 'font-bold',
          },
        ]
      : [
          {
            label: 'Home',
            href: '/',
            className: '',
          },
          {
            label: formatLabelBasedOnPathname(pathname),
            href: pathname,
            className: 'font-bold',
          },
        ];
  }, [pathname, formatLabelBasedOnPathname]);

  return (
    <section className="flex h-[var(--breadcrumb-height)] items-center md:h-[var(--desk-breadcrumb-height)] md:border-b-[1px] md:border-[var(--border-color-200)]">
      <ul className="flex">
        {links.map(({ label, href, className }, index) => (
          <li
            key={label}
            className="text-[var(--breadcrumb-font-color)]"
          >
            {index !== 0 && <span>&nbsp;/&nbsp;</span>}
            <Link
              className={`${className} capitalize hover:underline`}
              href={href}
              title={label}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
