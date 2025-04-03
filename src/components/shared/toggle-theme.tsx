'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';

export function ToggleTheme() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const { setTheme, resolvedTheme: theme } = useTheme();

  if (!mounted) return null;

  if (theme === 'dark')
    return (
      <Button
        className='rounded-full'
        size='icon'
        variant='ghost'
        onClick={() => setTheme('light')}
      >
        <Moon className='h-4 w-4' />
      </Button>
    );

  if (theme === 'light')
    return (
      <Button
        className='rounded-full'
        size='icon'
        variant='ghost'
        onClick={() => setTheme('dark')}
      >
        <Sun className='h-4 w-4' />
      </Button>
    );

  return null;
}
