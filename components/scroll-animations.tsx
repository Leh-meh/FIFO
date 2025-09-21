"use client"

import { useEffect } from "react"

export function ScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const animatedElements = document.querySelectorAll(".fade-in-up, .slide-in-left, .slide-in-right, .scale-in")

    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
