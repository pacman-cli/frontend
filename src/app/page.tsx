import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
import HeroSection from "./components/HeroSection"
import LandingRecentPosts from "./components/LandingRecentPosts"
import ProjectsSection from "./components/ProjectsSection"
import SkillsSection from "./components/SkillsSection"
import TestimonialsSection from "./components/TestimonialsSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <HeroSection />

      {/* Skills / What I Do */}
      <SkillsSection />

      {/* About */}
      <AboutSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Recent Blog Posts */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Latest <span className="text-primary">Posts</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Thoughts, tutorials, and insights from my development journey.
            </p>
          </div>
          <LandingRecentPosts />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Contact */}
      <ContactSection />
    </main>
  )
}
