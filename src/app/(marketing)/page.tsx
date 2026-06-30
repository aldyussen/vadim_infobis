import { Hero } from '@/components/sections/vadim/Hero'
import { Benefits } from '@/components/sections/vadim/Benefits'
import { Audience } from '@/components/sections/vadim/Audience'
import { Program } from '@/components/sections/vadim/Program'
import { Speaker } from '@/components/sections/vadim/Speaker'
import { Results } from '@/components/sections/vadim/Results'
import { Gallery } from '@/components/sections/vadim/Gallery'
import { Marquee } from '@/components/sections/vadim/Marquee'
import { FooterCta } from '@/components/sections/vadim/FooterCta'
import { ScrollSetup } from '@/components/sections/vadim/ScrollSetup'
import { LeadModalProvider } from '@/components/sections/vadim/LeadModal'
import { StickyCta } from '@/components/sections/vadim/StickyCta'

export default function Home() {
  return (
    <LeadModalProvider>
      <div id="top" className="bg-[#070707]">
        <ScrollSetup />
        <Hero />
        <Benefits />
        <Audience />
        <Program />
        <Speaker />
        <Results />
        <Gallery />
        <Marquee />
        <FooterCta />
        <StickyCta />
      </div>
    </LeadModalProvider>
  )
}
