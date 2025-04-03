import { Space_Mono, Lalezar } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ReactNode } from 'react';

import { Navbar } from '@/components/shared/navbar';
import { Providers } from '@/components/shared/providers';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
});

const lalezar = Lalezar({
  subsets: ['arabic'],
  weight: ['400'],
  variable: '--font-lalezar',
});

type Props = {
  children: ReactNode;
  locale: string;
};

export async function BaseLayout({ children, locale }: Props) {
  const messages = await getMessages();

  return (
    <html
      suppressHydrationWarning
      dir={locale === 'fa' ? 'rtl' : 'ltr'}
      lang={locale}
    >
      <body
        className={cn(
          spaceMono.variable,
          lalezar.variable,
          'flex h-full flex-col',
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
