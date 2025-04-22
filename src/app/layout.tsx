/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import type { ReactNode } from 'react';

import { NavigationMenu } from '@/app/components/NavigationMenu';

import { Breadcrumb } from './components/Breadcrumb';
import { Header } from './components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wishlist',
  description: 'Wishlist for study purposes',
  viewport: 'content="width=device-width, initial-scale=1.0"',
};

const SourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const centerContent =
  'flex w-full pr-[var(--content-spacing)] pl-[var(--content-spacing)]  md:w-[var(--desk-content-width)]';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const breadcrumbLinks = [
    {
      label: 'Home',
      href: '/',
      title: 'Home',
    },
  ];

  return (
    <html
      lang="en"
      className={SourceSans3.variable}
    >
      <body className="h-screen font-sans">
        <Header
          styleClasses={`${centerContent} h-[var(--header-height)] md:h-[var(--desk-header-height)] items-center justify-between`}
        />
        <main className="flex h-full justify-center">
          <section className={`${centerContent} relative h-full`}>
            <NavigationMenu />
            <Breadcrumb links={breadcrumbLinks} />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
