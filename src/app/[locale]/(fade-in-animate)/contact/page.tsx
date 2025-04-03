import { getTranslations } from 'next-intl/server';

import { ConnectWithMe } from '@/components/shared/connect-with-me';
import { ContactForm } from '@/components/shared/contact-form';
import { ContactInformation } from '@/components/shared/contact-information';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.contact' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <main className='min-h-screen px-4 py-20'>
      <div className='mx-auto max-w-4xl'>
        <h1 className='mb-8 text-4xl font-bold'>{t('title')}</h1>

        <div className='grid gap-12 md:grid-cols-2'>
          <div className='space-y-8'>
            <ContactInformation />

            <ConnectWithMe />
          </div>

          <ContactForm />
        </div>
      </div>
    </main>
  );
}
