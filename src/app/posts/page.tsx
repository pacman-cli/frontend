import { apiGet } from "@/lib/api";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const dynamic = "force-dynamic";

type Post = {
  id: number;
  title: string;
  content: string;
  tags: string[];
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
};

function getAllTags(posts: Post[]): string[] {
  const set = new Set<string>();
  for (const p of posts) {
    for (const t of p.tags ?? []) set.add(t);
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export default async function PostsPage({ searchParams }: { searchParams: Promise<{ tag?: string }> }) {
  let posts: Post[] = [];
  try {
    posts = await apiGet<Post[]>("/posts");
  } catch {
    posts = [];
  }

  const { tag } = await searchParams;
  const allTags = getAllTags(posts);
  const filtered = tag
    ? posts.filter((p) => (p.tags || []).some((t) => t.toLowerCase() === tag.toLowerCase()))
    : posts;

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-100">Recent Posts</h1>
        <Link href="/" className="text-teal-300 hover:underline">← Back home</Link>
      </div>

      {/* Filter bar */}
      <div className="mt-6 flex flex-wrap gap-2">
        <span className="text-slate-400 text-sm mr-2">Filter:</span>
        <Link
          href="/posts"
          className={`text-xs px-3 py-1 rounded-full border ${!tag ? "border-teal-500 text-teal-300 bg-teal-500/10" : "border-slate-700 text-slate-300 hover:border-teal-500/60"}`}
        >
          All
        </Link>
        {allTags.map((t) => (
          <Link
            key={t}
            href={`/posts?tag=${encodeURIComponent(t)}`}
            className={`text-xs px-3 py-1 rounded-full border transition-colors ${tag && tag.toLowerCase() === t.toLowerCase() ? "border-teal-500 text-teal-300 bg-teal-500/10" : "border-slate-700 text-slate-300 hover:border-teal-500/60"}`}
          >
            {t}
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-8 grid-cols-1">
        {(Array.isArray(filtered) ? filtered : []).map((p) => (
          <Link key={p.id} href={`/posts/${p.id}`} className="group block rounded-xl bg-[#0A1A34] hover:bg-[#0B2040] border border-slate-800 p-7 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(100,255,218,0.08)] font-dank">
            <div className="text-slate-300 text-sm">{new Date(p.createdAt).toDateString()}</div>
            <div className="mt-2 text-xl font-semibold text-slate-100">{p.title}</div>
            <div className="mt-4 text-slate-400 leading-relaxed prose prose-sm prose-invert max-w-none line-clamp-3">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {p.content}
              </ReactMarkdown>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags?.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 group-hover:border-teal-500/60 transition-colors">{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}


