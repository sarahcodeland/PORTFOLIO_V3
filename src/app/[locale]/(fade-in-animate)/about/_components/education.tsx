import { useTranslations } from 'next-intl';

import { EducationCard } from '@/app/[locale]/(fade-in-animate)/about/_components/education-card';

export type Education = {
  degree: string;
  university: string;
  startDate: string;
  endDate: string;
  description: string;
};

export function Education() {
  const t = useTranslations('about.education');

  return (
    <section>
      <h2 className='mb-4 text-2xl font-bold text-primary'>{t('title')}</h2>
      {t.raw('items').map((item: Education, index: number) => (
        <EducationCard
          degree={item.degree}
          description={item.description}
          endDate={item.endDate}
          key={`edu-${index}`}
          startDate={item.startDate}
          university={item.university}
        />
      ))}
    </section>
  );
}
