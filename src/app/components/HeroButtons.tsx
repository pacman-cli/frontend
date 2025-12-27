"use client"

/**
 * HeroButtons Component
 *
 * Premium CTA buttons with micro-interactions:
 * - Hover lift effect
 * - Soft glow animation
 * - Tactile press feedback
 * - Keyboard focus states
 */

import { buttonHover, buttonTap, fadeSlideUp } from "@/lib/animation-constants"
import { motion } from "framer-motion"
import Link from "next/link"

interface HeroButtonsProps {
 className?: string
}

export default function HeroButtons({ className = "" }: HeroButtonsProps) {
 return (
  <motion.div
   className={`flex flex-wrap gap-4 ${className}`}
   variants={fadeSlideUp}
  >
   {/* Primary CTA - View Posts */}
   <Link href="/posts">
    <motion.button
     whileHover={buttonHover}
     whileTap={buttonTap}
     className="group relative px-8 py-3.5 rounded-full bg-primary text-primary-foreground
                     font-semibold text-lg transition-shadow duration-300
                     shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
     {/* Glow effect on hover */}
     <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-blue-600 opacity-0
                          group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
     View Posts
    </motion.button>
   </Link>

   {/* Secondary CTA - About Me */}
   <Link href="/about">
    <motion.button
     whileHover={{ ...buttonHover, borderColor: "hsl(var(--primary) / 0.5)" }}
     whileTap={buttonTap}
     className="relative px-8 py-3.5 rounded-full border-2 border-border bg-background/50
                     text-foreground font-medium text-lg backdrop-blur-sm
                     transition-all duration-300 hover:bg-accent/10 hover:border-primary/30
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
     About Me
    </motion.button>
   </Link>
  </motion.div>
 )
}
