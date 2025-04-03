import { useTranslations } from 'next-intl';

import { SocialLinks } from '@/components/shared/social-links';

export function Hero() {
  const t = useTranslations('home.hero');

  return (
    <section className='flex min-h-[calc(100vh-4rem)] items-center justify-center px-4'>
      <div className='mx-auto max-w-4xl text-center'>
        <h1 className='mb-6 text-4xl font-bold md:text-6xl'>{t('title')}</h1>
        <p className='mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl'>
          {t('description')}
        </p>

        <SocialLinks className='justify-center' />
      </div>
    </section>
  );
}
