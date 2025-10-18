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
}
