import { getTranslations } from 'next-intl/server';

import { Background } from '@/app/[locale]/(fade-in-animate)/about/_components/background';
import { Education } from '@/app/[locale]/(fade-in-animate)/about/_components/education';
import { Experiences } from '@/app/[locale]/(fade-in-animate)/about/_components/experiences';
import { Skills } from '@/app/[locale]/(fade-in-animate)/about/_components/skills';
import { DownloadCvBtns } from '@/components/shared/download-cv-btns';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.about' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return (
    <main className='mx-auto min-h-screen max-w-4xl px-4 py-20'>
      <div className='mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row'>
        <h1 className='text-4xl font-bold'>{t('title')}</h1>
        <DownloadCvBtns />
      </div>

      <div className='space-y-12'>
        <Background />

        <Experiences />

        <Skills />

        <Education />
      </div>
    </main>
  );
}
