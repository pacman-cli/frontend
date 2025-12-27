<<<<<<< HEAD
import Link from "next/link";
import Logo from "./Logo";
export default function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#0A1930] border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <Logo size={28} />
        </Link>
        <div className="hidden md:flex gap-6 text-sm text-slate-300">
          <Link className="transition-colors hover:text-[#64FFDA]" href="/posts">Posts</Link>
          <Link className="transition-colors hover:text-[#64FFDA]" href="/about">About me</Link>
        </div>
      </div>
    </nav>
  );
=======
import Link from "next/link"
import Logo from "./Logo"
import { ModeToggle } from "./mode-toggle"

export default function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" aria-label="Home">
          <Logo size={32} />
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <Link className="transition-colors hover:text-primary" href="/posts">Posts</Link>
            <Link className="transition-colors hover:text-primary" href="/about">About me</Link>
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
>>>>>>> 55c0a3a (Added codes)
}


