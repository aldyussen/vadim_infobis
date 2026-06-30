'use client'

import { useEffect } from 'react'
import { ScrollTrigger } from '@/lib/gsap'

// Refreshes ScrollTrigger once after fonts + images settle so triggers use
// final text/layout sizes (Part 2.4 / Part 5).
export function ScrollSetup() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    let done = false
    const once = () => {
      if (done) return
      done = true
      refresh()
    }
    if (document.fonts?.ready) {
      document.fonts.ready.then(once)
    }
    window.addEventListener('load', once)
    const t = window.setTimeout(once, 1200)
    return () => {
      window.removeEventListener('load', once)
      window.clearTimeout(t)
    }
  }, [])
  return null
}
