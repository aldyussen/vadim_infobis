'use client'

import Image from 'next/image'
import { useLeadModal } from './LeadModal'

export function Arrow({ flip = false }: { flip?: boolean }) {
  return (
    <div className="relative h-[19px] w-[25px]" style={flip ? { transform: 'rotate(180deg)' } : undefined}>
      <div className="absolute" style={{ inset: '1.76% 43.33% 1.76% 0' }}>
        <Image src="/images/section2/arrow-a.svg" alt="" fill className="object-contain" sizes="25px" />
      </div>
      <div className="absolute" style={{ inset: '1.76% 0 1.76% 43.33%' }}>
        <Image src="/images/section2/arrow-b.svg" alt="" fill className="object-contain" sizes="25px" />
      </div>
    </div>
  )
}

// CTA button cluster anchored at the button's top-left, matching the Figma offsets
// (label +26/+27, arrows at -75 / +350, +28).
export function CtaButton({ left, top }: { left: number; top: number }) {
  const { open } = useLeadModal()
  return (
    <>
      <div className="group absolute rounded-[10px] shadow-[25px_25px_55px_0px_rgba(0,0,0,0.4)]" style={{ left, top, width: 300, height: 75 }}>
        <Image src="/images/section1/button.webp" alt="" fill className="rounded-[10px] object-cover transition duration-200 group-hover:brightness-110" sizes="300px" />
        <button
          type="button"
          onClick={open}
          aria-label="Оставить заявку"
          className="absolute inset-0 z-10 cursor-pointer rounded-[10px] transition active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        />
      </div>
      <div className="pointer-events-none absolute text-center" style={{ left: left + 26, top: top + 27, width: 246 }}>
        <p className="text-[15.9px] font-extrabold leading-[22px] text-white">ОСТАВИТЬ ЗАЯВКУ</p>
      </div>
      <div className="absolute" style={{ left: left - 75, top: top + 28 }}>
        <Arrow flip />
      </div>
      <div className="absolute" style={{ left: left + 350, top: top + 28 }}>
        <Arrow />
      </div>
    </>
  )
}
