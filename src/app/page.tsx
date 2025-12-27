<<<<<<< HEAD
import LandingRecentPosts from "./components/LandingRecentPosts";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-16">
        <p className="text-teal-300">👋 Hi, my name is</p>
        <h1 className="mt-2 text-5xl md:text-6xl font-extrabold text-slate-100">Puspo.</h1>
        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-400">Turning caffeine boosts to code breakthrough</h2>
        <p className="mt-6 max-w-2xl text-slate-400">
          Hey there! I&apos;m Puspo, a passionate developer dedicated to crafting elegant solutions with 1 years of
          experience. Explore my work and let&apos;s build something amazing together! I am a software engineer with a passion for building scalable and efficient systems. I am a software engineer with a passion for building scalable and efficient systems.
        </p>
        <div className="mt-10"></div>
      </section>
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <LandingRecentPosts />
      </section>
    </main>
  );
=======
import LandingHero from "./components/LandingHero"
import LandingRecentPosts from "./components/LandingRecentPosts"

// This is now a Server Component
export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Decor can remain here as pure HTML/CSS or move to Client Component if it needs interaction.
          For now, static divs are fine in SC, but if they depend on browser APIs they might need to be client.
          The 'animate-pulse' is CSS, so it works in SC.
      */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl opacity-50 animate-pulse" />

      <LandingHero />

      <section className="max-w-5xl mx-auto px-6 pb-24">
        {/* LandingRecentPosts is an async Server Component, which is valid here */}
        <LandingRecentPosts />
      </section>
    </main>
  )
>>>>>>> 55c0a3a (Added codes)
}
