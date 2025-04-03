import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/i18n/routing';

export function AboutPreview() {
  const t = useTranslations('home.about');

  return (
    <section className='px-4 py-20'>
      <div className='mx-auto max-w-4xl'>
        <div className='mb-8 flex items-center justify-between'>
          <h2 className='text-3xl font-bold'>{t('title')}</h2>
          <Button asChild variant='link'>
            <Link href='/about'>{t('link')}</Link>
          </Button>
        </div>
        <Card>
          <CardContent className='p-6'>
            <p className='leading-relaxed text-muted-foreground'>
              {t('description')}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
