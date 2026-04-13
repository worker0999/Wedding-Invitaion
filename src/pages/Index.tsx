import { useState } from "react";
import Navbar from "@/components/wedding/Navbar";
import HeroSection from "@/components/wedding/HeroSection";
import StorySection from "@/components/wedding/StorySection";
import EventsSection from "@/components/wedding/EventsSection";
import GallerySection from "@/components/wedding/GallerySection";
import RsvpSection from "@/components/wedding/RsvpSection";
import FooterSection from "@/components/wedding/FooterSection";
import MusicPlayer from "@/components/wedding/MusicPlayer";
import EnvelopeIntro from "@/components/wedding/EnvelopeIntro";

const Index = () => {
  const [showSite, setShowSite] = useState(false);

  return (
    <>
      {!showSite && <EnvelopeIntro onComplete={() => setShowSite(true)} />}
      {showSite && (
        <main className="overflow-x-hidden">
          <Navbar />
          <HeroSection />
          <StorySection />
          <EventsSection />
          <GallerySection />
          <RsvpSection />
          <FooterSection />
          <MusicPlayer />
        </main>
      )}
    </>
  );
};

export default Index;
