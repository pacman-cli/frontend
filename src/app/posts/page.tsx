import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export const dynamic = "force-dynamic"

type Post = {
  id: number
  title: string
  slug: string
  content: string
  tags: string[]
  createdAt: string
  updatedAt: string
}

type ApiPost = {
  id: number
  title: string
  slug: string
  content: string
  createdAt: string
  updatedAt: string
  tags: string | null
}

function getAllTags(posts: Post[]): string[] {
  const set = new Set<string>()
  for (const p of posts) {
    for (const t of p.tags ?? []) set.add(t)
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b))
}

export default async function PostsPage({ searchParams }: { searchParams: Promise<{ tag?: string }> }) {
  let posts: Post[] = []
  let fetchError = false

  try {
    // Add timeout for SSR fetch
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10s timeout

    const res = await fetch(`https://backend-a0mblg.fly.dev/api/blogs?size=100&publicOnly=true`, {
      signal: controller.signal,
      next: { revalidate: 30 },
    })
    clearTimeout(timeoutId)

    if (res.ok) {
      const data = await res.json() as { content: ApiPost[] }
      posts = (data.content || []).map((p) => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        content: p.content,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
        tags: p.tags ? p.tags.split(",") : []
      }))
    } else {
      fetchError = true
    }
  } catch (error) {
    console.error("Failed to fetch posts:", error)
    fetchError = true
    posts = []
  }

  let tag: string | undefined
  try {
    const params = await searchParams
    tag = params.tag
  } catch {
    tag = undefined
  }

  const allTags = getAllTags(posts)
  const filtered = tag
    ? posts.filter((p) => (p.tags || []).some((t) => t.toLowerCase() === tag!.toLowerCase()))
    : posts

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

      {/* Filter bar */}
      <div className="mt-6 flex flex-wrap gap-2">
        <span className="text-muted-foreground text-sm mr-2 py-1">Filter:</span>
        <Link
          href="/posts"
          className={`text-xs px-3 py-1 rounded-full border transition-colors ${!tag ? "border-primary text-primary bg-primary/10" : "border-border text-muted-foreground hover:border-primary/60"}`}
        >
          All
        </Link>
        {allTags.map((t) => (
          <Link
            key={t}
            href={`/posts?tag=${encodeURIComponent(t)}`}
            className={`text-xs px-3 py-1 rounded-full border transition-colors ${tag && tag.toLowerCase() === t.toLowerCase() ? "border-primary text-primary bg-primary/10" : "border-border text-muted-foreground hover:border-primary/60"}`}
          >
            {t}
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-8 grid-cols-1">
        {(Array.isArray(filtered) ? filtered : []).map((p) => (
          <Link key={p.id} href={`/posts/${p.slug}`} className="group block rounded-xl bg-card hover:bg-accent/50 border border-border p-7 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg font-mono">
            <div className="text-muted-foreground text-sm flex justify-between">
              <span>{new Date(p.createdAt).toDateString()}</span>
            </div>
            <div className="mt-2 text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">{p.title}</div>
            <div className="mt-4 text-muted-foreground leading-relaxed prose prose-sm prose-invert max-w-none line-clamp-3">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {p.content}
              </ReactMarkdown>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags?.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-muted border border-border text-muted-foreground group-hover:border-primary/60 transition-colors">{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
