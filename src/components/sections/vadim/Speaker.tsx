'use client'

import Image from 'next/image'
import { interLocal } from './inter-local'
import { Arrow } from './Cta'
import { useLeadModal } from './LeadModal'

function Dot({ left, top }: { left: number; top: number }) {
  return <div className="absolute h-[5px] w-[5px] rounded-full bg-[#ba54c0]" style={{ left, top }} />
}

export function Speaker() {
  const { open } = useLeadModal()
  return (
    <section
      className={`${interLocal.variable} relative w-full overflow-hidden bg-[#070707]`}
      style={{ containerType: 'inline-size', aspectRatio: '1920 / 1075' }}
    >
      <div
        className="absolute left-0 top-0 h-[1075px] w-[1920px] origin-top-left font-[family-name:var(--font-inter-local)] text-white"
        style={{ transform: 'scale(calc(100cqw / 1920px))' }}
      >
        {/* speaker card (portrait + gradient baked in) */}
        <div className="absolute" style={{ left: 35, top: 135, width: 1850, height: 900 }}>
          <Image src="/images/section5/card.webp" alt="Вадим Innova" fill className="rounded-[45px] object-cover" sizes="1850px" />
        </div>

        {/* decorative top dots */}
        <div className="absolute flex flex-col items-center justify-between" style={{ left: 953, top: 61, width: 15, height: 61 }}>
          <span className="h-[13px] w-[13px] rounded-full bg-white/80" />
          <span className="h-[13px] w-[13px] rounded-full bg-white/40" />
          <span className="h-[13px] w-[13px] rounded-full bg-white/80" />
        </div>

        {/* heading */}
        <div className="absolute text-center" style={{ left: 927, top: 223, width: 496 }}>
          <p className="text-[115px] font-black uppercase leading-[178px] tracking-[5px]">Вадим</p>
        </div>
        <div className="absolute" style={{ left: 1016, top: 368, width: 464, height: 113.25 }}>
          <Image src="/images/section5/innova.webp" alt="INNOVA" fill className="object-contain" sizes="464px" />
        </div>

        {/* left: instagram badge + label */}
        <div className="absolute" style={{ left: 400, top: 623, width: 220 }}>
          <p className="text-[14.6px] font-light leading-[23px]">Спикер конференции</p>
        </div>
        <div className="absolute h-[10px] w-[10px] rounded-full bg-[#ff598e]" style={{ left: 380, top: 633 }} />
        <a
          href="https://www.instagram.com/vadim.innova/"
          target="_blank"
          rel="noreferrer"
          className="absolute block cursor-pointer transition-opacity hover:opacity-90"
          style={{ left: 370, top: 650, width: 356, height: 207.13 }}
        >
          <Image src="/images/section5/instagram.webp" alt="@vadim.innova" fill className="object-contain" sizes="356px" />
        </a>

        {/* achievements */}
        <Dot left={940} top={544} />
        <div className="absolute" style={{ left: 960, top: 533, width: 528 }}>
          <p className="text-[17.3px] font-light leading-[28px]">Серийный предприниматель, 13 лет в бизнесе</p>
        </div>

        <Dot left={940} top={580} />
        <div className="absolute" style={{ left: 960, top: 570, width: 528 }}>
          <p className="text-[17.7px] font-bold leading-[25px]">Сеть студий лазерной эпиляции «Персик», 17 точек в 8</p>
          <p className="text-[17.7px] font-bold leading-[25px]">городах Казахстана</p>
        </div>

        <Dot left={940} top={640} />
        <div className="absolute" style={{ left: 960, top: 630, width: 528 }}>
          <p className="text-[17.4px] font-light leading-[25px]">Основатель и представитель компании по продаже</p>
          <a
            href="https://innovatione-revada.kz/"
            target="_blank"
            rel="noreferrer"
            className="inline-block border-b border-[#4fb2ea] text-[17.7px] font-black leading-[25px] text-[#4fb2ea] transition-opacity hover:opacity-80"
          >
            оборудования Innovatione и Revada.kz
          </a>
        </div>

        <Dot left={940} top={701} />
        <div className="absolute" style={{ left: 960, top: 689, width: 528 }}>
          <p className="text-[17.2px] font-light leading-[28px]">Студия лазерной эпиляции LaserLike</p>
        </div>

        <Dot left={940} top={736} />
        <div className="absolute" style={{ left: 960, top: 724, width: 528 }}>
          <p className="text-[17.6px] font-light leading-[28px]">Наставник и ВИП Тренер проекта МОНСТА ММ</p>
        </div>

        <Dot left={940} top={771} />
        <div className="absolute" style={{ left: 960, top: 759, width: 528 }}>
          <p className="text-[17.7px] font-light leading-[28px]">
            В июле закрыли <span className="font-extrabold">рекордную выручку в 120 МЛН тенге</span>
          </p>
        </div>

        <Dot left={940} top={806} />
        <div className="absolute" style={{ left: 960, top: 794, width: 528 }}>
          <p className="text-[17.4px] font-light leading-[28px]">Успешно запустил франчайзинг 5 подписанных партнеров</p>
        </div>

        {/* CTA (single right arrow) */}
        <div className="absolute rounded-[10px] shadow-[25px_25px_55px_0px_rgba(0,0,0,0.4)]" style={{ left: 939, top: 855, width: 300, height: 75 }}>
          <Image src="/images/section1/button.webp" alt="" fill className="rounded-[10px] object-cover" sizes="300px" />
        </div>
        <button
          type="button"
          onClick={open}
          aria-label="Оставить заявку"
          className="absolute z-20 cursor-pointer rounded-[10px] transition-colors duration-200 hover:bg-white/10 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          style={{ left: 939, top: 855, width: 300, height: 75 }}
        />
        <div className="absolute text-center" style={{ left: 965, top: 882, width: 246 }}>
          <p className="text-[15.9px] font-extrabold leading-[22px] text-white">ОСТАВИТЬ ЗАЯВКУ</p>
        </div>
        <div className="absolute" style={{ left: 1289, top: 883 }}>
          <Arrow />
        </div>
      </div>
    </section>
  )
}
