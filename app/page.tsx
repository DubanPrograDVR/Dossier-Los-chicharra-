"use client"

import { Grain } from "@/components/grain"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { BandSection } from "@/components/band-section"
import { MusicSection } from "@/components/music-section"
import { IdentitySection } from "@/components/identity-section"
import { ActivitiesSection } from "@/components/activities-section"
import { SocialSection } from "@/components/social-section"
import { SiteFooter } from "@/components/site-footer"
import { DossierButton } from "@/components/dossier-button"
import { useReveal } from "@/hooks/use-reveal"

export default function Page() {
  useReveal()

  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <BandSection />
        <MusicSection />
        <IdentitySection />
        <ActivitiesSection />
        <SocialSection />
      </main>
      <SiteFooter />
      <DossierButton />
    </>
  )
}
