/**
 * useTypewriter Hook
 *
 * Creates a realistic typing animation effect with:
 * - Variable typing speed (human-like)
 * - Backspace/delete animation
 * - Pause between words
 * - Infinite loop
 * - Reduced motion support
 */

import { TIMING } from "@/lib/animation-constants"
import { useCallback, useEffect, useState } from "react"

export enum TypewriterPhase {
    Idle,      // Waiting to start (for entrance animation sync)
    Typing,
    Pausing,   // After completing a word
    Deleting,
    Waiting,   // After deleting, before next word
}

interface UseTypewriterOptions {
    words: string[]
    startDelay?: number           // Delay before animation starts (sync with entrance)
    typeSpeed?: { min: number; max: number }
    deleteSpeed?: { min: number; max: number }
    pauseAfterWord?: number
    pauseAfterDelete?: number
}

export const useTypewriter = ({
    words,
    startDelay = TIMING.typingStartDelay,
    typeSpeed = TIMING.typeSpeed,
    deleteSpeed = TIMING.deleteSpeed,
    pauseAfterWord = TIMING.pauseAfterWord,
    pauseAfterDelete = TIMING.pauseAfterDelete,
}: UseTypewriterOptions) => {
    const [phase, setPhase] = useState(TypewriterPhase.Idle)
    const [wordIndex, setWordIndex] = useState(0)
    const [text, setText] = useState("")
    const [isReducedMotion, setIsReducedMotion] = useState(false)

    // Check for reduced motion preference
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
        setIsReducedMotion(mediaQuery.matches)

        const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
        mediaQuery.addEventListener("change", handler)
        return () => mediaQuery.removeEventListener("change", handler)
    }, [])

    // If reduced motion, just show full text instantly
    useEffect(() => {
        if (isReducedMotion) {
            setText(words[0])
            setPhase(TypewriterPhase.Pausing)
        }
    }, [isReducedMotion, words])

    // Generate random speed within range for human-like feel
    const getRandomSpeed = useCallback((range: { min: number; max: number }) => {
        return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min
    }, [])

    // Main animation logic
    useEffect(() => {
        if (isReducedMotion) return

        const currentWord = words[wordIndex % words.length]

        switch (phase) {
            case TypewriterPhase.Idle: {
                // Wait for entrance animation to complete
                const timeout = setTimeout(() => setPhase(TypewriterPhase.Typing), startDelay)
                return () => clearTimeout(timeout)
            }

            case TypewriterPhase.Typing: {
                if (text === currentWord) {
                    // Word complete, pause before deleting
                    const timeout = setTimeout(() => setPhase(TypewriterPhase.Pausing), pauseAfterWord)
                    return () => clearTimeout(timeout)
                }

                // Type next character with variable speed
                const timeout = setTimeout(() => {
                    setText(currentWord.slice(0, text.length + 1))
                }, getRandomSpeed(typeSpeed))
                return () => clearTimeout(timeout)
            }

            case TypewriterPhase.Pausing: {
                // Pause complete, start deleting
                const timeout = setTimeout(() => setPhase(TypewriterPhase.Deleting), 100)
                return () => clearTimeout(timeout)
            }

            case TypewriterPhase.Deleting: {
                if (text === "") {
                    // Deletion complete, wait before next word
                    const timeout = setTimeout(() => {
                        setWordIndex((prev) => (prev + 1) % words.length)
                        setPhase(TypewriterPhase.Waiting)
                    }, pauseAfterDelete)
                    return () => clearTimeout(timeout)
                }

                // Delete character with variable speed
                const timeout = setTimeout(() => {
                    setText(text.slice(0, -1))
                }, getRandomSpeed(deleteSpeed))
                return () => clearTimeout(timeout)
            }

            case TypewriterPhase.Waiting: {
                // Ready to type next word
                const timeout = setTimeout(() => setPhase(TypewriterPhase.Typing), 100)
                return () => clearTimeout(timeout)
            }
        }
    }, [
        words, text, phase, wordIndex, startDelay,
        typeSpeed, deleteSpeed, pauseAfterWord, pauseAfterDelete,
        getRandomSpeed, isReducedMotion
    ])

    return {
        text,
        phase,
        isTyping: phase === TypewriterPhase.Typing,
        isDeleting: phase === TypewriterPhase.Deleting,
        currentWord: words[wordIndex % words.length],
    }
}
