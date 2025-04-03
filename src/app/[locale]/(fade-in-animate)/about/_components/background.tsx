import { useTranslations } from 'next-intl';

import { SocialLinks } from '@/components/shared/social-links';
import { Card, CardContent } from '@/components/ui/card';

export function Background() {
  const t = useTranslations('about.background');

  return (
    <section>
      <h2 className='mb-4 text-2xl font-bold text-primary'>{t('title')}</h2>
      <Card>
        <CardContent className='space-y-4 p-6'>
          {t.raw('description').map((item: string, index: number) => (
            <p className='leading-relaxed text-muted-foreground' key={index}>
              {item}
            </p>
          ))}

          <SocialLinks />
        </CardContent>
      </Card>
    </section>
  );
}
