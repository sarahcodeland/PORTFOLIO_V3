import { ProjectLinks } from '@/app/[locale]/(fade-in-animate)/projects/_components/project-links';
import { Project } from '@/app/[locale]/(fade-in-animate)/projects/page';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Props = Pick<
  Project,
  | 'title'
  | 'description'
  | 'tech'
  | 'slug'
  | 'links'
  | 'client'
  | 'privateSource'
  | 'privateDemo'
>;

export function ProjectCard({
  title,
  description,
  tech,
  slug,
  links,
  client,
  privateSource,
  privateDemo,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-start justify-between gap-2'>
          <h3 className='text-2xl font-bold'>{title}</h3>
          <Badge>{client}</Badge>
        </CardTitle>
        <CardDescription className='text-muted-foreground'>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className='p-6'>
        <div className='mb-6 flex flex-wrap gap-2'>
          {tech.map((tech, index) => (
            <Badge key={index} variant='outline'>
              {tech}
            </Badge>
          ))}
        </div>

        <ProjectLinks
          links={links}
          showGithub={!privateSource}
          showLiveDemo={!privateDemo}
          slug={slug}
        />
      </CardContent>
    </Card>
  );
}
