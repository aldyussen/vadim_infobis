'use client'

import { interLocal } from '../vadim/inter-local'
import { useLeadModal } from '../vadim/LeadModal'

export function MoreResults() {
  const { open } = useLeadModal()

  return (
    <section
      className={`${interLocal.variable} relative w-full overflow-hidden bg-alabaster`}
      style={{ containerType: 'inline-size', aspectRatio: '1920 / 140' }}
    >
      <div
        className="absolute left-0 top-0 h-[140px] w-[1920px] origin-top-left font-[family-name:var(--font-inter-local)]"
        style={{ transform: 'scale(calc(100cqw / 1920px))' }}
      >
        <div className="flex h-full flex-col pb-[60px]">
          <div className="flex justify-center px-[20px]">
            <button
              type="button"
              onClick={open}
              className="flex items-center justify-center overflow-hidden bg-mongoose px-[80px] py-[21.8px] transition hover:brightness-105 active:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <span className="text-[24.4px] font-semibold leading-[36.4px] text-white">Показать еще результаты моих клиентов</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
