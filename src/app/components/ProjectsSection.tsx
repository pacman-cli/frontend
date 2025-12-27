"use client"

import { fadeSlideUp, staggerContainer } from "@/lib/animation-constants"
import { motion } from "framer-motion"
import Link from "next/link"

const projects = [
 {
  title: "Portfolio Blog Platform",
  description: "Full-stack blog with Spring Boot backend, JWT auth, and Next.js frontend.",
  tags: ["Spring Boot", "Next.js", "PostgreSQL"],
  github: "https://github.com/pacman-cli",
  live: "#"
 },
 {
  title: "Real-time Chat API",
  description: "WebSocket-based messaging service with Redis pub/sub for scaling.",
  tags: ["Java", "WebSocket", "Redis"],
  github: "https://github.com/pacman-cli",
  live: "#"
 },
 {
  title: "E-commerce Backend",
  description: "Microservices architecture with Kafka events and order processing.",
  tags: ["Microservices", "Kafka", "Docker"],
  github: "https://github.com/pacman-cli",
  live: "#"
 },
 {
  title: "Task Management API",
  description: "RESTful API with role-based access control and comprehensive testing.",
  tags: ["REST API", "JWT", "JUnit"],
  github: "https://github.com/pacman-cli",
  live: "#"
 },
 {
  title: "Inventory System",
  description: "Stock management with real-time updates and analytics dashboard.",
  tags: ["Spring Boot", "MySQL", "Charts"],
  github: "https://github.com/pacman-cli",
  live: "#"
 },
 {
  title: "Auth Service",
  description: "OAuth2 and JWT authentication microservice with refresh tokens.",
  tags: ["OAuth2", "Security", "Redis"],
  github: "https://github.com/pacman-cli",
  live: "#"
 }
]

export default function ProjectsSection() {
 return (
  <section id="projects" className="py-24 bg-card/30">
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
      Featured <span className="text-primary">Projects</span>
     </h2>
     <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
      A selection of projects that showcase my backend development skills.
     </p>
    </motion.div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {projects.map((project, index) => (
      <motion.div
       key={project.title}
       variants={fadeSlideUp}
       custom={index}
       className="group rounded-xl border border-border bg-card overflow-hidden card-glow"
      >
       {/* Project Image Placeholder */}
       <div className="h-40 bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
        <svg className="w-16 h-16 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
       </div>

       {/* Content */}
       <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
         {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
         {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
         {project.tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
           {tag}
          </span>
         ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-border">
         <Link
          href={project.github}
          target="_blank"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
         >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
           <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          Code
         </Link>
         <Link
          href={project.live}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
         >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          Live
         </Link>
        </div>
       </div>
      </motion.div>
     ))}
    </div>

    {/* View All Link */}
    <motion.div className="text-center mt-12" variants={fadeSlideUp}>
     <Link
      href="/posts"
      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium link-underline"
     >
      View all projects
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
       <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      </svg>
     </Link>
    </motion.div>
   </motion.div>
  </section>
 )
}
