import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EmailSection } from "@/components/EmailSection";
import { Footer } from "@/components/Footer";
import { AchievementsSection } from "@/components/AchievementsSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
      <main className={`${geistSans.className} ${geistMono.className} flex min-h-screen flex-col bg-[#121212]`}>
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
          <Footer />
        </div>
      </main>
  );
}
