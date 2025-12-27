import Link from "next/link"
import type { SVGProps } from "react"


function SkillIcon({ name }: { name: string }) {
  const c = "currentColor"
  const n = name.toLowerCase()
  const size = 16
  const common: SVGProps<SVGSVGElement> = { width: size, height: size, viewBox: "0 0 24 24", className: "text-primary" }

  if (n.includes("java")) {
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M8 14h6a2 2 0 0 0 0-4H8v4Z" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M7 16h7" stroke={c} strokeWidth="1.5" />
        <path d="M11 7c0 1 .8 1 .8 2s-.8 1-.8 2" stroke={c} strokeWidth="1.5" fill="none" />
      </svg>
    )
  }
  if (n.includes("spring")) {
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M7 13c4-6 8-4 10-2-1 5-6 6-8 4" fill="none" stroke={c} strokeWidth="1.5" />
      </svg>
    )
  }
  if (n.includes("kafka")) {
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
        <circle cx="9" cy="9" r="1.8" fill={c} />
        <circle cx="15" cy="15" r="1.8" fill={c} />
        <circle cx="15" cy="9" r="1.2" fill={c} />
        <path d="M10.5 10.5l3 3M10.2 8.8l3-.6" stroke={c} strokeWidth="1.5" />
      </svg>
    )
  }
  if (n.includes("rabbit")) {
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M7 8h3v4h4V8h3v8H7V8Z" fill="none" stroke={c} strokeWidth="1.5" />
      </svg>
    )
  }
  if (n.includes("mysql")) {
    return (
      <svg {...common} aria-hidden="true">
        <ellipse cx="12" cy="8" rx="6" ry="3" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M6 8v8c0 1.7 12 1.7 12 0V8" fill="none" stroke={c} strokeWidth="1.5" />
      </svg>
    )
  }
  if (n.includes("go")) {
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M10 6l6 5h-4l2 7-6-6h4z" fill="none" stroke={c} strokeWidth="1.5" />
      </svg>
    )
  }
  if (n.includes("docker")) {
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M7 13h6M8 11h2M11 11h2" stroke={c} strokeWidth="1.5" />
        <path d="M6 14c1 3 9 3 11 0 1 0 2-1 2-2" fill="none" stroke={c} strokeWidth="1.5" />
      </svg>
    )
  }
  if (n.includes("linux")) {
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M7 9l3 3-3 3" stroke={c} strokeWidth="1.5" fill="none" />
        <path d="M12 15h4" stroke={c} strokeWidth="1.5" />
      </svg>
    )
  }
  if (n.includes("http")) {
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20" stroke={c} strokeWidth="1.5" fill="none" />
      </svg>
    )
  }
  if (n.includes("rest")) {
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M9 12a3 3 0 0 1 3-3h2M15 12a3 3 0 0 1-3 3h-2" stroke={c} strokeWidth="1.5" fill="none" />
        <path d="M13 9l2-2M9 17l2-2" stroke={c} strokeWidth="1.5" />
      </svg>
    )
  }
  if (n.includes("openapi")) {
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
        <circle cx="12" cy="10" r="2.2" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M12 12v3" stroke={c} strokeWidth="1.5" />
      </svg>
    )
  }

  return (
    <svg {...common} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" fill={c} />
    </svg>
  )
}

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 min-h-screen">
      <header className="fade-in">
        <h1 className="text-4xl font-extrabold text-foreground tracking-tight">About me</h1>
        <p className="mt-4 text-muted-foreground text-lg max-w-3xl leading-relaxed">
          I&apos;m a backend-focused developer who enjoys designing reliable systems, clean APIs, and purposeful UIs. I
          care about clarity, performance, and maintainability.
        </p>
      </header>

      <section className="mt-12 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 rounded-xl border border-border bg-card p-6 card-glow fade-in-1">
          <h2 className="text-xl font-semibold text-card-foreground">What I do</h2>
          <ul className="mt-4 space-y-3 text-muted-foreground list-disc pl-5">
            <li>Design and build REST services in Go with robust validation and observability</li>
            <li>Work with MySQL/Postgres, schema design, and safe migrations</li>
            <li>Messaging with Kafka and RabbitMQ for resilient asynchronous workflows</li>
            <li>Operate with best practices: CI, code reviews, and incremental delivery</li>
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 card-glow fade-in-2">
          <h2 className="text-xl font-semibold text-card-foreground">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              'Java', 'Spring Boot', 'Kafka', 'RabbitMQ', 'MySQL', 'Go', 'Docker', 'Linux', 'HTTP', 'REST', 'OpenAPI',
            ].map((t) => (
              <span key={t} className="inline-flex items-center gap-2 text-xs px-2.5 py-1 rounded-full bg-muted border border-border text-muted-foreground hover:border-primary/60 transition-colors">
                <SkillIcon name={t} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 card-glow fade-in-3">
        <h2 className="text-xl font-semibold text-card-foreground">Experience highlights</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md rounded-lg p-3">
            <h3 className="text-foreground font-semibold">Scalable ingestion pipeline</h3>
            <p className="mt-1 text-muted-foreground text-sm leading-relaxed">
              Built Kafka-based ingestion with idempotent processing and dead-letter handling; improved throughput 4×.
            </p>
          </div>
          <div className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md rounded-lg p-3">
            <h3 className="text-foreground font-semibold">Zero-downtime migrations</h3>
            <p className="mt-1 text-muted-foreground text-sm leading-relaxed">
              Shipped phased DB changes (backfill, dual-write, cutover) to avoid production incidents.
            </p>
          </div>
          <div className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md rounded-lg p-3">
            <h3 className="text-foreground font-semibold">Observability uplift</h3>
            <p className="mt-1 text-muted-foreground text-sm leading-relaxed">
              Added metrics, structured logs, and tracing with clear SLOs; MTTR reduced significantly.
            </p>
          </div>
          <div className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md rounded-lg p-3">
            <h3 className="text-foreground font-semibold">API quality</h3>
            <p className="mt-1 text-muted-foreground text-sm leading-relaxed">
              Standardized pagination, errors, and contracts; simplified client integrations.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 card-glow fade-in-3">
        <h2 className="text-xl font-semibold text-card-foreground">Education</h2>
        <p className="mt-2 text-muted-foreground">
          Bachelor&apos;s student at United International University.
        </p>
      </section>

      <section className="mt-12">
        <Link href="/posts" className="inline-block px-5 py-3 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors font-medium btn-shine">
          View my posts
        </Link>
      </section>
    </main>
  )
}
