import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { ProjectSection } from "@/widgets/project-section";
import { TechStackSection } from "@/widgets/tech-stack-section";
import { ContactSection } from "@/widgets/contact";
import { Footer } from "@/widgets/footer";

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProjectSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
