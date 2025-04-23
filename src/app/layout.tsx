/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import { type ReactNode } from 'react';

import { BaseContainer } from './components/BaseContainer';
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
      <body className="h-screen font-sans">
        <BaseContainer>{children}</BaseContainer>
      </body>
    </html>
  );
}
