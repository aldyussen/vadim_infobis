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
        {/* warm glow for depth */}
        <div
          className="pointer-events-none absolute rounded-full"
          style={{ left: 1000, top: 60, width: 940, height: 940, background: 'radial-gradient(circle, rgba(199,163,121,0.30) 0%, rgba(199,163,121,0.08) 45%, transparent 68%)' }}
        />

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
        <div data-anim="hfade" className="absolute flex items-center gap-3" style={{ left: 72, top: 176, width: 1016 }}>
          <span className="h-px w-[34px] bg-tan" />
          <p className="text-[15px] font-semibold uppercase leading-none tracking-[0.22em] text-tan">Моя цель</p>
        </div>

        {/* H1 */}
        <div className="absolute flex flex-col gap-[2px]" style={{ left: 72, top: 210, width: 1050 }}>
          <p data-anim="hline" className="text-[58px] font-black uppercase leading-[62px] tracking-[-0.5px]">Сделать из бизнесмена</p>
          <p data-anim="hline" className="text-[58px] font-black uppercase leading-[62px] tracking-[-0.5px] text-tan">долларового миллионера</p>
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
        <div className="absolute opacity-60" style={{ left: 92.8, top: 612, width: 129.59 }}>
          <p className="text-[38px] font-bold leading-[38px] text-black/60">49$</p>
        </div>
        <div className="absolute flex h-[65.331px] w-[127.2px] items-center justify-center" style={{ left: 67.19, top: 601 }}>
          <div className="-rotate-[26deg]">
            <div className="h-[5px] bg-brand-red" style={{ width: 145 }} />
          </div>
        </div>

        {/* free reminder */}
        <div className="absolute flex flex-col gap-[8px]" style={{ left: 259.19, top: 607, width: 611.19 }}>
          <p className="text-[22px] font-bold leading-[24px] text-black">Успейте зарегистрироваться</p>
          <p className="text-[34px] font-black uppercase leading-[34px] text-mongoose">Бесплатно</p>
        </div>

        {/* register button → modal */}
        <button
          type="button"
          onClick={open}
          aria-label="Зарегистрироваться"
          className="group absolute flex items-center justify-center gap-3 overflow-hidden rounded-[14px] bg-gradient-to-b from-[#d0b491] to-[#b8946f] uppercase text-white shadow-[0px_10px_30px_-6px_rgba(156,118,87,0.7)] transition-all duration-300 hover:from-[#d8bd9b] hover:to-[#bf9b75] hover:shadow-[0px_16px_40px_-6px_rgba(156,118,87,0.85)] active:translate-y-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          style={{ left: 75.19, top: 702.39, width: 716.8, height: 182.39 }}
        >
          <span className="text-[24px] font-extrabold tracking-[0.01em]">Зарегистрироваться</span>
          <span className="text-[26px] transition-transform duration-300 group-hover:translate-x-1.5">→</span>
        </button>

        {/* note + timer */}
        <div className="absolute" style={{ left: 56, top: 953.8, width: 800 }}>
          <p className="text-[16px] font-normal leading-[25px]">Всего 1,5 часа, которые увеличат вашу прибыль уже завтра</p>
        </div>
        <div className="absolute" style={{ left: 57.59, top: 1000 }}>
          <Countdown />
        </div>

        {/* stats */}
        <div className="absolute" style={{ left: 916.8, top: 1044 }}>
          <p data-count="1000" className="text-[54px] font-black leading-[54px] text-tan">1000</p>
        </div>
        <div className="absolute flex flex-col gap-[12.6px]" style={{ left: 1097.59, top: 1055.59, width: 326.39 }}>
          <p className="text-[16px] font-semibold leading-[21px] text-white/75">Специализация в разных</p>
          <p className="text-[16px] font-semibold leading-[21px] text-white/75">сферах бизнеса</p>
        </div>
        <div className="absolute" style={{ left: 1496, top: 1044 }}>
          <p data-count="8500" className="text-[54px] font-black leading-[54px] text-tan">8500</p>
        </div>
        <div className="absolute flex flex-col gap-[12.6px]" style={{ left: 1681.59, top: 1055.59, width: 238.39 }}>
          <p className="text-[16px] font-semibold leading-[21px] text-white/75">Реализованные</p>
          <p className="text-[16px] font-semibold leading-[21px] text-white/75">проекты</p>
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
