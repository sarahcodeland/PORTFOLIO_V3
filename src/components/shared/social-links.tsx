import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { socialLinks } from '@/constants';
import { cn } from '@/lib/utils';

type Props = {
  showEmail?: boolean;
  showGithub?: boolean;
  showLinkedin?: boolean;
  className?: string;
};

export function SocialLinks({
  showEmail = true,
  showGithub = true,
  showLinkedin = true,
  className,
}: Props) {
  const t = useTranslations('shared.socialLinks');

  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {showGithub && (
        <Button asChild variant='outline'>
          <a
            href={socialLinks.github}
            rel='noopener noreferrer'
            target='_blank'
          >
            <Github /> {t('github')}
          </a>
        </Button>
      )}
      {showLinkedin && (
        <Button asChild variant='outline'>
          <a
            href={socialLinks.linkedin}
            rel='noopener noreferrer'
            target='_blank'
          >
            <Linkedin /> {t('linkedin')}
          </a>
        </Button>
      )}
      {showEmail && (
        <Button asChild variant='outline'>
          <a href={`mailto:${socialLinks.email}`}>
            <Mail />
            {t('email')}
          </a>
        </Button>
      )}
    </div>
  );
}
