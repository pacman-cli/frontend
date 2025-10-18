import Link from "next/link";
import type { SVGProps } from "react";

function SkillIcon({ name }: { name: string }) {
  const c = "#64FFDA";
  const n = name.toLowerCase();
  const size = 16;
  const common: SVGProps<SVGSVGElement> = { width: size, height: size, viewBox: "0 0 24 24" };

  if (n.includes("java")) {
    // Coffee cup with steam
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M8 14h6a2 2 0 0 0 0-4H8v4Z" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M7 16h7" stroke={c} strokeWidth="1.5" />
        <path d="M11 7c0 1 .8 1 .8 2s-.8 1-.8 2" stroke={c} strokeWidth="1.5" fill="none" />
      </svg>
    );
  }
  if (n.includes("spring")) {
    // Leaf
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M7 13c4-6 8-4 10-2-1 5-6 6-8 4" fill="none" stroke={c} strokeWidth="1.5" />
      </svg>
    );
  }
  if (n.includes("kafka")) {
    // Nodes & links
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
        <circle cx="9" cy="9" r="1.8" fill={c} />
        <circle cx="15" cy="15" r="1.8" fill={c} />
        <circle cx="15" cy="9" r="1.2" fill={c} />
        <path d="M10.5 10.5l3 3M10.2 8.8l3-.6" stroke={c} strokeWidth="1.5" />
      </svg>
    );
  }
  if (n.includes("rabbit")) {
    // AMQP stylized badge
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M7 8h3v4h4V8h3v8H7V8Z" fill="none" stroke={c} strokeWidth="1.5" />
      </svg>
    );
  }
  if (n.includes("mysql")) {
    // Database cylinder
    return (
      <svg {...common} aria-hidden="true">
        <ellipse cx="12" cy="8" rx="6" ry="3" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M6 8v8c0 1.7 12 1.7 12 0V8" fill="none" stroke={c} strokeWidth="1.5" />
      </svg>
    );
  }
  if (n.includes("go")) {
    // Speed/bolt
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M10 6l6 5h-4l2 7-6-6h4z" fill="none" stroke={c} strokeWidth="1.5" />
      </svg>
    );
  }
  if (n.includes("docker")) {
    // Containers on whale
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M7 13h6M8 11h2M11 11h2" stroke={c} strokeWidth="1.5" />
        <path d="M6 14c1 3 9 3 11 0 1 0 2-1 2-2" fill="none" stroke={c} strokeWidth="1.5" />
      </svg>
    );
  }
  if (n.includes("linux")) {
    // Terminal >_
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M7 9l3 3-3 3" stroke={c} strokeWidth="1.5" fill="none" />
        <path d="M12 15h4" stroke={c} strokeWidth="1.5" />
      </svg>
    );
  }
  if (n.includes("http")) {
    // Globe
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20" stroke={c} strokeWidth="1.5" fill="none" />
      </svg>
    );
  }
  if (n.includes("rest")) {
    // Link chain
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M9 12a3 3 0 0 1 3-3h2M15 12a3 3 0 0 1-3 3h-2" stroke={c} strokeWidth="1.5" fill="none" />
        <path d="M13 9l2-2M9 17l2-2" stroke={c} strokeWidth="1.5" />
      </svg>
    );
  }
  if (n.includes("openapi")) {
    // Keyhole circle
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
        <circle cx="12" cy="10" r="2.2" fill="none" stroke={c} strokeWidth="1.5" />
        <path d="M12 12v3" stroke={c} strokeWidth="1.5" />
      </svg>
    );
  }
  // Fallback dot
  return (
    <svg {...common} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke={c} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" fill={c} />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <header className="fade-in">
        <h1 className="text-4xl font-extrabold text-slate-100">About me</h1>
        <p className="mt-3 text-slate-400 max-w-3xl">
          I&apos;m a backend-focused developer who enjoys designing reliable systems, clean APIs, and purposeful UIs. I
          care about clarity, performance, and maintainability.
        </p>
      </header>

      <section className="mt-12 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 rounded-xl border border-slate-800 bg-[#0A1A34]/80 backdrop-blur p-6 fade-in-1">
          <h2 className="text-xl font-semibold text-slate-100">What I do</h2>
          <ul className="mt-4 space-y-3 text-slate-300 list-disc pl-5">
            <li>Design and build REST services in Go with robust validation and observability</li>
            <li>Work with MySQL/Postgres, schema design, and safe migrations</li>
            <li>Messaging with Kafka and RabbitMQ for resilient asynchronous workflows</li>
            <li>Operate with best practices: CI, code reviews, and incremental delivery</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#0A1A34]/80 backdrop-blur p-6 fade-in-2">
          <h2 className="text-xl font-semibold text-slate-100">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              'Java', 'Spring Boot', 'Kafka', 'RabbitMQ', 'MySQL', 'Go', 'Docker', 'Linux', 'HTTP', 'REST', 'OpenAPI',
            ].map((t) => (
              <span key={t} className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:border-teal-500/60 transition-colors">
                <SkillIcon name={t} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-slate-800 bg-[#0A1A34]/80 backdrop-blur p-6 fade-in-3">
        <h2 className="text-xl font-semibold text-slate-100">Experience highlights</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(100,255,218,0.08)] rounded-lg p-2">
            <h3 className="text-slate-200 font-semibold">Scalable ingestion pipeline</h3>
            <p className="mt-1 text-slate-400 text-sm">
              Built Kafka-based ingestion with idempotent processing and dead-letter handling; improved throughput 4×.
            </p>
          </div>
          <div className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(100,255,218,0.08)] rounded-lg p-2">
            <h3 className="text-slate-200 font-semibold">Zero-downtime migrations</h3>
            <p className="mt-1 text-slate-400 text-sm">
              Shipped phased DB changes (backfill, dual-write, cutover) to avoid production incidents.
            </p>
          </div>
          <div className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(100,255,218,0.08)] rounded-lg p-2">
            <h3 className="text-slate-200 font-semibold">Observability uplift</h3>
            <p className="mt-1 text-slate-400 text-sm">
              Added metrics, structured logs, and tracing with clear SLOs; MTTR reduced significantly.
            </p>
          </div>
          <div className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(100,255,218,0.08)] rounded-lg p-2">
            <h3 className="text-slate-200 font-semibold">API quality</h3>
            <p className="mt-1 text-slate-400 text-sm">
              Standardized pagination, errors, and contracts; simplified client integrations.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-slate-800 bg-[#0A1A34]/80 backdrop-blur p-6 fade-in-3">
        <h2 className="text-xl font-semibold text-slate-100">Education</h2>
        <p className="mt-2 text-slate-300">
          Bachelor&apos;s student at United International University.
        </p>
      </section>

      <section className="mt-12">
        <Link href="/posts" className="inline-block px-5 py-3 rounded-md border border-teal-500 text-teal-300 hover:bg-teal-500/10 transition-colors">
          View my posts
        </Link>
      </section>
    </main>
  );
}


