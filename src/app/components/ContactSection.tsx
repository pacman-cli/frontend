"use client"

import { fadeSlideUp, staggerContainer } from "@/lib/animation-constants"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ContactSection() {
 return (
  <section id="contact" className="py-24 bg-card/30">
   <motion.div
    className="max-w-4xl mx-auto px-6 text-center"
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
   >
    {/* Header */}
    <motion.div variants={fadeSlideUp}>
     <h2 className="text-3xl md:text-4xl font-bold text-foreground">
      Let&apos;s Work <span className="text-primary">Together</span>
     </h2>
     <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
      Have a project in mind or looking for a backend developer?
      I&apos;d love to hear from you.
     </p>
    </motion.div>

    {/* Contact Card */}
    <motion.div
     variants={fadeSlideUp}
     className="mt-12 p-8 rounded-2xl border border-border bg-card card-glow"
    >
     <div className="flex flex-col md:flex-row justify-center items-center gap-6">
      {/* Email */}
      <Link
       href="mailto:puspo@example.com"
       className="flex items-center gap-3 px-6 py-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors group"
      >
       <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
       </div>
       <div className="text-left">
        <div className="text-sm text-muted-foreground">Email me</div>
        <div className="text-foreground font-medium">puspo@example.com</div>
       </div>
      </Link>

      {/* LinkedIn */}
      <Link
       href="https://linkedin.com/in/iampuspo"
       target="_blank"
       className="flex items-center gap-3 px-6 py-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors group"
      >
       <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
       </div>
       <div className="text-left">
        <div className="text-sm text-muted-foreground">Connect on</div>
        <div className="text-foreground font-medium">LinkedIn</div>
       </div>
      </Link>
     </div>
    </motion.div>

    {/* Availability Badge */}
    <motion.div variants={fadeSlideUp} className="mt-8">
     <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm">
      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      Currently available for new opportunities
     </span>
    </motion.div>
   </motion.div>
  </section>
 )
}
