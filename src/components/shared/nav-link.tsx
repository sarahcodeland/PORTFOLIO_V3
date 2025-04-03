'use client';

import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';

type Props = {
  title: string;
  href: string;
};

export function NavLink({ title, href }: Props) {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <Link
      className={cn(
        'transition-colors hover:text-primary',
        isActive ? 'text-primary' : 'text-foreground',
      )}
      href={href}
    >
      {title}
    </Link>
  );
}
