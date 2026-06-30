'use client'

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'

type ModalState = 'idle' | 'loading' | 'success'

const LeadModalContext = createContext<{ open: () => void } | null>(null)

export function useLeadModal() {
  const ctx = useContext(LeadModalContext)
  if (!ctx) throw new Error('useLeadModal must be used inside <LeadModalProvider>')
  return ctx
}

// +7 (7XX) XXX-XX-XX
function maskKzPhone(raw: string): string {
  let d = raw.replace(/\D/g, '')
  if (d.startsWith('8')) d = '7' + d.slice(1)
  if (!d.startsWith('7')) d = '7' + d
  d = d.slice(0, 11)
  const a = d.slice(1, 4)
  const b = d.slice(4, 7)
  const c = d.slice(7, 9)
  const e = d.slice(9, 11)
  let out = '+7'
  if (a) out += ` (${a}`
  if (a.length === 3) out += ')'
  if (b) out += ` ${b}`
  if (c) out += `-${c}`
  if (e) out += `-${e}`
  return out
}

export function LeadModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [state, setState] = useState<ModalState>('idle')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const dialogRef = useRef<HTMLDivElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)

  const open = useCallback(() => {
    lastFocused.current = document.activeElement as HTMLElement
    setState('idle')
    setError('')
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    lastFocused.current?.focus?.()
  }, [])

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    dialogRef.current?.querySelector<HTMLElement>('input,button')?.focus()
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, close])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (name.trim().length < 2) return setError('Введите имя')
    if (phone.replace(/\D/g, '').length < 11) return setError('Введите номер телефона')
    setError('')
    setState('loading')
    // TODO: подключить реальный endpoint отправки заявки
    console.log('lead submit', { name, phone })
    await new Promise((r) => setTimeout(r, 900))
    setState('success')
  }

  return (
    <LeadModalContext.Provider value={{ open }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Оставить заявку"
        >
          <button aria-label="Закрыть" className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm" onClick={close} />
          <div
            ref={dialogRef}
            className="relative z-10 w-full max-w-[440px] rounded-2xl bg-[#141418] p-7 text-white shadow-2xl sm:p-9"
          >
            <button
              aria-label="Закрыть"
              onClick={close}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              ✕
            </button>

            {state === 'success' ? (
              <div className="py-4 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff598e]/15 text-3xl">🎉</div>
                <h3 className="mb-2 text-2xl font-extrabold">Спасибо, мы свяжемся</h3>
                <p className="mb-6 text-sm text-white/60">Менеджер перезвонит и подтвердит участие в интенсиве.</p>
                <ul className="space-y-2 rounded-xl bg-white/5 p-4 text-left text-sm">
                  <li className="flex items-center gap-3">
                    <span className="text-[#ff598e]">★</span> +1 билет в подарок
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#ff598e]">★</span> Файл «Топ-10 ошибок при найме сотрудников»
                  </li>
                </ul>
                <button onClick={close} className="mt-6 h-12 w-full rounded-xl bg-white/10 font-semibold transition hover:bg-white/15">
                  Закрыть
                </button>
              </div>
            ) : (
              <>
                <h3 className="mb-1 text-2xl font-extrabold uppercase">Оставить заявку</h3>
                <p className="mb-6 text-sm text-white/55">Оставьте контакты — пришлём детали и бонусы интенсива.</p>
                <form onSubmit={onSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="lead-name" className="mb-1.5 block text-[13px] text-white/50">
                      Ваше имя
                    </label>
                    <input
                      id="lead-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Имя"
                      className="h-[54px] w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-[15px] outline-none transition focus:border-[#ff598e] focus:ring-2 focus:ring-[#ff598e]/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="lead-phone" className="mb-1.5 block text-[13px] text-white/50">
                      Телефон
                    </label>
                    <input
                      id="lead-phone"
                      type="tel"
                      inputMode="tel"
                      value={phone}
                      onChange={(e) => setPhone(maskKzPhone(e.target.value))}
                      onFocus={() => !phone && setPhone('+7 (7')}
                      placeholder="+7 (7__) ___-__-__"
                      className="h-[54px] w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-[15px] outline-none transition focus:border-[#ff598e] focus:ring-2 focus:ring-[#ff598e]/30"
                    />
                  </div>
                  {error && <p className="text-xs text-[#ff598e]">{error}</p>}
                  <button
                    type="submit"
                    disabled={state === 'loading'}
                    className="h-[56px] w-full rounded-xl bg-gradient-to-r from-[#ff598e] to-[#7f50ea] text-[15px] font-bold uppercase tracking-wide text-white transition hover:brightness-110 active:scale-[0.99] disabled:opacity-70"
                  >
                    {state === 'loading' ? 'Отправляем…' : 'Отправить заявку'}
                  </button>
                  <p className="text-center text-[11px] text-white/35">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </LeadModalContext.Provider>
  )
}
