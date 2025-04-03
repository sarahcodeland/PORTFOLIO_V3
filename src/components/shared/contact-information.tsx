import { useTranslations } from 'next-intl';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { socialLinks } from '@/constants';

export function ContactInformation() {
  const t = useTranslations('shared.contact.contactInformation');
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>{t('title')}</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div>
          <h3 className='mb-2 text-lg font-bold'>{t('email')}</h3>
          <a
            className='transition-colors hover:text-primary'
            dir='ltr'
            href={`mailto:${socialLinks.email}`}
          >
            {t('emailValue')}
          </a>
        </div>
        <div>
          <h3 className='mb-2 text-lg font-bold'>{t('phone')}</h3>
          <a
            className='transition-colors hover:text-primary'
            dir='ltr'
            href={`tel:${socialLinks.phone}`}
          >
            {t('phoneValue')}
          </a>
        </div>
        <div>
          <h3 className='mb-2 text-lg font-bold'>{t('location')}</h3>
          <p>
            {t('locationValue')}
            <br /> {t('availableForRemoteWork')}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
