'use client';

import HeroSection from "@/components/HeroSection";
import WorkExperience from "@/components/WorkExperience";
import ImageGallery from "@/components/ImageGallery";
import FloatingButton from "@/components/FloatingButton";

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
