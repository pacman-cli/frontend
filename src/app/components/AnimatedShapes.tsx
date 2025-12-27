"use client"

import { motion, useReducedMotion } from "framer-motion"

/**
 * Animated 3D geometric shapes background
 * Sketchy, artistic floating shapes with depth
 */
export default function AnimatedShapes() {
 const prefersReducedMotion = useReducedMotion()

 const shapes = [
  // Large floating cube - back layer
  { type: "cube", x: "80%", y: "20%", size: 120, duration: 20, delay: 0, opacity: 0.08 },
  // Medium pyramid
  { type: "pyramid", x: "15%", y: "60%", size: 80, duration: 25, delay: 2, opacity: 0.06 },
  // Small sphere
  { type: "sphere", x: "70%", y: "70%", size: 60, duration: 18, delay: 1, opacity: 0.07 },
  // Torus ring
  { type: "torus", x: "25%", y: "25%", size: 100, duration: 22, delay: 3, opacity: 0.05 },
  // Floating lines
  { type: "lines", x: "50%", y: "40%", size: 140, duration: 30, delay: 0, opacity: 0.04 },
  // Small cube
  { type: "cube", x: "90%", y: "80%", size: 50, duration: 15, delay: 4, opacity: 0.06 },
  // Cross shape
  { type: "cross", x: "10%", y: "85%", size: 70, duration: 28, delay: 2, opacity: 0.05 },
 ]

 if (prefersReducedMotion) {
  return null
 }

 return (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
   {shapes.map((shape, index) => (
    <motion.div
     key={index}
     className="absolute"
     style={{
      left: shape.x,
      top: shape.y,
      transform: "translate(-50%, -50%)",
     }}
     animate={{
      y: [0, -20, 0, 20, 0],
      x: [0, 10, 0, -10, 0],
      rotateX: [0, 360],
      rotateY: [0, 360],
      rotateZ: [0, 180],
     }}
     transition={{
      duration: shape.duration,
      delay: shape.delay,
      repeat: Infinity,
      ease: "linear",
     }}
    >
     <svg
      width={shape.size}
      height={shape.size}
      viewBox="0 0 100 100"
      style={{ opacity: shape.opacity }}
      className="text-primary"
     >
      {shape.type === "cube" && <CubeShape />}
      {shape.type === "pyramid" && <PyramidShape />}
      {shape.type === "sphere" && <SphereShape />}
      {shape.type === "torus" && <TorusShape />}
      {shape.type === "lines" && <LinesShape />}
      {shape.type === "cross" && <CrossShape />}
     </svg>
    </motion.div>
   ))}
  </div>
 )
}

// Sketchy 3D Cube
function CubeShape() {
 return (
  <g stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3,2">
   {/* Front face */}
   <path d="M25 35 L75 35 L75 85 L25 85 Z" />
   {/* Top face */}
   <path d="M25 35 L40 20 L90 20 L75 35" />
   {/* Side face */}
   <path d="M75 35 L90 20 L90 70 L75 85" />
   {/* Inner lines for depth */}
   <path d="M40 20 L40 70 L25 85" strokeOpacity="0.5" />
   <path d="M40 70 L90 70" strokeOpacity="0.5" />
  </g>
 )
}

// Sketchy Pyramid
function PyramidShape() {
 return (
  <g stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4,2">
   {/* Base */}
   <path d="M20 80 L50 90 L80 80 L50 70 Z" />
   {/* Edges to apex */}
   <path d="M20 80 L50 20" />
   <path d="M80 80 L50 20" />
   <path d="M50 70 L50 20" strokeOpacity="0.4" />
   <path d="M50 90 L50 20" strokeOpacity="0.3" />
  </g>
 )
}

// Sketchy Sphere (wireframe)
function SphereShape() {
 return (
  <g stroke="currentColor" fill="none" strokeWidth="1" strokeLinecap="round" strokeDasharray="2,3">
   <circle cx="50" cy="50" r="40" />
   <ellipse cx="50" cy="50" rx="40" ry="15" />
   <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(90 50 50)" />
   <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(45 50 50)" strokeOpacity="0.5" />
   <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(-45 50 50)" strokeOpacity="0.5" />
  </g>
 )
}

// Sketchy Torus
function TorusShape() {
 return (
  <g stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3,2">
   <ellipse cx="50" cy="50" rx="40" ry="20" />
   <ellipse cx="50" cy="50" rx="25" ry="12" />
   <path d="M10 50 C10 35, 30 30, 50 30" strokeOpacity="0.5" />
   <path d="M90 50 C90 65, 70 70, 50 70" strokeOpacity="0.5" />
  </g>
 )
}

// Floating sketch lines
function LinesShape() {
 return (
  <g stroke="currentColor" fill="none" strokeWidth="1" strokeLinecap="round" strokeDasharray="5,4">
   <path d="M10 30 L90 30" strokeOpacity="0.6" />
   <path d="M20 50 L80 50" strokeOpacity="0.4" />
   <path d="M15 70 L85 70" strokeOpacity="0.5" />
   <path d="M30 20 L30 80" strokeOpacity="0.3" />
   <path d="M70 15 L70 85" strokeOpacity="0.3" />
  </g>
 )
}

// Cross/Plus shape
function CrossShape() {
 return (
  <g stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2,2">
   <path d="M50 10 L50 90" />
   <path d="M10 50 L90 50" />
   <path d="M30 30 L70 70" strokeOpacity="0.4" />
   <path d="M70 30 L30 70" strokeOpacity="0.4" />
  </g>
 )
}
