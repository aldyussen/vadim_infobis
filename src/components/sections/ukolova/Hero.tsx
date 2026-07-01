'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { interLocal } from '../vadim/inter-local'
import { useLeadModal } from '../vadim/LeadModal'
import { gsap, useGSAP } from '@/lib/gsap'

function pad2(n: number) {
  return n.toString().padStart(2, '0')
}

function TimerGroup({ value }: { value: string }) {
  return (
    <div className="flex gap-[1.6px]">
      {value.split('').map((d, i) => (
        <div key={i} className="flex h-[73.58px] min-w-[59.25px] items-center justify-center rounded-[10px] bg-gallery px-[12px]">
          <span className="font-[family-name:var(--font-logo)] text-[22px] leading-[22px] text-black">{d}</span>
        </div>
      ))}
    </div>
  )
}

function Countdown() {
  // живой отсчёт до конца суток (ЧЧ:ММ:СС)
  const [t, setT] = useState<[string, string, string]>(['00', '04', '52'])
  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const end = new Date(now)
      end.setHours(23, 59, 59, 999)
      let s = Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000))
      const h = Math.floor(s / 3600)
      s %= 3600
      const m = Math.floor(s / 60)
      setT([pad2(h), pad2(m), pad2(s % 60)])
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="flex items-start gap-[9.6px]">
      <TimerGroup value={t[0]} />
      <TimerGroup value={t[1]} />
      <TimerGroup value={t[2]} />
    </div>
  )
}

