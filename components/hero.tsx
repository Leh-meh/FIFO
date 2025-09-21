"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Play } from "lucide-react"

export function Hero() {
  const scrollToDefinition = () => {
    document.getElementById("definition")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/30 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-accent/30 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-accent/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
            <span className="text-primary">FIFO</span>
            <br />
            <span className="text-foreground/80 text-4xl md:text-5xl font-normal">First In, First Out</span>
          </h1>
        </div>

        <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
            Descubra como funciona um dos algoritmos fundamentais em sistemas operacionais através de visualizações
            interativas e exemplos práticos
          </p>
        </div>

        <div
          className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ animationDelay: "0.4s" }}
        >
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90" onClick={scrollToDefinition}>
            <Play className="mr-2 h-5 w-5" />
            Começar Aprendizado
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10 bg-transparent"
            onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver Demonstração
          </Button>
        </div>

        <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
