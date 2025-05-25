'use client';

import HeroSection from "@/components/Portfolio/HeroSection";
import WorkExperience from "@/components/Portfolio/WorkExperience";
import ImageGallery from "@/components/Portfolio/ImageGallery";
import FloatingButton from "@/components/Portfolio/FloatingButton";

export default function Home() {
  return (
      <main className="h-full bg-black transition-colors duration-300">
          <HeroSection/>
          <ImageGallery />
          <WorkExperience />
          <FloatingButton />
      </main>
  );
}
