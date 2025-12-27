import Link from "next/link"

// Ultra-minimal static page to debug Deno deployment
// No data fetching, no dynamic content
export default function PostsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-28 min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">Recent Posts</h1>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
          Back home
        </Link>
      </div>

      <div className="mt-8 p-8 rounded-xl bg-card border border-border text-center">
        <p className="text-muted-foreground">
          This is a static test page. If you can see this, the routing works!
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Debug timestamp: {new Date().toISOString()}
        </p>
      </div>
    </main>
  )
}
