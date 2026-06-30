'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { interLocal } from './inter-local'
import { CtaButton } from './Cta'
import { gsap, useGSAP } from '@/lib/gsap'

const GRID = [199, 399, 599, 799, 999, 1199, 1399, 1599, 1799]

const ICONS = [
  { src: '/images/section2/icon1.webp', left: 379, top: 330, w: 280, h: 300.83 },
  { src: '/images/section2/icon2.webp', left: 673, top: 436, w: 280, h: 301.06 },
  { src: '/images/section2/icon3.webp', left: 966, top: 330, w: 280, h: 301.06 },
  { src: '/images/section2/icon4.webp', left: 1260, top: 436, w: 280, h: 300.83 },
]

const TAGS = [
  { src: '/images/section2/tag204.webp', left: 402, top: 266, w: 232, h: 164.39 },
  { src: '/images/section2/tag205.webp', left: 692, top: 656, w: 241, h: 159.27 },
  { src: '/images/section2/tag206.webp', left: 1000, top: 266, w: 213, h: 163.7 },
  { src: '/images/section2/tag207.webp', left: 1281, top: 656, w: 239, h: 158.77 },
]


export function Benefits() {
  const scope = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap
          .timeline({
            scrollTrigger: { trigger: scope.current, start: 'top 70%', once: true },
            defaults: { ease: 'power2.out' },
          })
          .from('[data-anim="bcard"]', { y: 30, opacity: 0, duration: 0.6, stagger: 0.08 })
          .from('[data-anim="btext"]', { y: 16, opacity: 0, duration: 0.5, stagger: 0.06 }, '-=0.3')
      })
    },
    { scope }
  )

  return (
    <section
      ref={scope}
      className={`${interLocal.variable} relative w-full overflow-hidden bg-[#070707]`}
      style={{ containerType: 'inline-size', aspectRatio: '1920 / 1024' }}
    >
      <div
        className="absolute left-0 top-0 h-[1024px] w-[1920px] origin-top-left font-[family-name:var(--font-inter-local)] text-white"
        style={{ transform: 'scale(calc(100cqw / 1920px))' }}
      >
        {/* background */}
        <Image src="/images/section2/bg.jpg" alt="" fill className="object-cover" sizes="1920px" />
        {GRID.map((x) => (
          <div key={x} className="absolute top-0 h-[1025px] w-px bg-white opacity-5" style={{ left: x }} />
        ))}

        {/* heading */}
        <div className="absolute text-center" style={{ left: 529, top: 25, width: 863 }}>
          <p className="text-[65px] font-black uppercase leading-[65px]">Что вы получите</p>
          <p className="text-[65px] font-black uppercase leading-[65px]">в результате 2х дней</p>
        </div>

        {/* subtitle */}
        <div className="absolute text-center" style={{ left: 585, top: 185, width: 750 }}>
          <p className="text-[17.4px] font-light leading-[25px]">
            Уникальную структуру увеличения продаж и построения бизнеса в сфере бьюти,
          </p>
          <p className="text-[17.4px] font-light leading-[25px]">
            выход на новый уровень и большой отрыв от ваших конкурентов,{' '}
            <span className="font-extrabold">а так же:</span>
          </p>
        </div>

        {/* card icons + tags */}
        {ICONS.map((ic) => (
          <div key={ic.src} data-anim="bcard" className="absolute" style={{ left: ic.left, top: ic.top, width: ic.w, height: ic.h }}>
            <Image src={ic.src} alt="" fill className="object-contain" sizes="280px" />
          </div>
        ))}
        {TAGS.map((tg) => (
          <div key={tg.src} data-anim="bcard" className="absolute" style={{ left: tg.left, top: tg.top, width: tg.w, height: tg.h }}>
            <Image src={tg.src} alt="" fill className="object-contain" sizes="240px" />
          </div>
        ))}

        {/* card 1 text */}
        <div data-anim="btext" className="absolute text-center" style={{ left: 392, top: 666, width: 252 }}>
          <p className="text-[17px] font-extrabold leading-[25px]">Последние тренды</p>
          <p className="text-[17px] font-light leading-[25px]">маркетинга и продаж в</p>
          <p className="text-[17px] font-light leading-[25px]">бьюти сфере</p>
        </div>

        {/* card 2 text */}
        <div data-anim="btext" className="absolute text-center" style={{ left: 687, top: 331, width: 252 }}>
          <p className="text-[17.2px] font-light leading-[25px]">Как построить эффективный</p>
          <p className="text-[17.2px] font-light leading-[25px]">отдел продаж, который</p>
          <p className="text-[17.2px] font-extrabold leading-[25px]">выполняет планы</p>
        </div>

        {/* card 3 text */}
        <div data-anim="btext" className="absolute text-center" style={{ left: 978, top: 665, width: 252 }}>
          <p className="text-[17.4px] font-light leading-[25px]">Пошаговую инструкцию,</p>
          <p className="text-[17.4px] font-light leading-[25px]">
            как сделать <span className="font-extrabold">X2 в вашем</span>
          </p>
          <p className="text-[17.4px] font-extrabold leading-[25px]">бизнесе</p>
        </div>

        {/* card 4 text */}
        <div data-anim="btext" className="absolute text-center" style={{ left: 1275, top: 331, width: 252 }}>
          <p className="text-[17.4px] font-light leading-[25px]">
            Как <span className="font-extrabold">нанять команду мечты</span>
          </p>
          <p className="text-[17.4px] font-light leading-[25px]">и собрать армию для захвата</p>
          <p className="text-[17.4px] font-light leading-[25px]">рынка</p>
        </div>

        {/* CTA */}
        <CtaButton left={810} top={805} />

        {/* sub-CTA line */}
        <div className="absolute text-center" style={{ left: 826, top: 895, width: 267 }}>
          <p className="text-[15.3px] font-light leading-[21px] text-white/55">Оставляй заявку и получи</p>
          <p className="text-[15.3px] leading-[21px]">
            <span className="font-extrabold text-white">+1 билет в подарок</span>
          </p>
        </div>
      </div>
    </section>
  )
}
