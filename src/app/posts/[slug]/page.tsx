import { apiGet } from "@/lib/api"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

type Post = {
  id: number
  title: string
  slug: string
  content: string
  tags: string | string[]
  createdAt: string
  updatedAt: string
}

export const dynamic = "force-dynamic"

export default async function PostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let post: Post | null = null

  try {
    const rawPost = await apiGet<Post>(`/blogs/${slug}`)
    post = {
      ...rawPost,
      tags: typeof rawPost.tags === 'string' ? rawPost.tags.split(',') : (rawPost.tags || [])
    }
  } catch (e) {
    console.error(e)
  }

  if (!post) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-20 text-center min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-foreground">Post not found</h1>
        <div className="mt-8">
          <Link href="/posts" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            ← Return to Posts
          </Link>
        </div>
      </main>
    )
  }

  const tagList = Array.isArray(post.tags) ? post.tags : []

  return (
    <main className="max-w-3xl mx-auto px-6 py-28 min-h-screen">
      <div className="mb-10">
        <Link
          href="/posts"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
          Back to posts
        </Link>
      </div>
      <h1 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">{post.title}</h1>
      <div className="mt-4 text-muted-foreground text-sm flex items-center gap-2">
        <span>{new Date(post.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </div>

      <section className="mt-10 rounded-xl border border-border bg-card p-6 md:p-10 shadow-sm">
        <article className="prose prose-invert prose-lg max-w-none leading-relaxed
            prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight
            prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary
            hover:prose-a:text-primary/80 prose-li:text-muted-foreground prose-li:marker:text-primary
            prose-code:bg-muted prose-code:text-foreground prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border prose-pre:rounded-lg font-mono">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeHighlight]}>
            {post.content}
          </ReactMarkdown>
        </article>
      </section>

      {tagList.length > 0 ? (
        <div className="mt-10 flex flex-wrap gap-2">
          {tagList.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-muted border border-border text-muted-foreground">{t}</span>
          ))}
        </div>
      ) : null}
    </main>
  )
}
