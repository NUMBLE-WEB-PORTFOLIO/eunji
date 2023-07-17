import Banner from '@/components/Banner';
import IntroSection from '@/components/IntroSection';
import Progress from '@/components/Progress';

export default function Home() {
  return (
    <main className="relative w-full">
      <Banner />
      <IntroSection title="introduce" />
      <IntroSection title="project" />
      <IntroSection title="contact" />
      <Progress />
    </main>
  );
}
