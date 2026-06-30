import Image from 'next/image'
import { interLocal } from './inter-local'
import { CtaButton } from './Cta'

const GRID = [199, 398, 597, 796, 995, 1194, 1393, 1592, 1791]

type Seg = { t: string; b?: boolean }
type Bullet = { top: number; w: number; fs: number; lines: Seg[][] }

const DAY1: Bullet[] = [
  { top: 584, w: 364, fs: 17.3, lines: [[{ t: 'Лидер. Харизма.', b: true }, { t: ' Пример для команды;' }]] },
  { top: 619, w: 386, fs: 17.2, lines: [[{ t: 'Структура салона красоты.', b: true }, { t: ' Роли и задачи;' }]] },
  { top: 654, w: 408, fs: 17.4, lines: [[{ t: 'Найм сотрудников', b: true }, { t: ' и где их искать;' }]] },
  { top: 689, w: 408, fs: 17.4, lines: [[{ t: 'Как нанимать людей', b: true }, { t: ' быстро и качественно;' }]] },
  { top: 725, w: 408, fs: 17.7, lines: [[{ t: 'Мотивация сотрудников.', b: true }], [{ t: 'Как нанимать в долгую;' }]] },
  { top: 784, w: 408, fs: 17.4, lines: [[{ t: 'Участие сотрудников в маркетинге салона;' }]] },
  { top: 820, w: 408, fs: 17.7, lines: [[{ t: 'Администратор в салоне красоты – ', b: true }, { t: 'кто он и' }], [{ t: 'как с ним работать;' }]] },
  { top: 879, w: 408, fs: 17.6, lines: [[{ t: 'Системы и схемы продаж', b: true }, { t: ' в салоне красоты;' }]] },
  { top: 914, w: 408, fs: 17.4, lines: [[{ t: 'Отдел продаж – это отдельный организм;' }]] },
  { top: 949, w: 408, fs: 17.2, lines: [[{ t: 'Система мотивации для ОП и Админа;' }]] },
  { top: 985, w: 408, fs: 17.4, lines: [[{ t: 'Как избежать ' }, { t: 'ВОРОВСТВА и КОНКУРЕНЦИИ', b: true }], [{ t: 'от сотрудников?' }]] },
  { top: 1044, w: 408, fs: 17.6, lines: [[{ t: 'Работаем над ' }, { t: 'сервисом и репутацией;', b: true }]] },
  { top: 1079, w: 408, fs: 17.3, lines: [[{ t: 'Внедряем систему учета, разбираем функции.' }]] },
]

const DAY2: Bullet[] = [
  { top: 584, w: 364, fs: 17.7, lines: [[{ t: 'Выжимаем апельсин – работаем ', b: true }, { t: 'с' }], [{ t: 'базой и доп продажами;' }]] },
  { top: 645, w: 364, fs: 17.4, lines: [[{ t: 'Конкурентный анализ', b: true }, { t: ' как постоянный' }], [{ t: 'процесс для улучшения продукта;' }]] },
  { top: 705, w: 364, fs: 17.3, lines: [[{ t: 'Ваше УТП', b: true }, { t: ' – упражнение как достать самое' }], [{ t: 'ключевое;' }]] },
  { top: 765, w: 415, fs: 17.3, lines: [[{ t: 'Как искать ' }, { t: 'таргетолога', b: true }, { t: ' и его контролировать;' }]] },
  { top: 800, w: 415, fs: 17, lines: [[{ t: 'Как считать эффективность рекламы;' }]] },
  { top: 835, w: 415, fs: 17.4, lines: [[{ t: 'Как получать ' }, { t: 'дешевые заявки и много,', b: true }, { t: ' какие' }], [{ t: 'инструменты сейчас в тренде?' }]] },
  { top: 895, w: 415, fs: 17.7, lines: [[{ t: 'Определяем этап, при котором конверсия в' }], [{ t: 'продажу кратно увеличится;' }]] },
  { top: 955, w: 415, fs: 17, lines: [[{ t: 'Постановка плана продаж;' }]] },
  { top: 990, w: 415, fs: 17.4, lines: [[{ t: 'Финансовый учет', b: true }, { t: ' (рентабельность, какие' }], [{ t: 'показатели должны быть)' }]] },
  { top: 1050, w: 415, fs: 17.4, lines: [[{ t: 'Как не бояться делегировать;' }]] },
  { top: 1085, w: 401, fs: 17.6, lines: [[{ t: 'Как построить сеть из 15+ филиалов.', b: true }], [{ t: 'Основы масштабирования через Франшизу.' }], [{ t: 'Подводные камни и риски;' }]] },
  { top: 1170, w: 401, fs: 17.4, lines: [[{ t: 'Как начать получать удовольствие от своей' }], [{ t: 'работы и жить счастливой жизнью' }], [{ t: '(работа с мышлением)' }]] },
]

