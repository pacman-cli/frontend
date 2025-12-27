import LandingHero from "./components/LandingHero"
import LandingRecentPosts from "./components/LandingRecentPosts"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl opacity-50 animate-pulse" />

      <LandingHero />

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <LandingRecentPosts />
      </section>
    </main>
  )
}
