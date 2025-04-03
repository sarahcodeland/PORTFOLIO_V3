import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { ProjectLinks } from '@/app/[locale]/(fade-in-animate)/projects/_components/project-links';
import { Project as ProjectType } from '@/app/[locale]/(fade-in-animate)/projects/page';
import { Badge } from '@/components/ui/badge';
import { Link } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// export function generateStaticParams() {
//   return projects.map(project => ({
//     id: project.id,
//   }));
// }

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'projects' });

  const project = t
    .raw('items')
    .find((project: ProjectType) => project.slug === slug);

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'projects' });

  const project: ProjectType = t
    .raw('items')
    .find((project: ProjectType) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className='min-h-screen px-4 py-20'>
      <div className='mx-auto max-w-4xl'>
        <div className='mb-8 flex items-center justify-between gap-2'>
          <Link
            className='inline-block text-primary underline-offset-4 hover:underline'
            href='/projects'
          >
            {t('backToProjects')}
          </Link>

          <Badge>{project.client}</Badge>
        </div>

        {project.image !== null && (
          <div className='relative mb-8 h-96 w-full md:h-[34rem]'>
            <Image
              fill
              alt={project.title}
              className='rounded-lg object-cover object-center shadow-lg'
              src={project.image}
            />
          </div>
        )}

        <h1 className='mb-6 text-4xl font-bold'>{project.title}</h1>
        <p className='mb-8 text-xl text-muted-foreground'>
          {project.longDescription}
        </p>

        <div className='mb-12'>
          <h2 className='mb-4 text-2xl font-bold'>{t('techTitle')}</h2>
          <div className='flex flex-wrap gap-2'>
            {project.tech.map((tech: string, index: number) => (
              <Badge
                className='px-4 py-2 text-base'
                key={index}
                variant='secondary'
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className='mb-12'>
          <h2 className='mb-4 text-2xl font-bold'>{t('featuresTitle')}</h2>
          <ul className='list-inside list-disc space-y-2 text-muted-foreground'>
            {project.features.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <ProjectLinks
          links={project.links}
          showGithub={!project.privateSource}
          showLiveDemo={!project.privateDemo}
          showViewDetails={false}
          slug={project.slug}
        />
      </div>
    </main>
  );
}
