import { BookOpen, Monitor, Github } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';

type Props = {
  slug: string;
  links: {
    github: string;
    live: string;
  };
  showViewDetails?: boolean;
  showGithub?: boolean;
  showLiveDemo?: boolean;
  className?: string;
};

export function ProjectLinks({
  slug,
  links,
  showViewDetails = true,
  showGithub = true,
  showLiveDemo = true,
  className,
}: Props) {
  const t = useTranslations('projects');

  return (
    <div className={cn('flex flex-wrap gap-4', className)}>
      {showViewDetails && (
        <Button asChild>
          <Link href={`/projects/${slug}`}>
            <BookOpen /> {t('viewDetails')}
          </Link>
        </Button>
      )}

      {showGithub && (
        <Button asChild variant='outline'>
          <a href={links.github} rel='noopener noreferrer' target='_blank'>
            <Github />
            {t('github')}
          </a>
        </Button>
      )}

      {showLiveDemo && (
        <Button asChild variant='outline'>
          <a href={links.live} rel='noopener noreferrer' target='_blank'>
            <Monitor />
            {t('liveDemo')}
          </a>
        </Button>
      )}
    </div>
  );
}
