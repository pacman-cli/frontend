"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

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

export default function LandingRecentPosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://backend-a0mblg.fly.dev/api/blogs?size=3&sort=createdAt,desc&publicOnly=true")

        if (res.ok) {
          const data = await res.json() as { content: ApiPost[] }
          const mapped = (data.content || []).map((p) => ({
            id: p.id,
            title: p.title,
            slug: p.slug,
            content: p.content,
            createdAt: p.createdAt,
            tags: p.tags ? p.tags.split(",") : []
          }))
          setPosts(mapped)
        }
      } catch (e) {
        console.error("Failed to fetch recent posts:", e)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Recent posts</h2>
          <Link href="/posts" className="text-primary hover:text-primary/80 transition-colors link-underline">View all</Link>
        </div>
        <div className="mt-6 grid gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-5 animate-pulse">
              <div className="h-4 bg-muted rounded w-24"></div>
              <div className="mt-2 h-6 bg-muted rounded w-3/4"></div>
              <div className="mt-3 h-4 bg-muted rounded w-full"></div>
            </div>
          ))}
        </div>
      </div>
    )
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
            <div className="mt-2 text-muted-foreground line-clamp-2">
              {p.content.substring(0, 150).replace(/[#*_`]/g, '')}...
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
