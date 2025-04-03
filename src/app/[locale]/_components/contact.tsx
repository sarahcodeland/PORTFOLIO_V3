import { useTranslations } from 'next-intl';

import { ConnectWithMe } from '@/components/shared/connect-with-me';
import { ContactForm } from '@/components/shared/contact-form';
import { ContactInformation } from '@/components/shared/contact-information';

export function Contact() {
  const t = useTranslations('home.contact');

  return (
    <section className='px-4 py-20'>
      <div className='mx-auto max-w-4xl'>
        <h2 className='mb-8 text-3xl font-bold'>{t('title')}</h2>
        <div className='grid items-start gap-8 md:grid-cols-2'>
          <div className='space-y-6'>
            <ContactInformation />

            <ConnectWithMe />
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
