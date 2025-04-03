'use client';

import { Download } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useDownloadCV } from '@/hooks/use-download-cv';

export function DownloadCv() {
  const t = useTranslations('shared.downloadCv');

  const { handleDownload } = useDownloadCV();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='rounded-full' size='icon' variant='ghost'>
          <Download className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => handleDownload('en')}>
          <Image
            alt='English'
            height={20}
            src='/images/flags/us-flag.gif'
            width={20}
          />
          {t('download')} {t('english')}
        </DropdownMenuItem>
        {/* <DropdownMenuItem onClick={() => handleDownload('fa')}>
          <Image
            alt='Persian'
            height={20}
            src='/images/flags/ir-flag.gif'
            width={20}
          />
          {t('download')} {t('persian')}
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
