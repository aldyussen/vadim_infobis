import { Hero } from '@/components/sections/ukolova/Hero'
import { BookGift } from '@/components/sections/ukolova/BookGift'
import { Benefits } from '@/components/sections/ukolova/Benefits'
import { Method } from '@/components/sections/ukolova/Method'
import { ClientResults } from '@/components/sections/ukolova/ClientResults'
import { MoreResults } from '@/components/sections/ukolova/MoreResults'
import { RegisterForm } from '@/components/sections/ukolova/RegisterForm'
import { Footer } from '@/components/sections/ukolova/Footer'
import { StickyCta } from '@/components/sections/vadim/StickyCta'
import { LeadModalProvider } from '@/components/sections/vadim/LeadModal'

export default function UkolovaPage() {
  return (
    <LeadModalProvider>
      <div id="top" className="bg-mine-shaft">
        <Hero />
        <BookGift />
        <Benefits />
        <Method />
        <ClientResults />
        <MoreResults />
        <RegisterForm />
        <Footer />
        <StickyCta />
      </div>
    </LeadModalProvider>
  )
}
