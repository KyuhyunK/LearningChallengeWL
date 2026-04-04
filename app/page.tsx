import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { LiftProgress } from "@/components/lift-progress"
import { Reflections } from "@/components/reflections"
import { Documentary } from "@/components/documentary"
import { Future } from "@/components/future"
import { Footer } from "@/components/footer"

export default function LearningChallengePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <LiftProgress />
      <Reflections />
      <Documentary />
      <Future />
      <Footer />
    </main>
  )
}
