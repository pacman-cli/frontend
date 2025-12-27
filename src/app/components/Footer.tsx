import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-background">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Md Ashikur Rahaman Puspo</span>
        <div className="hidden md:flex gap-4">
          <Link className="hover:text-foreground transition-colors" href="/about">About</Link>
          <Link className="hover:text-foreground transition-colors" href="/posts">Posts</Link>
        </div>
      </div>
    </footer>
  )
}
