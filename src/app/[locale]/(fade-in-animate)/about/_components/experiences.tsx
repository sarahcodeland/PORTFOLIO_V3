import { useTranslations } from 'next-intl';

import { ExperienceCard } from '@/app/[locale]/(fade-in-animate)/about/_components/experience-card';

export type Experience = {
  title: string;
  companyName: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
};

export function Experiences() {
  const t = useTranslations('about.experience');

  return (
    <section>
      <h2 className='mb-4 text-2xl font-bold text-primary'>{t('title')}</h2>
      <div className='space-y-6'>
        {t.raw('items').map((item: Experience, index: number) => (
          <ExperienceCard
            companyName={item.companyName}
            endDate={item.endDate}
            key={index}
            responsibilities={item.responsibilities}
            startDate={item.startDate}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
}
