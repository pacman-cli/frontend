import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-[#0A1930]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between text-sm text-slate-400">
        <span>© {new Date().getFullYear()} Md Ashikur Rahaman Puspo</span>
        <div className="hidden md:flex gap-4">
          <Link className="hover:text-slate-200" href="/about">About</Link>
          <Link className="hover:text-slate-200" href="/posts">Posts</Link>
        </div>
      </div>
    </footer>
  );
}


