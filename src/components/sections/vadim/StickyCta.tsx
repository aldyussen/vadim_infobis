'use client'

import { useEffect, useState } from 'react'
import { useLeadModal } from './LeadModal'

export function StickyCta() {
  const { open } = useLeadModal()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 p-3 transition-transform duration-300 sm:hidden ${show ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <button
        type="button"
        onClick={open}
        className="h-14 w-full rounded-xl bg-gradient-to-r from-[#ff598e] to-[#7f50ea] text-sm font-bold uppercase tracking-wide text-white shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition active:scale-[0.99]"
      >
        Оставить заявку
      </button>
    </div>
  )
}
