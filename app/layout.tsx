import { MapProvider } from '@/context/Map';
import { ThemeProvider } from '@/context/Theme';
import { cn } from '@/utils/cn';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'UK Police Map',
  description: 'View crime information within the UK area'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <MapProvider>{children}</MapProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
