"use client"

import { fadeSlideUp, staggerContainer } from "@/lib/animation-constants"
import { motion } from "framer-motion"

const technologies = [
 { name: "Java", color: "text-orange-400" },
 { name: "Spring Boot", color: "text-green-400" },
 { name: "PostgreSQL", color: "text-blue-400" },
 { name: "Docker", color: "text-cyan-400" },
 { name: "Kafka", color: "text-purple-400" },
 { name: "Redis", color: "text-red-400" },
 { name: "TypeScript", color: "text-blue-500" },
 { name: "Next.js", color: "text-foreground" },
]

const approaches = [
 "Write clean, maintainable code with comprehensive documentation",
 "Design APIs with scalability and performance in mind",
 "Implement thorough testing strategies (unit, integration, e2e)",
 "Practice continuous integration and deployment",
 "Collaborate effectively with cross-functional teams"
]

export default function AboutSection() {
 return (
  <section id="about" className="py-24">
   <motion.div
    className="max-w-6xl mx-auto px-6"
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
   >
    <div className="grid lg:grid-cols-2 gap-16 items-center">
     {/* Left: About Text */}
     <motion.div variants={fadeSlideUp}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
       About <span className="text-primary">Me</span>
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
       I&apos;m a backend-focused software engineer with a passion for building reliable,
       scalable systems. Currently pursuing my Bachelor&apos;s at United International University,
       I&apos;ve spent the past year crafting production-grade APIs and services.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-8">
       I believe in writing code that not only works but is also maintainable
       and well-documented. My approach combines solid engineering principles
       with modern development practices.
      </p>

      {/* Approach List */}
      <h3 className="text-lg font-semibold text-foreground mb-4">My Approach</h3>
      <ul className="space-y-3">
       {approaches.map((approach, index) => (
        <motion.li
         key={index}
         className="flex items-start gap-3 text-muted-foreground"
         variants={fadeSlideUp}
         custom={index}
        >
         <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
         </svg>
         <span>{approach}</span>
        </motion.li>
       ))}
      </ul>
     </motion.div>

     {/* Right: Tech Stack */}
     <motion.div variants={fadeSlideUp}>
      <div className="rounded-2xl border border-border bg-card p-8 card-glow">
       <h3 className="text-lg font-semibold text-foreground mb-6">Tech Stack</h3>
       <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
         <motion.span
          key={tech.name}
          whileHover={{ scale: 1.05 }}
          className={`px-4 py-2 rounded-lg border border-border bg-background/50 text-sm font-medium ${tech.color} hover:border-primary/50 transition-colors`}
         >
          {tech.name}
         </motion.span>
        ))}
       </div>

       {/* Stats */}
       <div className="mt-8 pt-8 border-t border-border grid grid-cols-3 gap-4 text-center">
        <div>
         <div className="text-2xl font-bold text-primary">1+</div>
         <div className="text-sm text-muted-foreground">Years Exp</div>
        </div>
        <div>
         <div className="text-2xl font-bold text-primary">10+</div>
         <div className="text-sm text-muted-foreground">Projects</div>
        </div>
        <div>
         <div className="text-2xl font-bold text-primary">5+</div>
         <div className="text-sm text-muted-foreground">Technologies</div>
        </div>
       </div>
      </div>
     </motion.div>
    </div>
   </motion.div>
  </section>
 )
}
