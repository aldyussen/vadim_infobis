'use client'

import Image from 'next/image'
import { interLocal } from '../vadim/inter-local'
import { useLeadModal } from '../vadim/LeadModal'

export function BookGift() {
  const { open } = useLeadModal()

  return (
    <section
      className={`${interLocal.variable} relative w-full overflow-hidden bg-alabaster`}
      style={{ containerType: 'inline-size', aspectRatio: '1920 / 720' }}
    >
      <div
        className="absolute left-0 top-0 h-[720px] w-[1920px] origin-top-left font-[family-name:var(--font-inter-local)] text-black"
        style={{ transform: 'scale(calc(100cqw / 1920px))' }}
      >
        {/* book mockup */}
        <div className="absolute" style={{ left: -20.8, top: 6.39, width: 804.8, height: 777.59 }}>
          <Image src="/images/ukolova/book/book.webp" alt="Книга Екатерины Уколовой" fill className="object-contain" sizes="805px" />
        </div>

        {/* heading */}
        <div className="absolute flex flex-col gap-[24.6px]" style={{ left: 702.39, top: 128.3, width: 1020.8 }}>
          <p className="text-[34px] font-bold leading-[41px]">
            <span className="text-mongoose">Каждому участнику тренинга</span> в
          </p>
          <p className="text-[34px] font-bold leading-[41px]">подарок новая книга Екатерины</p>
          <p className="text-[34px] font-bold leading-[41px]">Уколовой</p>
        </div>

        {/* price */}
        <div className="absolute" style={{ left: 704, top: 339.8, width: 324.8 }}>
          <p className="text-[16px] font-normal leading-[25px]">Стоимость книги:</p>
        </div>
        <div className="absolute opacity-70" style={{ left: 718.39, top: 389.69, width: 129.59 }}>
          <p className="text-[35px] font-bold leading-[35px]">20$</p>
        </div>
        <div className="absolute flex h-[65.331px] w-[127.2px] items-center justify-center" style={{ left: 692.8, top: 372.92 }}>
          <div className="-rotate-[26deg]">
            <div className="h-[4.8px] bg-brand-red" style={{ width: 139.19 }} />
          </div>
        </div>
        <div className="absolute" style={{ left: 867.19, top: 396.39, width: 230.39 }}>
          <p className="text-[22px] font-bold leading-[22px] text-brand-red">БЕСПЛАТНО</p>
        </div>

        {/* CTA → modal */}
        <button
          type="button"
          onClick={open}
          aria-label="Принять участие"
          className="absolute flex items-center justify-center rounded-[10px] bg-mongoose uppercase text-white shadow-[0px_5px_0px_0px_rgba(156,118,87,0.9)] transition hover:brightness-105 active:translate-y-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          style={{ left: 705.59, top: 473.59, width: 662.39, height: 182.39 }}
        >
          <span className="text-[23px] font-semibold leading-[35.65px]">ПРИНЯТЬ УЧАСТИЕ</span>
        </button>
      </div>
    </section>
  )
}
