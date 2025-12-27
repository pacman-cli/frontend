<<<<<<< HEAD
import { apiGet } from "@/lib/api";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};

export const dynamic = "force-dynamic";

export default async function LandingRecentPosts() {
  let posts: Post[] = [];
  try {
    const all = await apiGet<Post[]>("/posts");
    posts = (Array.isArray(all) ? all : []).slice(0, 3);
  } catch {
    posts = [];
  }

  if (!posts.length) {
    return null;
=======
import { apiGet } from "@/lib/api"
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
    const res = await apiGet<{ content: ApiPost[] }>("/blogs?size=3&sort=createdAt,desc&publicOnly=true")
    posts = (res.content || []).map((p) => ({
      id: p.id,
      title: p.title,
      slug: p.slug,
      content: p.content,
      createdAt: p.createdAt,
      tags: p.tags ? p.tags.split(",") : []
    }))
  } catch (e) {
    console.error(e)
    posts = []
  }

  if (!posts.length) {
    return null
>>>>>>> 55c0a3a (Added codes)
  }

  return (
    <div>
      <div className="flex items-center justify-between">
<<<<<<< HEAD
        <h2 className="text-2xl font-bold text-slate-100">Recent posts</h2>
        <Link href="/posts" className="text-teal-300 hover:underline">View all</Link>
      </div>
      <div className="mt-6 grid gap-4">
        {posts.map((p) => (
          <Link key={p.id} href={`/posts/${p.id}`} className="block rounded-lg border border-slate-800 bg-[#0A1A34] hover:bg-[#0B2040] p-5 transition-all duration-200 hover:-translate-y-0.5">
            <div className="text-sm text-slate-400">{new Date(p.createdAt).toDateString()}</div>
            <div className="mt-1 text-lg font-semibold text-slate-100">{p.title}</div>
            <div className="mt-2 text-slate-400 line-clamp-2 prose prose-invert prose-sm max-w-none">
=======
        <h2 className="text-2xl font-bold text-foreground">Recent posts</h2>
        <Link href="/posts" className="text-primary hover:underline hover:text-primary/80 transition-colors">View all</Link>
      </div>
      <div className="mt-6 grid gap-4">
        {posts.map((p) => (
          <Link key={p.id} href={`/posts/${p.slug}`} className="block rounded-lg border border-border bg-card hover:bg-accent/50 p-5 transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md">
            <div className="text-sm text-muted-foreground">{new Date(p.createdAt).toDateString()}</div>
            <div className="mt-1 text-lg font-semibold text-card-foreground">{p.title}</div>
            <div className="mt-2 text-muted-foreground line-clamp-2 prose prose-invert prose-sm max-w-none">
>>>>>>> 55c0a3a (Added codes)
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {p.content}
              </ReactMarkdown>
            </div>
          </Link>
        ))}
      </div>
    </div>
<<<<<<< HEAD
  );
}


=======
  )
}
>>>>>>> 55c0a3a (Added codes)
