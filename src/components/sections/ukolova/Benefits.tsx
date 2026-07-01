'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { interLocal } from '../vadim/inter-local'
import { gsap, useGSAP } from '@/lib/gsap'

const BULLETS = [
  { icon: 'icon1.webp', iconTop: 323.19, iconH: 74.09, textTop: 346.69, w: 721.59, lines: ['Как масштабировать без хаоса в команде?'] },
  { icon: 'icon2.webp', iconTop: 420.8, iconH: 73.59, textTop: 444.3, w: 721.59, lines: ['Как убрать утечки денег и повысить LTV?'] },
  { icon: 'icon3.webp', iconTop: 516.8, iconH: 75.09, textTop: 521.09, w: 564.8, lines: ['Как сделать маркетинг системой, а не', '«рекламой в плюс-минус»?'] },
]

export function Benefits() {
  const scope = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('[data-anim="brow"]', {
          x: -24,
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: { trigger: scope.current, start: 'top 65%', once: true },
        })
      })
    },
    { scope }
  )

  return (
    <section
      ref={scope}
      className={`${interLocal.variable} relative w-full overflow-hidden bg-alabaster`}
      style={{ containerType: 'inline-size', aspectRatio: '1920 / 704' }}
    >
      <div
        className="absolute left-0 top-0 h-[704px] w-[1920px] origin-top-left font-[family-name:var(--font-inter-local)] text-white"
        style={{ transform: 'scale(calc(100cqw / 1920px))' }}
      >
        {/* dark card */}
        <div
          className="absolute rounded-[30px] border border-white/5 bg-gradient-to-br from-[#2a2a2a] to-[#1c1c1c] shadow-[0px_30px_60px_-20px_rgba(0,0,0,0.5)]"
          style={{ left: 80, top: 51.19, width: 1760, height: 633.59 }}
        />

        {/* heading + sub */}
        <div className="absolute" style={{ left: 147.19, top: 108, width: 1504 }}>
          <p className="text-[62px] font-black uppercase leading-[68px] tracking-[-0.5px]">
            На тренинге <span className="text-tan">вы получите:</span>
          </p>
        </div>
        <div className="absolute" style={{ left: 152, top: 230, width: 1046.39 }}>
          <p className="text-[23px] font-light leading-[32px] text-white/85">
            Методику увеличения прибыли <span className="font-semibold text-tan">х2–х3</span> в текущем бизнесе
          </p>
        </div>

        {/* bullets */}
        {BULLETS.map((b) => (
          <div key={b.icon}>
            <div data-anim="brow" className="absolute" style={{ left: 161.59, top: b.iconTop, width: 73.59, height: b.iconH }}>
              <Image src={`/images/ukolova/benefits/${b.icon}`} alt="" fill className="object-contain" sizes="74px" />
            </div>
            <div data-anim="brow" className="absolute flex flex-col gap-[15.6px]" style={{ left: 265.59, top: b.textTop, width: b.w }}>
              {b.lines.map((l) => (
                <p key={l} className="text-[20px] font-normal leading-[26px]">
                  {l}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* round photo */}
        <div className="absolute overflow-hidden rounded-full" style={{ left: 1441.59, top: 160, width: 299.19, height: 299.19 }}>
          <Image src="/images/ukolova/benefits/round.webp" alt="Екатерина Уколова" fill className="object-cover" sizes="299px" />
        </div>

        {/* white info card */}
        <div
          className="absolute rounded-[30px] bg-alabaster opacity-90 shadow-[0px_0px_10px_5px_rgba(227,226,225,0.6)]"
          style={{ left: 1131.19, top: 459.19, width: 540.8, height: 195.19 }}
        />
        <div className="absolute" style={{ left: 1158.39, top: 503.5, width: 480 }}>
          <p className="text-[18px] font-bold leading-[28px] text-mongoose">Все инструменты — без теории</p>
        </div>
        <div className="absolute flex flex-col gap-[13.2px]" style={{ left: 1156.8, top: 550.5, width: 428.8 }}>
          <p className="text-[14px] font-normal leading-[22px] text-black">Только то, что работает в бизнесе с</p>
          <p className="text-[14px] font-normal leading-[22px] text-black">выручкой от $10 000 до $25 млн / мес</p>
        </div>
      </div>
    </section>
  )
}
