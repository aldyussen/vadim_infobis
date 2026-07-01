'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { interLocal } from '../vadim/inter-local'
import { gsap, useGSAP } from '@/lib/gsap'

const CARDS = [
  { img: 'case1.webp', fs: 30.3, bold: 'Рост Х3', semi: ' до 7,5 млн', line2: '$/год', descr: 'Продажа металлопроката', dfs: 15.3 },
  { img: 'case2.webp', fs: 29.9, bold: 'Рост Х12', semi: ' до 60К', line2: '$/мес', descr: 'Банкротство физ.лиц', dfs: 15.1 },
  { img: 'case3.webp', fs: 29.6, bold: 'Рост Х10', semi: ' до 12k $/', line2: 'мес', descr: 'Автоворонки/чат-боты', dfs: 15.1 },
]

export function ClientResults() {
  const scope = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('[data-anim="rcard"]', {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: { trigger: scope.current, start: 'top 80%', once: true },
        })
      })
    },
    { scope }
  )

  return (
    <section
      ref={scope}
      className={`${interLocal.variable} relative w-full overflow-hidden bg-alabaster`}
      style={{ containerType: 'inline-size', aspectRatio: '1920 / 422.59' }}
    >
      <div
        className="absolute left-0 top-0 h-[422.59px] w-[1920px] origin-top-left font-[family-name:var(--font-inter-local)] text-black"
        style={{ transform: 'scale(calc(100cqw / 1920px))' }}
      >
        <div className="flex h-full flex-col px-[360px] pb-[15px] pt-[30px]">
          <div className="mx-auto flex w-full max-w-[1200px] justify-center gap-[40px]">
            {CARDS.map((c) => (
              <div key={c.img} data-anim="rcard" className="flex w-[360px] flex-col">
                <div className="relative h-[237.59px] w-full overflow-hidden rounded-[20px]">
                  <Image src={`/images/ukolova/results/${c.img}`} alt="Кейс клиента" fill className="object-cover" sizes="360px" />
                </div>
                <div className="flex flex-col items-center gap-[10px] px-[40px] pt-[30px] text-center">
                  <div>
                    <p className="leading-[37.44px]" style={{ fontSize: c.fs }}>
                      <span className="font-bold">{c.bold}</span>
                      <span className="font-semibold">{c.semi}</span>
                    </p>
                    <p className="font-semibold leading-[37.44px]" style={{ fontSize: c.fs }}>
                      {c.line2}
                    </p>
                  </div>
                  <p className="font-light leading-[24.8px]" style={{ fontSize: c.dfs }}>
                    {c.descr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
