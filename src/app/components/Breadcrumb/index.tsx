import Link from 'next/link';

import { BreadcrumbProps } from './types';

export const Breadcrumb = ({ links }: BreadcrumbProps) => {
  return (
    <section>
      <ul>
        {links.map(({ label, href, title }) => (
          <li key={label}>
            <Link
              href={href}
              title={title}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
