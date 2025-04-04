'use client';

import { Languages } from 'lucide-react';
import Image from 'next/image';
// import { useParams } from 'next/navigation';
import { useTransition } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname, useRouter, routing } from '@/i18n/routing';

export function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  // const params = useParams();

  const onChange = (locale: string) => {
    startTransition(() => {
      router.replace({ pathname }, { locale: locale });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='rounded-full' size='icon' variant='ghost'>
          <Languages className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {routing.locales.map(locale => (
          <DropdownMenuItem
            className='disabled:opacity-50'
            disabled={isPending}
            key={locale}
            onClick={() => onChange(locale)}
          >
            <Image
              alt={locale}
              height={20}
              src={`/images/flags/${locale}-flag.gif`}
              width={20}
            />
            {locale.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
