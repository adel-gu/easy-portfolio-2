import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Providers } from '@/providers/Theme';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--space-grotesk',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-space-grotesk antialiased',
          spaceGrotesk.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
