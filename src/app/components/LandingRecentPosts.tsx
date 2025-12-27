import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

type Post = {
  id: number
  title: string
  slug: string
  content: string
  createdAt: string
  tags: string[]
}

type ApiPost = {
  id: number
  title: string
  slug: string
  content: string
  createdAt: string
  tags: string | null
}

export const dynamic = "force-dynamic"

export default async function LandingRecentPosts() {
  let posts: Post[] = []
  try {
    // Direct fetch with timeout for Deno SSR compatibility
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000)

    const res = await fetch("https://backend-a0mblg.fly.dev/api/blogs?size=3&sort=createdAt,desc&publicOnly=true", {
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
        tags: p.tags ? p.tags.split(",") : []
      }))
    }
  } catch (e) {
    console.error("Failed to fetch recent posts:", e)
    posts = []
  }

  if (!posts.length) {
    return null
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Recent posts</h2>
        <Link href="/posts" className="text-primary hover:text-primary/80 transition-colors link-underline">View all</Link>
      </div>
      <div className="mt-6 grid gap-4">
        {posts.map((p) => (
          <Link key={p.id} href={`/posts/${p.slug}`} className="block rounded-lg border border-border bg-card p-5 card-glow">
            <div className="text-sm text-muted-foreground">{new Date(p.createdAt).toDateString()}</div>
            <div className="mt-1 text-lg font-semibold text-card-foreground">{p.title}</div>
            <div className="mt-2 text-muted-foreground line-clamp-2 prose prose-invert prose-sm max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {p.content}
              </ReactMarkdown>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
