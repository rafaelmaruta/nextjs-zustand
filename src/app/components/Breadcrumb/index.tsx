import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useMemo } from 'react';

export const Breadcrumb = () => {
  const pathname = usePathname();

  const formatLabelBasedOnPathname = useCallback((pathname: string) => {
    return pathname.replace(/\s/g, '-').replace('/', '/ ');
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
            className: 'font-bold ml-[4px]',
          },
        ];
  }, [pathname, formatLabelBasedOnPathname]);

  return (
    <section className="md:pt-[var(--content-spacing)] md:pb-[var(--content-spacing)]">
      <ul className="flex">
        {links.map(({ label, href, className }) => (
          <li key={label}>
            <Link
              className={`${className} text-[var(--purple-200)] capitalize`}
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
