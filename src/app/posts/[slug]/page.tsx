"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

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
  tags: string | null
  createdAt: string
  updatedAt: string
}

export default function PostDetail() {
  const params = useParams()
  const slug = params.slug as string

  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!slug) return

    async function fetchPost() {
      try {
        const res = await fetch(`https://backend-a0mblg.fly.dev/api/blogs/${slug}`)

        if (!res.ok) {
          setError(true)
          setLoading(false)
          return
        }

        const rawPost = await res.json() as ApiPost
        setPost({
          ...rawPost,
          tags: rawPost.tags ? rawPost.tags.split(',') : []
        })
      } catch (e) {
        console.error("Failed to fetch post:", e)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  if (loading) {
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
        <div className="animate-pulse">
          <div className="h-12 bg-muted rounded w-3/4"></div>
          <div className="mt-4 h-4 bg-muted rounded w-32"></div>
          <div className="mt-10 h-64 bg-muted rounded-xl"></div>
        </div>
      </main>
    )
  }

  if (error || !post) {
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

      {post.tags.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-muted border border-border text-muted-foreground">{t}</span>
          ))}
        </div>
      )}
    </main>
  )
}
