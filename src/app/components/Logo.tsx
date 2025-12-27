"use client"

import { motion } from "framer-motion"

export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="8"
          className="fill-primary"
        />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fontSize="18"
          fontWeight="bold"
          fontFamily="var(--font-mono)"
          className="fill-primary-foreground select-none pointer-events-none"
        >
          P
        </text>
        <motion.rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="8"
          className="fill-transparent stroke-primary-foreground/20"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </motion.svg>
    </motion.div>
  )
}
