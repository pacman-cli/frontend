"use client"

/**
 * LandingHero Component
 *
 * Premium hero section with:
 * - Cinematic staggered entrance animation
 * - Typing animation synced to entrance
 * - Gradient animated text
 * - Ambient background effects
 * - Full accessibility support
 */

import { TypewriterPhase, useTypewriter } from "@/hooks/useTypewriter"
import {
 fadeSlideUp,
 HERO_ROLES,
 staggerContainer
} from "@/lib/animation-constants"
import { motion, useReducedMotion } from "framer-motion"
import HeroButtons from "./HeroButtons"

export default function LandingHero() {
 const prefersReducedMotion = useReducedMotion()

 const { text, phase } = useTypewriter({
  words: [...HERO_ROLES],
 })

 // Determine if cursor should blink
 const shouldBlink = phase === TypewriterPhase.Pausing || phase === TypewriterPhase.Waiting

 return (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
   {/* ============================================
          AMBIENT BACKGROUND EFFECTS
          Subtle gradient mesh for depth
      ============================================ */}
   <div className="absolute inset-0 -z-10">
    {/* Primary gradient orb */}
    <motion.div
     className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] rounded-full
                     bg-gradient-to-br from-primary/15 to-blue-600/10 blur-[120px]"
     animate={prefersReducedMotion ? {} : {
      scale: [1, 1.1, 1],
      opacity: [0.5, 0.7, 0.5],
     }}
     transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
     }}
    />

    {/* Secondary gradient orb */}
    <motion.div
     className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full
                     bg-gradient-to-tr from-purple-500/10 to-primary/5 blur-[100px]"
     animate={prefersReducedMotion ? {} : {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
     }}
     transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2,
     }}
    />

    {/* Subtle noise texture overlay */}
    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02]" />
   </div>

   {/* ============================================
          HERO CONTENT
          Staggered entrance animation
      ============================================ */}
   <motion.div
    className="max-w-5xl mx-auto px-6 py-20 relative z-10"
    variants={staggerContainer}
    initial="hidden"
    animate="visible"
   >
    {/* Greeting */}
    <motion.p
     className="text-primary font-medium tracking-wide text-lg mb-4"
     variants={fadeSlideUp}
    >
     👋 Hi, my name is
    </motion.p>

    {/* Name - Main headline */}
    <motion.h1
     className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-foreground mb-6"
     variants={fadeSlideUp}
    >
     Puspo.
    </motion.h1>

    {/* Role - Typing Animation */}
    <motion.div
     className="h-16 sm:h-20 md:h-24 mb-8"
     variants={fadeSlideUp}
    >
     <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-muted-foreground leading-tight">
      I am a{" "}
      {/* ARIA-live region for screen readers */}
      <span
       className="inline-block"
       role="status"
       aria-live="polite"
       aria-label={`Current role: ${text}`}
      >
       {/* Gradient text for typing */}
       <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-primary bg-[length:200%_100%] animate-gradient-x">
        {text}
       </span>

       {/* Blinking cursor */}
       <motion.span
        className="inline-block w-[3px] h-[0.9em] bg-primary ml-1 align-middle rounded-sm"
        animate={{ opacity: shouldBlink ? [1, 0] : 1 }}
        transition={{
         duration: 0.6,
         repeat: shouldBlink ? Infinity : 0,
         ease: "linear",
        }}
        aria-hidden="true"
       />
      </span>
     </h2>
    </motion.div>

    {/* Description */}
    <motion.p
     className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-12"
     variants={fadeSlideUp}
    >
     A passionate developer crafting elegant, scalable solutions.
     With expertise in Spring Boot, Java, and full-stack development,
     I transform complex problems into clean, efficient code.
    </motion.p>

    {/* CTA Buttons */}
    <HeroButtons />
   </motion.div>
  </section>
 )
}
