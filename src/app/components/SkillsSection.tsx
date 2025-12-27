"use client"

import { fadeSlideUp, staggerContainer } from "@/lib/animation-constants"
import { motion } from "framer-motion"

const skills = [
 {
  icon: (
   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
   </svg>
  ),
  title: "Backend Development",
  description: "Building robust REST APIs and microservices with Spring Boot, Java, and Go."
 },
 {
  icon: (
   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
   </svg>
  ),
  title: "Database Design",
  description: "Designing efficient schemas and queries with PostgreSQL, MySQL, and Redis."
 },
 {
  icon: (
   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
   </svg>
  ),
  title: "API Integration",
  description: "Connecting systems with RESTful APIs, GraphQL, and message queues."
 },
 {
  icon: (
   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
   </svg>
  ),
  title: "DevOps & Cloud",
  description: "Deploying with Docker, Kubernetes, and CI/CD pipelines on AWS."
 },
 {
  icon: (
   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
   </svg>
  ),
  title: "Security & Auth",
  description: "Implementing JWT, OAuth2, and secure authentication flows."
 },
 {
  icon: (
   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
   </svg>
  ),
  title: "Monitoring & Logs",
  description: "Setting up observability with metrics, tracing, and structured logs."
 }
]

export default function SkillsSection() {
 return (
  <section className="py-24 bg-card/30">
   <motion.div
    className="max-w-6xl mx-auto px-6"
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
   >
    {/* Section Header */}
    <motion.div className="text-center mb-16" variants={fadeSlideUp}>
     <h2 className="text-3xl md:text-4xl font-bold text-foreground">
      What I <span className="text-primary">Do</span>
     </h2>
     <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
      Specialized in building performant backend systems that scale with your business needs.
     </p>
    </motion.div>

    {/* Skills Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {skills.map((skill, index) => (
      <motion.div
       key={skill.title}
       variants={fadeSlideUp}
       custom={index}
       className="group p-6 rounded-xl border border-border bg-card card-glow"
      >
       <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        {skill.icon}
       </div>
       <h3 className="text-lg font-semibold text-foreground mb-2">{skill.title}</h3>
       <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
      </motion.div>
     ))}
    </div>
   </motion.div>
  </section>
 )
}
