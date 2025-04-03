import { useTranslations } from 'next-intl';

import { SocialLinks } from '@/components/shared/social-links';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ConnectWithMe() {
  const t = useTranslations('shared.contact.connectWithMe');

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>{t('title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <SocialLinks />
      </CardContent>
    </Card>
  );
}
