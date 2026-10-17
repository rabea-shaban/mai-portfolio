import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationTimeline from "@/components/EducationTimeline";
import ExperienceSection from "@/components/ExperienceSection";
import FreelanceAndContact from "@/components/FreelanceAndContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedCaseStudy />
        <ProjectsSection />
        <SkillsSection />
        <EducationTimeline />
        <ExperienceSection />
        <FreelanceAndContact />
      </main>
      <Footer />
    </div>
  );
}
