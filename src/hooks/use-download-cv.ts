'use client';

import { useTranslations } from 'next-intl';

import { useToast } from '@/hooks/use-toast';

export function useDownloadCV() {
  const t = useTranslations('shared.downloadCv');
  const { toast } = useToast();

  const handleDownload = async (target: string) => {
    try {
      console.log(
        target,
        'kdddddddddddddddddddddddddddddddddddddddddddddddddd',
      );
      const response = await fetch(`/cv/${target}.pdf`, { method: 'HEAD' });
      if (response.ok) {
        const link = document.createElement('a');
        link.href = `/cv/${target}.pdf`;
        link.download = `sarah-maheen-${target}.pdf`;
        link.click();
        toast({
          description: t('success'),
        });
      } else {
        throw new Error(t('error'));
      }
    } catch (err) {
      console.log(err);
      toast({
        description: t('error'),
        variant: 'destructive',
      });
    }
  };

  return { handleDownload };
}
