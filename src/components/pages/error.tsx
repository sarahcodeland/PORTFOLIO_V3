'use client';

import { Home, RotateCcw } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/i18n/routing';

export default function ErrorComponent({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('error');
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className='motion-preset-fade min-h-screen px-4 py-40 motion-duration-1500'>
      <div className='mx-auto flex max-w-4xl flex-col items-center justify-center'>
        <Card className='w-full max-w-lg'>
          <CardContent className='p-6 text-center'>
            <h1 className='mb-4 text-6xl font-bold text-destructive'>
              {t('code')}
            </h1>
            <h2 className='mb-4 text-2xl font-bold'>{t('title')}</h2>
            <p className='mb-8 text-muted-foreground'>{t('description')}</p>
            <div className='flex flex-wrap justify-center gap-4'>
              <Button onClick={() => reset()}>
                <RotateCcw />
                {t('tryAgain')}
              </Button>
              <Button asChild variant='outline'>
                <Link href='/'>
                  <Home />
                  {t('returnHome')}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
