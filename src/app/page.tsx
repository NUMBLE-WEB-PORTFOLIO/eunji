'use client';

import ScrollImage from '@/components/ScrollImage';
import IntroSection from '@/components/IntroSection';
import Progress from '@/components/Progress';
import ParallaxText from '@/components/ParallaxText';
import Card from '@/components/Card';

export default function Home() {
  return (
    <main className="relative w-full">
      <ScrollImage />
      <div className="relative pt-10 mb-4">
        <ParallaxText baseVelocity={-5} />
        <ParallaxText baseVelocity={5} />
      </div>
      <IntroSection title="about">
        <div className="flex gap-5 mt-20">
          <Card>프론트엔드 개발자 최은지입니다.</Card>
        </div>
      </IntroSection>
      <IntroSection title="project" />
      <Progress />
    </main>
  );
}
