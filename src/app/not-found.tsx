import { BaseLayout } from '@/components/pages/base-layout';
import NotFoundComponent from '@/components/pages/not-found';
import { routing } from '@/i18n/routing';

export default async function GlobalNotFound() {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <NotFoundComponent />
    </BaseLayout>
  );
}
