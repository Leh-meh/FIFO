"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Equipe do projeto
  const team = [
    { name: "João Andrade", role: "RGM: 42207738", img: "/img-usuario.png" },
    { name: "Kawan Matias", role: "RGM: 43632777", img: "/img-usuario.png" },
    { name: "Leonardo Fernandes", role: "RGM: 43779166", img: "/img-usuario.png" },
    { name: "Letícia Medeiros", role: "RGM: 42400210", img: "/img-usuario.png" },
    { name: "Maria Eduarda", role: "RGM: 43453694", img: "/img-usuario.png" },
    { name: "Mirella Vitória", role: "RGM: 42305438", img: "/img-usuario.png" },
  ]

  return (
    <footer className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Título */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Nossa <span className="text-primary">Equipe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Pessoas que tornaram este projeto possível
          </p>
        </div>

        {/* Cards da equipe */}
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-16">

          {team.map((member, index) => (
           <Card
  key={index}
  className="p-4 text-center bg-card/50 backdrop-blur-sm border-primary/20 rounded-lg hover:scale-105 transition-transform duration-300 fade-in-up"
  style={{ animationDelay: `${index * 0.15}s` }}
>
  <img
    src={member.img}
    alt={member.name}
    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border border-primary"
  />
  <h3 className="text-lg font-medium mb-1">{member.name}</h3>
  <p className="text-sm text-muted-foreground">{member.role}</p>
</Card>

          ))}
        </div>

        {/* Rodapé com informações adicionais */}
       <div className="text-center space-y-6 fade-in-up">
  <p className="text-muted-foreground mb-4 text-sm">
    Projeto educativo sobre o algoritmo <span className="font-semibold">FIFO</span> em Sistemas Operacionais. <br />
    © 2025 Todos os direitos reservados.
  </p>
  <Button
    variant="ghost"
    onClick={scrollToTop}
    className="hover:bg-primary/10 transition-colors duration-200"
  >
    <ArrowUp className="h-4 w-4 mr-2" />
    Voltar ao Topo
  </Button>
</div>

      </div>
    </footer>
  )
}