function BulletList({ items, textLeft }: { items: Bullet[]; textLeft: number }) {
  return (
    <>
      {items.map((b) => (
        <div key={b.top}>
          <div
            className="absolute h-[5px] w-[5px] rounded-full bg-[#ba54c0]"
            style={{ left: textLeft - 20, top: b.top + 11 }}
          />
          <div className="absolute" style={{ left: textLeft, top: b.top, width: b.w }}>
            {b.lines.map((line, i) => (
              <p key={i} className="leading-[25px]" style={{ fontSize: b.fs }}>
                {line.map((s, j) => (
                  <span key={j} className={s.b ? 'font-extrabold' : 'font-light'}>
                    {s.t}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export function Program() {
  return (
    <section
      className={`${interLocal.variable} relative w-full overflow-hidden bg-[#070707]`}
      style={{ containerType: 'inline-size', aspectRatio: '1920 / 1400' }}
    >
      <div
        className="absolute left-0 top-0 h-[1400px] w-[1920px] origin-top-left font-[family-name:var(--font-inter-local)] text-white"
        style={{ transform: 'scale(calc(100cqw / 1920px))' }}
      >
        <Image src="/images/section4/bg.jpg" alt="" fill className="object-cover" sizes="1920px" />
        {GRID.map((x) => (
          <div key={x} className="absolute top-0 h-[1400px] w-px bg-white opacity-5" style={{ left: x }} />
        ))}

        {/* heading */}
        <div className="absolute text-center" style={{ left: 712, top: 92, width: 496 }}>
          <p className="text-[64.4px] font-black uppercase leading-[101px]">Программа</p>
        </div>

        {/* day 1 */}
        <div className="absolute" style={{ left: 380, top: 245, width: 560, height: 230 }}>
          <Image src="/images/section4/day1head.webp" alt="" fill className="object-contain" sizes="560px" />
        </div>
        <div className="absolute" style={{ left: 380, top: 535, width: 560, height: 620 }}>
          <Image src="/images/section4/day1list.webp" alt="" fill className="object-contain" sizes="560px" />
        </div>
        {/* TODO: уточнить официальное название дня у клиента; тема выведена из пунктов (команда, найм, продажи, сервис) */}
        <div className="absolute" style={{ left: 418, top: 275, width: 306 }}>
          <p className="text-[43.8px] font-black uppercase leading-[47px]">Команда</p>
          <p className="text-[43.8px] font-black uppercase leading-[47px]">и продажи</p>
        </div>
        <div className="absolute" style={{ left: 654, top: 354, width: 210, height: 120.42 }}>
          <Image src="/images/section4/icon1.webp" alt="" fill className="object-contain" sizes="210px" />
        </div>
        <div className="absolute" style={{ left: 360, top: 402, width: 280, height: 170.02 }}>
          <Image src="/images/section4/tag1.webp" alt="" fill className="object-contain" sizes="280px" />
        </div>
        <BulletList items={DAY1} textLeft={450} />

        {/* day 2 */}
        <div className="absolute" style={{ left: 980, top: 245, width: 560, height: 230 }}>
          <Image src="/images/section4/day2head.webp" alt="" fill className="object-contain" sizes="560px" />
        </div>
        <div className="absolute" style={{ left: 980, top: 535, width: 560, height: 766 }}>
          <Image src="/images/section4/day2list.webp" alt="" fill className="object-contain" sizes="560px" />
        </div>
        {/* TODO: уточнить официальное название дня у клиента; тема выведена из пунктов (маркетинг, реклама, финансы, масштабирование) */}
        <div className="absolute" style={{ left: 1018, top: 275, width: 306 }}>
          <p className="text-[43.8px] font-black uppercase leading-[47px]">Маркетинг</p>
          <p className="text-[43.8px] font-black uppercase leading-[47px]">и масштаб</p>
        </div>
        <div className="absolute" style={{ left: 1194, top: 358, width: 188, height: 114.47 }}>
          <Image src="/images/section4/icon2.webp" alt="" fill className="object-contain" sizes="188px" />
        </div>
        <div className="absolute" style={{ left: 960, top: 402, width: 280, height: 170 }}>
          <Image src="/images/section4/tag2.webp" alt="" fill className="object-contain" sizes="280px" />
        </div>
        <BulletList items={DAY2} textLeft={1050} />

        {/* CTA */}
        <CtaButton left={511} top={1225} />
      </div>
    </section>
  )
}
