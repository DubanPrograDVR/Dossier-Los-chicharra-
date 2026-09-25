"use client"

import { useEffect } from "react"

/**
 * Adds the `is-visible` class to every `[data-reveal]` element as it enters
 * the viewport, reproducing the scroll-in animation from the original site.
 */
export function useReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>("[data-reveal]")
    if (!revealEls.length) return

    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    )

    revealEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
