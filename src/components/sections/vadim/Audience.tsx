'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { interLocal } from './inter-local'
import { CtaButton } from './Cta'
import { gsap, useGSAP } from '@/lib/gsap'

const GRID = [199, 399, 599, 799, 999, 1200, 1400, 1600, 1800]

type Card = {
  num: string
  img: string
  card: [number, number, number, number] // left, top, w, h
  badge: [number, number] // left, top (220×220)
  number: [number, number, number] // left, top, fontSize
}

const CARDS: Card[] = [
  { num: '01', img: 'card1.webp', card: [380, 270, 678, 350], badge: [350, 165], number: [448, 251, 18.6] },
  { num: '02', img: 'card2.webp', card: [1068, 270, 472, 350], badge: [1032, 164], number: [1130, 251, 17.8] },
  { num: '03', img: 'card3.webp', card: [380, 630, 472, 350], badge: [672, 523], number: [769, 611, 17.5] },
  { num: '04', img: 'card4.webp', card: [862, 630, 678, 350], badge: [1360, 523], number: [1457, 611, 18] },
]

export function Audience() {
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
          .from('[data-anim="card"]', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1 })
          .from('[data-anim="cardtext"]', { y: 16, opacity: 0, duration: 0.5, stagger: 0.05 }, '-=0.3')
      })
    },
    { scope }
  )

  return (
    <section
      ref={scope}
      className={`${interLocal.variable} relative w-full overflow-hidden bg-[#070707]`}
      style={{ containerType: 'inline-size', aspectRatio: '1920 / 1264' }}
    >
      <div
        className="absolute left-0 top-0 h-[1264px] w-[1920px] origin-top-left font-[family-name:var(--font-inter-local)] text-white"
        style={{ transform: 'scale(calc(100cqw / 1920px))' }}
      >
        <Image src="/images/section3/bg.jpg" alt="" fill className="object-cover" sizes="1920px" />
        {GRID.map((x) => (
          <div key={x} className="absolute top-0 h-[1263px] w-px bg-white opacity-5" style={{ left: x }} />
        ))}

        {/* heading */}
        <div className="absolute text-center" style={{ left: 554, top: 88, width: 813 }}>
          <p className="text-[64.6px] font-black uppercase leading-[101px]">Для кого интенсив</p>
        </div>

        {/* card backgrounds + badges + numbers */}
        {CARDS.map((c) => (
          <div key={c.num}>
            <div data-anim="card" className="absolute" style={{ left: c.card[0], top: c.card[1], width: c.card[2], height: c.card[3] }}>
              <Image src={`/images/section3/${c.img}`} alt="" fill className="object-cover" sizes="680px" />
            </div>
            <div data-anim="cardtext" className="absolute" style={{ left: c.badge[0], top: c.badge[1], width: 220, height: 220 }}>
              <Image src="/images/section3/badge.webp" alt="" fill className="object-contain" sizes="220px" />
            </div>
            <div data-anim="cardtext" className="absolute" style={{ left: c.number[0], top: c.number[1] }}>
              <p className="font-black leading-[31px]" style={{ fontSize: c.number[2] }}>
                {c.num}
              </p>
            </div>
          </div>
        ))}

        {/* card 1 */}
        <div data-anim="cardtext" className="absolute" style={{ left: 430, top: 394, width: 339.73 }}>
          <p className="text-[40px] font-black uppercase leading-[40px]">Руководитель</p>
          <p className="text-[40px] font-black uppercase leading-[40px]">салона</p>
        </div>
        <div data-anim="cardtext" className="absolute" style={{ left: 430, top: 495, width: 305 }}>
          <p className="text-[17.6px] font-normal leading-[25px]">
            Хочешь <span className="font-extrabold">открыть новый салон</span>
          </p>
          <p className="text-[17.6px] font-normal leading-[25px]">или запустить дополнительные</p>
          <p className="text-[17.6px] font-normal leading-[25px]">направления</p>
        </div>

        {/* card 2 */}
        <div data-anim="cardtext" className="absolute" style={{ left: 1113, top: 314, width: 275 }}>
          <p className="text-[39.8px] font-black uppercase leading-[40px]">Проблема</p>
          <p className="text-[39.8px] font-black uppercase leading-[40px]">с рекламой</p>
        </div>
        <div data-anim="cardtext" className="absolute" style={{ left: 1113, top: 415, width: 175 }}>
          <p className="text-[17.9px] font-extrabold leading-[25px]">Сливаешь деньги</p>
          <p className="text-[17.9px] font-normal leading-[25px]">и не получаешь</p>
          <p className="text-[17.9px] font-normal leading-[25px]">заявки</p>
        </div>

        {/* card 3 */}
        <div data-anim="cardtext" className="absolute" style={{ left: 430, top: 680, width: 301.92 }}>
          <p className="text-[38.9px] font-black uppercase leading-[40px]">Уперся в</p>
          <p className="text-[38.9px] font-black uppercase leading-[40px]">финансовый</p>
          <p className="text-[38.9px] font-black uppercase leading-[40px]">потолок</p>
        </div>
        <div data-anim="cardtext" className="absolute" style={{ left: 430, top: 819, width: 215 }}>
          <p className="text-[17.7px] font-normal leading-[25px]">
            И не знаешь <span className="font-extrabold">как</span>
          </p>
          <p className="text-[17.7px] font-extrabold leading-[25px]">вырасти в деньгах</p>
        </div>

        {/* card 4 */}
        <div data-anim="cardtext" className="absolute" style={{ left: 912, top: 740, width: 333.89 }}>
          <p className="text-[38.6px] font-black uppercase leading-[40px]">Нет</p>
          <p className="text-[38.6px] font-black uppercase leading-[40px]">правильных</p>
          <p className="text-[38.6px] font-black uppercase leading-[40px]">инструментов</p>
        </div>
        <div data-anim="cardtext" className="absolute" style={{ left: 912, top: 879, width: 340 }}>
          <p className="text-[17.6px] font-normal leading-[25px]">
            Для кратного <span className="font-extrabold">роста и масштаба</span>
          </p>
          <p className="text-[17.6px] font-normal leading-[25px]">твоего бизнеса</p>
        </div>

        {/* CTA */}
        <CtaButton left={810} top={1049} />
        <div className="absolute text-center" style={{ left: 811, top: 1137, width: 298 }}>
          <p className="text-[15.1px] font-light leading-[21px] text-white/85">
            Оставляй заявку и получи файл <span className="font-extrabold text-white">топ 10</span>
          </p>
          <p className="text-[15.1px] font-extrabold leading-[21px] text-white">ошибок при найме сотрудников</p>
        </div>
      </div>
    </section>
  )
}
