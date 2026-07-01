'use client'

import { useState } from 'react'
import Image from 'next/image'
import { interLocal } from '../vadim/inter-local'

function maskUsPhone(raw: string): string {
  const d = raw.replace(/\D/g, '').slice(0, 10)
  const a = d.slice(0, 3)
  const b = d.slice(3, 6)
  const c = d.slice(6, 10)
  let out = ''
  if (a) out += `(${a}`
  if (a.length === 3) out += ') '
  if (b) out += b
  if (c) out += `-${c}`
  return out
}

const inputCls =
  'h-[75px] w-full rounded-[10px] border-2 border-white bg-white px-[21px] text-[17px] text-black outline-none transition placeholder:text-black/40 focus:border-mongoose focus:ring-4 focus:ring-mongoose/30'
const labelCls = 'block pb-[6px] pr-[10px] text-[15px] font-medium text-concrete'

export function RegisterForm() {
  const [phone, setPhone] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <section
      className={`${interLocal.variable} relative w-full overflow-hidden bg-alabaster`}
      style={{ containerType: 'inline-size', aspectRatio: '1920 / 1360' }}
    >
      <div
        className="absolute left-0 top-0 h-[1360px] w-[1920px] origin-top-left font-[family-name:var(--font-inter-local)] text-white"
        style={{ transform: 'scale(calc(100cqw / 1920px))' }}
      >
        {/* dark card */}
        <div className="absolute rounded-[30px] bg-mine-shaft shadow-[0px_0px_15px_7px_rgba(110,118,116,0.4)]" style={{ left: 360, top: 57, width: 1200, height: 1285 }} />

        {/* portrait */}
        <div className="absolute" style={{ left: 950, top: 486, width: 684, height: 862 }}>
          <Image src="/images/ukolova/register/portrait.webp" alt="Екатерина Уколова" fill className="object-contain object-bottom" sizes="684px" />
        </div>

        {/* heading */}
        <div className="absolute" style={{ left: 425, top: 108, width: 1088 }}>
          <p className="text-[64px] font-black uppercase leading-[76px] tracking-[-1px]">РЕГИСТРИРУЙТЕСЬ</p>
          <p className="text-[64px] font-black uppercase leading-[76px] tracking-[-1px]">
            на <span className="text-tan">закрытый тренинг</span>
          </p>
        </div>

        {/* form */}
        <div className="absolute" style={{ left: 420, top: 311, width: 649 }}>
          {sent ? (
            <div className="flex h-[600px] flex-col items-center justify-center rounded-[10px] bg-white/5 p-10 text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-mongoose/20 text-3xl">✓</div>
              <p className="mb-2 text-[28px] font-bold">Спасибо, мы свяжемся</p>
              <p className="max-w-sm text-[16px] text-white/60">Ждём вас на прямом эфире. Книга в подарок — уже ваша.</p>
            </div>
          ) : (
            <form
              className="flex flex-col gap-[10px]"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <div>
                <label htmlFor="uk-name" className={labelCls}>Введите Ваше имя</label>
                <input id="uk-name" required className={inputCls} placeholder="Введите ваше имя" />
              </div>
              <div>
                <label htmlFor="uk-email" className={labelCls}>Ваша почта</label>
                <input id="uk-email" type="email" required className={inputCls} placeholder="e-mail" />
              </div>
              <div>
                <label htmlFor="uk-phone" className={labelCls}>Напишите номер WhatsApp</label>
                <div className="flex h-[75px] items-center gap-[6px] rounded-[10px] border border-white bg-white px-[21px]">
                  <span className="h-[13px] w-[18px] rounded-[1px] bg-[#c5c5c5] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.3)]" aria-hidden />
                  <span className="text-[16px] text-black">+1</span>
                  <span className="mr-1 inline-block h-[5px] w-0 border-x-[4px] border-t-[6px] border-x-transparent border-t-[#9a9a9a]" aria-hidden />
                  <input
                    id="uk-phone"
                    type="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(maskUsPhone(e.target.value))}
                    className="h-full flex-1 bg-transparent text-[16px] text-black outline-none placeholder:text-black/50"
                    placeholder="(000) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="uk-role" className={labelCls}>Ваша роль в компании?</label>
                <select id="uk-role" required defaultValue="" className={`${inputCls} appearance-none`}>
                  <option value="" disabled>Укажите вашу роль</option>
                  <option>Владелец бизнеса</option>
                  <option>Руководитель</option>
                  <option>Топ-менеджер</option>
                  <option>Самозанятый / эксперт</option>
                </select>
              </div>
              <div>
                <label htmlFor="uk-rev" className={labelCls}>Ваш оборот ($ / мес)</label>
                <select id="uk-rev" required defaultValue="" className={`${inputCls} appearance-none`}>
                  <option value="" disabled>Укажите ваш оборот</option>
                  <option>до $10 000</option>
                  <option>$10 000 – $50 000</option>
                  <option>$50 000 – $250 000</option>
                  <option>от $250 000</option>
                </select>
              </div>
              <div className="flex flex-col items-center pt-[15px]">
                <button
                  type="submit"
                  className="group flex h-[120px] w-[400px] items-center justify-center gap-3 rounded-[12px] bg-gradient-to-b from-[#d0b491] to-[#b8946f] px-[15px] text-[23px] font-extrabold uppercase text-white shadow-[0px_10px_30px_-6px_rgba(156,118,87,0.6)] transition-all duration-300 hover:from-[#d8bd9b] hover:to-[#bf9b75] active:translate-y-[2px]"
                >
                  Зарегистрироваться
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* footer note + date */}
        <div className="absolute" style={{ left: 416, top: 1241.5, width: 560 }}>
          <p className="text-[20px] font-normal leading-[26px]">Всех жду на прямом эфире!</p>
        </div>
        <div className="absolute" style={{ left: 419, top: 1264, width: 817 }}>
          <p className="text-[38.1px] font-bold leading-[64px]">пн, 29 июня | 17:15 мск</p>
        </div>

        {/* book gift badge */}
        <div className="absolute" style={{ left: 1263, top: 75, width: 293, height: 282.97 }}>
          <Image src="/images/ukolova/register/book.webp" alt="Книга Екатерины Уколовой в подарок" fill className="object-contain" sizes="293px" />
        </div>
        <div className="absolute" style={{ left: 1265, top: 314, width: 279 }}>
          <p className="text-[15.5px] font-normal leading-[26px]">Новая книга Екатерины</p>
          <p className="text-[15.5px] font-normal leading-[26px]">в подарок при регистрации</p>
        </div>
        <div className="absolute opacity-70" style={{ left: 1270, top: 454, width: 81 }}>
          <p className="text-[35px] font-bold leading-[54px]">20$</p>
        </div>
        <div className="absolute flex h-[40.835px] w-[79.51px] items-center justify-center" style={{ left: 1254, top: 434.08 }}>
          <div className="-rotate-[26deg]">
            <div className="h-[3px] bg-brand-red" style={{ width: 87 }} />
          </div>
        </div>
        <div className="absolute" style={{ left: 1363, top: 445, width: 144 }}>
          <p className="text-[21px] font-bold leading-[22px] text-red-orange">БЕСПЛАТНО</p>
        </div>
      </div>
    </section>
  )
}