export function Hero() {
  const { open } = useLeadModal()
  const scope = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap
          .timeline({ defaults: { ease: 'power2.out' } })
          .from('[data-anim="hline"]', { y: 40, opacity: 0, duration: 0.7, stagger: 0.12 })
          .from('[data-anim="hfade"]', { y: 24, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.3')

        gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
          const to = parseInt(el.dataset.count || '0', 10)
          const obj = { v: 0 }
          gsap.to(obj, {
            v: to,
            duration: 1.6,
            ease: 'power2.out',
            snap: { v: 1 },
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
            onUpdate: () => {
              el.textContent = String(Math.round(obj.v))
            },
          })
        })
      })
    },
    { scope }
  )

  return (
    <section
      ref={scope}
      className={`${interLocal.variable} relative w-full overflow-hidden bg-mine-shaft`}
      style={{ containerType: 'inline-size', aspectRatio: '1920 / 1152' }}
    >
      <div
        className="absolute left-0 top-0 h-[1152px] w-[1920px] origin-top-left font-[family-name:var(--font-inter-local)] text-white"
        style={{ transform: 'scale(calc(100cqw / 1920px))' }}
      >
        {/* background decor */}
        <div className="absolute flex items-center justify-center" style={{ left: 744.62, top: 71.03, width: 504.955, height: 550.714 }}>
          <div className="rotate-[13deg] opacity-5" style={{ width: 459.19 }}>
            <Image src="/images/ukolova/hero/coin.webp" alt="" width={459} height={459} className="h-auto w-full" />
          </div>
        </div>
        <div className="absolute opacity-50" style={{ left: 1112, top: -60.8, width: 1100.8, height: 1100.8 }}>
          <Image src="/images/ukolova/hero/swirl.webp" alt="" fill className="object-contain" sizes="1100px" />
        </div>
        <div className="absolute" style={{ left: 1075.19, top: -107.19, width: 844.8, height: 1267.19 }}>
          <Image src="/images/ukolova/hero/portrait.webp" alt="Екатерина Уколова" fill priority className="object-contain object-top" sizes="845px" />
        </div>
        <div className="absolute bg-gradient-to-r from-mine-shaft to-transparent" style={{ left: 1073.59, top: 664, width: 160, height: 496 }} />

        {/* logo */}
        <div className="absolute bg-tan" style={{ left: 75.19, top: 0, width: 179.19, height: 126.39 }} />
        <div className="absolute" style={{ left: 104, top: 40, width: 124.8, height: 53.19 }}>
          <Image src="/images/ukolova/hero/logo.svg" alt="Уколова" fill className="object-contain" sizes="125px" />
        </div>

        {/* quote */}
        <div className="absolute" style={{ left: 308.8, top: 55, width: 822.39 }}>
          <p className="text-[16px] font-normal leading-[25px]">«Для предпринимателей с оборотом от 10 000$/мес»</p>
        </div>

        {/* eyebrow */}
        <div className="absolute" style={{ left: 72, top: 178.98, width: 1016 }}>
          <p className="text-[24px] font-light leading-[24px]">Моя цель -</p>
        </div>

        {/* H1 */}
        <div className="absolute flex flex-col gap-[30.59px]" style={{ left: 72, top: 239, width: 1016 }}>
          <p data-anim="hline" className="text-[39px] font-semibold uppercase leading-[51px]">Сделать из бизнесмена</p>
          <p data-anim="hline" className="text-[39px] font-semibold uppercase leading-[51px]">долларового миллионера</p>
        </div>

        {/* subtitle */}
        <div data-anim="hfade" className="absolute flex flex-col gap-[15.6px]" style={{ left: 67.19, top: 426.69, width: 1044.8 }}>
          <p className="text-[25px] font-normal leading-[26px]">
            С помощью системы: <span className="text-tan-text">8 шагов масштабирования,</span>
          </p>
          <p className="text-[25px] font-normal leading-[26px]">
            <span className="text-tan-text">которые должен внедрить каждый</span> владелец бизнеса <span className="font-bold">с</span>
          </p>
          <p className="text-[25px] font-bold leading-[26px]">оборотом от $10 000</p>
        </div>

        {/* white CTA card */}
        <div data-anim="hfade" className="absolute rounded-[20px] bg-white" style={{ left: 56, top: 569.59, width: 812.8, height: 345.59 }} />

        {/* 49$ crossed */}
        <div className="absolute opacity-70" style={{ left: 92.8, top: 615.3, width: 129.59 }}>
          <p className="text-[35px] font-bold leading-[35px] text-black">49$</p>
        </div>
        <div className="absolute flex h-[65.331px] w-[127.2px] items-center justify-center" style={{ left: 67.19, top: 603.32 }}>
          <div className="-rotate-[26deg]">
            <div className="h-[4.8px] bg-brand-red" style={{ width: 139.19 }} />
          </div>
        </div>

        {/* free reminder */}
        <div className="absolute flex flex-col gap-[12px]" style={{ left: 259.19, top: 613.5, width: 611.19 }}>
          <p className="text-[20px] font-bold leading-[20px] text-black">Успейте зарегистрироваться</p>
          <p className="text-[20px] font-bold leading-[20px] text-black">БЕСПЛАТНО</p>
        </div>

        {/* register button → modal */}
        <button
          type="button"
          onClick={open}
          aria-label="Зарегистрироваться"
          className="absolute flex items-center justify-center rounded-[10px] bg-mongoose uppercase text-white shadow-[0px_5px_0px_0px_rgba(156,118,87,0.9)] transition hover:brightness-105 active:translate-y-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          style={{ left: 75.19, top: 702.39, width: 716.8, height: 182.39 }}
        >
          <span className="text-[19px] font-semibold leading-[29.45px] tracking-[-0.1px]">Зарегистрироваться</span>
        </button>

        {/* note + timer */}
        <div className="absolute" style={{ left: 56, top: 953.8, width: 800 }}>
          <p className="text-[16px] font-normal leading-[25px]">Всего 1,5 часа, которые увеличат вашу прибыль уже завтра</p>
        </div>
        <div className="absolute" style={{ left: 57.59, top: 1000 }}>
          <Countdown />
        </div>

        {/* stats */}
        <div className="absolute opacity-70" style={{ left: 916.8, top: 1056 }}>
          <p data-count="1000" className="text-[35px] font-bold leading-[54px]">1000</p>
        </div>
        <div className="absolute flex flex-col gap-[12.6px] opacity-70" style={{ left: 1097.59, top: 1055.59, width: 326.39 }}>
          <p className="text-[16px] font-semibold leading-[21px]">Специализация в разных</p>
          <p className="text-[16px] font-semibold leading-[21px]">сферах бизнеса</p>
        </div>
        <div className="absolute opacity-70" style={{ left: 1496, top: 1056 }}>
          <p data-count="8500" className="text-[35px] font-bold leading-[54px]">8500</p>
        </div>
        <div className="absolute flex flex-col gap-[12.6px] opacity-70" style={{ left: 1681.59, top: 1055.59, width: 238.39 }}>
          <p className="text-[16px] font-semibold leading-[21px]">Реализованные</p>
          <p className="text-[16px] font-semibold leading-[21px]">проекты</p>
        </div>

        {/* speaker card */}
        <div
          className="absolute rounded-[30px] bg-alabaster opacity-90 shadow-[0px_0px_20px_10px_rgba(227,226,225,0.6)]"
          style={{ left: 1212.8, top: 715.19, width: 540.8, height: 292.8 }}
        />
        <div className="absolute opacity-50" style={{ left: 1260.8, top: 764.89, width: 312 }}>
          <p className="text-[14px] font-normal leading-[22px] text-black">ГЛАВНЫЙ СПИКЕР</p>
        </div>
        <div className="absolute" style={{ left: 1262.39, top: 802.5, width: 678.39 }}>
          <p className="text-[23px] font-bold leading-[36px] text-black">ЕКАТЕРИНА УКОЛОВА</p>
        </div>
        <div className="absolute flex flex-col gap-[13.2px]" style={{ left: 1262.39, top: 865.69, width: 364.8 }}>
          <p className="text-[14px] font-normal leading-[22px] text-black">Выступала на 6000 человек, 8500</p>
          <p className="text-[14px] font-normal leading-[22px] text-black">клиентов в 50 странах мира, автор</p>
          <p className="text-[14px] font-normal leading-[22px] text-black">7 книг</p>
        </div>
        <div
          className="absolute flex items-center justify-center rounded-full bg-[#bc9b7f] drop-shadow-[0px_0px_10px_rgba(102,195,250,0.3)]"
          style={{ left: 1652.8, top: 740.8, width: 43.19, height: 43.19 }}
        >
          <Image src="/images/ukolova/hero/pin.svg" alt="" width={18} height={22} />
        </div>
      </div>
    </section>
  )
}
