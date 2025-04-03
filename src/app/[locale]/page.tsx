import { AboutPreview } from '@/app/[locale]/_components/about-preview';
import { Contact } from '@/app/[locale]/_components/contact';
import { Hero } from '@/app/[locale]/_components/hero';
import { ProjectsPreview } from '@/app/[locale]/_components/projects-preview';

export default function Home() {
  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutPreview />

      {/* Projects Section */}
      <ProjectsPreview />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
