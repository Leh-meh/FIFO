import { Hero } from "@/components/hero"
import { Definition } from "@/components/definition"
import { InteractiveDemo } from "@/components/interactive-demo"
import { Examples } from "@/components/examples"
import { UseCases } from "@/components/use-cases"
import { Visualizations } from "@/components/visualizations"
import { Footer } from "@/components/footer"
import { ScrollAnimations } from "@/components/scroll-animations"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollAnimations />
      <Hero />
      <Definition />
      <InteractiveDemo />
      <Visualizations />
      <Examples />
      <UseCases />
      <Footer />
    </main>
  )
}
