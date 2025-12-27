/**
 * Animation Constants
 * Centralized configuration for all animations in the portfolio.
 * Inspired by Stripe/Vercel/Linear motion design.
 */

// ============================================
// EASING CURVES
// ============================================
/**
 * Smooth deceleration curve - feels natural and premium.
 * Use for entrance animations and transitions.
 */
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const

/**
 * Standard ease-out for hover states.
 */
export const EASE_OUT = [0.0, 0.0, 0.2, 1] as const

// ============================================
// TIMING (in milliseconds)
// ============================================
export const TIMING = {
    // Typing Animation
    typeSpeed: { min: 80, max: 150 },      // Variable speed for human-like feel
    deleteSpeed: { min: 40, max: 80 },
    pauseAfterWord: 2000,                  // Pause before deleting
    pauseAfterDelete: 500,                 // Pause before typing next word

    // Entrance Animation
    heroEntranceDuration: 0.6,
    heroEntranceDelay: 0.15,               // Stagger between elements
    typingStartDelay: 800,                 // Delay before typing starts (after entrance)

    // Hover Effects
    hoverDuration: 0.2,
} as const

// ============================================
// ROLE TITLES (for typing animation)
// ============================================
export const HERO_ROLES = [
    "Backend Engineer",
    "Spring Boot Specialist",
    "Full-Stack Developer",
    "Problem Solver",
] as const

// ============================================
// FRAMER MOTION VARIANTS
// ============================================

/**
 * Container variant for staggered children animations.
 */
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: TIMING.heroEntranceDelay,
            delayChildren: 0.1,
        },
    },
}

/**
 * Fade + Slide Up animation for hero elements.
 */
export const fadeSlideUp = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: TIMING.heroEntranceDuration,
            ease: EASE_OUT_EXPO,
        },
    },
}

/**
 * Simple fade animation.
 */
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
}

/**
 * Button hover animation config.
 */
export const buttonHover = {
    scale: 1.03,
    y: -2,
    transition: { duration: TIMING.hoverDuration, ease: EASE_OUT },
}

export const buttonTap = {
    scale: 0.97,
}

// ============================================
// REDUCED MOTION
// ============================================
/**
 * Check if user prefers reduced motion.
 * Use this to disable or simplify animations.
 */
export const getReducedMotionVariant = (normalVariant: object) => ({
    ...normalVariant,
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.01 } },
})
