"use client"

import { fadeSlideUp, staggerContainer } from "@/lib/animation-constants"
import { motion } from "framer-motion"

const testimonials = [
 {
  quote: "Puspo delivered an exceptional backend system that exceeded our expectations. Clean code, well-documented APIs, and always on time.",
  name: "Tech Lead",
  role: "Software Company",
  avatar: "T"
 },
 {
  quote: "Working with Puspo was a great experience. He understands complex requirements and translates them into elegant solutions.",
  name: "Project Manager",
  role: "Startup",
  avatar: "P"
 },
 {
  quote: "Highly skilled in Spring Boot and database design. Puspo's attention to detail and code quality is impressive.",
  name: "Senior Developer",
  role: "Tech Mentor",
  avatar: "S"
 },
 {
  quote: "A reliable developer who communicates well and delivers quality work. Would definitely work with him again.",
  name: "Client",
  role: "Freelance Project",
  avatar: "C"
 }
]

export default function TestimonialsSection() {
 return (
  <section id="testimonials" className="py-24">
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
      What People <span className="text-primary">Say</span>
     </h2>
     <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
      Feedback from collaborators and clients I&apos;ve worked with.
     </p>
    </motion.div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     {testimonials.map((testimonial, index) => (
      <motion.div
       key={testimonial.name}
       variants={fadeSlideUp}
       custom={index}
       className="p-6 rounded-xl border border-border bg-card card-glow"
      >
       {/* Quote Icon */}
       <svg className="w-10 h-10 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
       </svg>

       {/* Quote Text */}
       <p className="text-muted-foreground leading-relaxed mb-6">
        &ldquo;{testimonial.quote}&rdquo;
       </p>

       {/* Author */}
       <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
         {testimonial.avatar}
        </div>
        <div>
         <div className="font-medium text-foreground">{testimonial.name}</div>
         <div className="text-sm text-muted-foreground">{testimonial.role}</div>
        </div>
       </div>
      </motion.div>
     ))}
    </div>
   </motion.div>
  </section>
 )
}
