import { interLocal } from '../vadim/inter-local'

export function Footer() {
  return (
    <section
      className={`${interLocal.variable} relative w-full overflow-hidden bg-alabaster`}
      style={{ containerType: 'inline-size', aspectRatio: '1920 / 70' }}
    >
      <div
        className="absolute left-0 top-0 h-[70px] w-[1920px] origin-top-left font-[family-name:var(--font-inter-local)]"
        style={{ transform: 'scale(calc(100cqw / 1920px))' }}
      >
        <div className="flex w-full justify-center gap-[16px] overflow-hidden pb-[23.21px] pl-[40px] pr-[306px] pt-[25.2px]">
          <div className="w-[250px] shrink-0">
            <p className="text-[12.9px] font-normal leading-[18.9px] text-black">© Katty Crew. Все права защищены</p>
          </div>
          <div className="flex w-[1308px] shrink-0 flex-col items-center">
            <p className="text-[12.9px] font-normal leading-[18.9px] text-[#363636]">
              Политика в отношении обработки персональных данных
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
