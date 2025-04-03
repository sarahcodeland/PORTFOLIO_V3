import { useTranslations } from 'next-intl';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Skills() {
  const t = useTranslations('about.skills');

  const skillCategories = [
    'languages',
    'frameworks',
    'tools',
    'databases',
    'other',
  ] as const;

  return (
    <section>
      <h2 className='mb-4 text-2xl font-bold text-primary'>{t('title')}</h2>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
        {skillCategories.map(category => (
          <Card key={category}>
            <CardHeader>
              <CardTitle className='text-xl font-bold'>
                {t(`${category}.title`)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex flex-wrap gap-2'>
                {t
                  .raw(`${category}.items`)
                  .map((skill: string, index: number) => (
                    <span
                      className='rounded-lg text-center text-muted-foreground transition-colors hover:text-primary'
                      key={index}
                    >
                      • {skill}
                    </span>
                  ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
