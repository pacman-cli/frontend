import Link from "next/link"

// Simplified page without AbortController or Next.js cache options
// For Deno Edge compatibility
type Post = {
  id: number
  title: string
  slug: string
  content: string
  tags: string[]
  createdAt: string
}

type ApiPost = {
  id: number
  title: string
  slug: string
  content: string
  createdAt: string
  tags: string | null
}

async function getPosts(): Promise<Post[]> {
  try {
    // Simple fetch without AbortController or Next.js-specific options
    const res = await fetch("https://backend-a0mblg.fly.dev/api/blogs?size=20&publicOnly=true", {
      cache: "no-store", // Standard fetch cache option
    })

    if (!res.ok) {
      console.error("Backend returned error:", res.status)
      return []
    }

    const data = await res.json() as { content: ApiPost[] }
    return (data.content || []).map((p) => ({
      id: p.id,
      title: p.title,
      slug: p.slug,
      content: p.content,
      createdAt: p.createdAt,
      tags: p.tags ? p.tags.split(",") : []
    }))
  } catch (error) {
    console.error("Failed to fetch posts:", error)
    return []
  }
}

export default async function PostsPage() {
  const posts = await getPosts()

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

      {posts.length === 0 ? (
        <div className="mt-8 p-8 rounded-xl bg-card border border-border text-center">
          <p className="text-muted-foreground">No posts available yet.</p>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 grid-cols-1">
          {posts.map((p) => (
            <Link
              key={p.id}
              href={`/posts/${p.slug}`}
              className="group block rounded-xl bg-card hover:bg-accent/50 border border-border p-7 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="text-muted-foreground text-sm">
                {new Date(p.createdAt).toDateString()}
              </div>
              <div className="mt-2 text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                {p.title}
              </div>
              <div className="mt-4 text-muted-foreground leading-relaxed line-clamp-3">
                {p.content.substring(0, 180).replace(/[#*_`]/g, '')}...
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-muted border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}
