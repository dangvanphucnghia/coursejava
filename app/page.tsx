import type { Metadata } from "next";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { BlogSection } from "@/components/home/BlogSection";
import { EnglishSection } from "@/components/home/EnglishSection";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectSection } from "@/components/home/ProjectSection";
import { RoadmapSection } from "@/components/home/RoadmapSection";

export const metadata: Metadata = {
  title: "CourseJava - Học lập trình Full-stack từ số 0",
  description:
    "Học lập trình Full-stack từ số 0, kèm tiếng Anh nền tảng cho developer. Miễn phí cho người mới bắt đầu.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedCourses />
      <RoadmapSection />
      <EnglishSection />
      <ProjectSection />
      <BenefitsSection />
      <BlogSection />
    </main>
  );
}
