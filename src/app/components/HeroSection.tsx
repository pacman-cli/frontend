"use client"

import { useTypewriter } from "@/hooks/useTypewriter"
import { fadeSlideUp, HERO_ROLES, staggerContainer } from "@/lib/animation-constants"
import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import AnimatedShapes from "./AnimatedShapes"

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const { text } = useTypewriter({ words: [...HERO_ROLES] })

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Abstract Background Grid */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]"
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[80px]"
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Sketchy 3D Animated Shapes */}
        <AnimatedShapes />
      </div>

      {/* Hero Content */}
      <motion.div
        className="max-w-5xl mx-auto px-6 py-20 text-center relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Tag */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
          variants={fadeSlideUp}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for new opportunities</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
          variants={fadeSlideUp}
        >
          <span className="text-foreground">Building </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_100%] animate-gradient-x">
            Scalable
          </span>
          <br />
          <span className="text-foreground">Backend Systems</span>
        </motion.h1>

        {/* Tagline with typing effect */}
        <motion.p
          className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          variants={fadeSlideUp}
        >
          I&apos;m Puspo, a{" "}
          <span className="text-primary font-medium">{text}</span>
          <span className="inline-block w-[2px] h-5 bg-primary ml-1 animate-pulse" />
          {" "}crafting robust APIs and elegant solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4"
          variants={fadeSlideUp}
        >
          <Link href="#projects">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow btn-shine"
            >
              View Projects
            </motion.button>
          </Link>
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-lg border-2 border-border bg-background/50 backdrop-blur-sm text-foreground font-medium text-lg hover:border-primary/50 transition-colors"
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
