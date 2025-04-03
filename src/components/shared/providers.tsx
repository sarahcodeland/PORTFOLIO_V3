'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <NextThemesProvider
      disableTransitionOnChange
      enableSystem
      attribute='class'
      defaultTheme='system'
    >
      {children}
    </NextThemesProvider>
  );
}
