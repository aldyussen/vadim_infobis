'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { interLocal } from '../vadim/inter-local'

export function Method() {
  const [zoom, setZoom] = useState(false)

  useEffect(() => {
    if (!zoom) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setZoom(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [zoom])

  return (
    <section
      className={`${interLocal.variable} relative w-full overflow-hidden bg-alabaster`}
      style={{ containerType: 'inline-size', aspectRatio: '1920 / 1344' }}
    >
      <div
        className="absolute left-0 top-0 h-[1344px] w-[1920px] origin-top-left font-[family-name:var(--font-inter-local)]"
        style={{ transform: 'scale(calc(100cqw / 1920px))' }}
      >
        {/* heading */}
        <div className="absolute flex flex-col items-center gap-[16px] text-center" style={{ left: 220, top: 96, width: 1484.8 }}>
          <p className="text-[50px] font-black uppercase leading-[54px] tracking-[-0.5px]">
            <span className="text-[#171717]">Метод Уколовой из 8 шагов </span>
            <span className="text-mongoose">х2 увеличения</span>
          </p>
          <p className="text-[50px] font-black uppercase leading-[54px] tracking-[-0.5px]">
            <span className="text-mongoose">личной прибыли</span>
            <span className="text-[#171717]"> в бизнесе</span>
          </p>
        </div>

        {/* subtitle */}
        <div className="absolute text-center" style={{ left: 281.59, top: 278, width: 1356.8 }}>
          <p className="text-[23px] font-normal leading-[33px] text-cod-gray/80">
            Метод работает как с компаниями №1 на рынке, так и на малом и среднем бизнесе
          </p>
        </div>

        {/* infographic — click to enlarge */}
        <button
          type="button"
          onClick={() => setZoom(true)}
          aria-label="Увеличить схему метода"
          className="group absolute overflow-hidden rounded-[10px] focus:outline-none focus-visible:ring-2 focus-visible:ring-mongoose"
          style={{ left: 91.19, top: 345.59, width: 1737.59, height: 974.39 }}
        >
          <Image src="/images/ukolova/method/infographic.webp" alt="Метод Уколовой из 8 шагов — схема" fill className="object-cover transition duration-300 group-hover:scale-[1.01]" sizes="1738px" />
        </button>

        {/* enlarge button */}
        <button
          type="button"
          onClick={() => setZoom(true)}
          className="absolute flex items-center justify-center rounded-[30px] bg-white transition hover:bg-white/90"
          style={{ left: 1361.59, top: 1147.19, width: 396.8, height: 88 }}
        >
          <span className="text-[14px] font-semibold leading-[21.7px] text-[#ff0000]">Нажмите, чтобы увеличить</span>
        </button>
      </div>

      {/* lightbox */}
      {zoom && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Схема метода">
          <button aria-label="Закрыть" className="absolute inset-0 cursor-default bg-black/85 backdrop-blur-sm" onClick={() => setZoom(false)} />
          <button
            aria-label="Закрыть"
            onClick={() => setZoom(false)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full text-2xl text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            ✕
          </button>
          <div className="relative z-0 aspect-[1738/974] w-full max-w-[1400px]">
            <Image src="/images/ukolova/method/infographic.webp" alt="Метод Уколовой из 8 шагов — схема" fill className="rounded-xl object-contain" sizes="1400px" />
          </div>
        </div>
      )}
    </section>
  )
}
