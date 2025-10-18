import { apiGet } from "@/lib/api";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

type Post = {
  id: number;
  title: string;
  content: string;
  tags: string[];
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
};

export const dynamic = "force-dynamic";

export default async function PostDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await apiGet<Post>(`/posts/${id}`);

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/posts" className="text-teal-300 hover:underline">← Back to posts</Link>
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">{post.title}</h1>
      <div className="mt-3 text-slate-400 text-sm">{new Date(post.createdAt).toLocaleString()}</div>

      <section className="mt-10 rounded-xl border border-slate-800 bg-[#0A1A34] p-7 md:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.15)]">
        <article className="prose prose-invert prose-lg max-w-none leading-relaxed prose-headings:mt-10 prose-headings:mb-3 prose-h2:text-slate-100 prose-p:text-slate-300 prose-strong:text-slate-100 prose-a:text-teal-300 hover:prose-a:text-teal-200 prose-li:my-2 prose-code:bg-slate-900/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-[#0B2040] prose-pre:border prose-pre:border-slate-800 prose-pre:rounded-lg font-ibm">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeHighlight]}>
            {post.content}
          </ReactMarkdown>
        </article>
      </section>

      {post.tags?.length ? (
        <div className="mt-10 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300">{t}</span>
          ))}
        </div>
      ) : null}
    </main>
  );
}


