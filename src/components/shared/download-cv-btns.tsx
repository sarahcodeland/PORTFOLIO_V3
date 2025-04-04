'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { useDownloadCV } from '@/hooks/use-download-cv';

export function DownloadCvBtns() {
  const t = useTranslations('shared.downloadCv');

  const { handleDownload } = useDownloadCV();

  return (
    <div className='flex items-center gap-2'>
      <p className='text-muted-foreground'>{t('download')}:</p>
      <Button variant='outline' onClick={() => handleDownload('en')}>
        <Image
          alt='English'
          height={20}
          src='/images/flags/us-flag.gif'
          width={20}
        />
      </Button>
    </div>
  );
}
