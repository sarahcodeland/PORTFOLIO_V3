'use client';

import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { DownloadCv } from '@/components/shared/download-cv';
import { LanguageSwitcher } from '@/components/shared/language-switcher';
import { NavLink } from '@/components/shared/nav-link';
import { ToggleTheme } from '@/components/shared/toggle-theme';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/constants';
import { Link } from '@/i18n/routing';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('shared.navbar.links');

  return (
    <nav className='fixed left-0 top-0 z-50 w-full backdrop-blur-sm'>
      <div className='mx-auto max-w-4xl px-4'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link className='text-xl font-bold text-primary' href='/'>
            <span className='text-foreground'>&lt;</span>SarahMaheen
            <span className='text-foreground'>&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden items-center gap-8 md:flex'>
            {navLinks.map(link => (
              <NavLink
                href={link.url}
                key={`navbar-link-${link.id}`}
                title={t(link.id)}
              />
            ))}
            <div>
              <ToggleTheme />
              <LanguageSwitcher />
              <DownloadCv />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <ToggleTheme />
            <LanguageSwitcher />
            <DownloadCv />
            <Button
              size='icon'
              variant='ghost'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className='size-4' />
              ) : (
                <Menu className='size-4' />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='absolute top-12 z-50 w-full py-4 backdrop-blur-sm md:hidden'>
            <div className='flex flex-col space-y-4'>
              {navLinks.map(link => (
                <NavLink
                  href={link.url}
                  key={`navbar-link-${link.id}`}
                  title={t(link.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
