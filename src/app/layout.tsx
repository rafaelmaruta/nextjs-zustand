/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import type { ReactNode } from 'react';

import './globals.css';

export const metadata: Metadata = {
  title: 'Wishlist',
  description: 'Wishlist for study purposes',
};

const SourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={SourceSans3.variable}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
