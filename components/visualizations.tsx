"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight, Users, Printer, HardDrive } from "lucide-react"

export function Visualizations() {
  const scenarios = [
    {
      icon: Users,
      title: "Fila de Processos",
      description: "Processos aguardando execução na CPU",
      items: ["Processo A (10ms)", "Processo B (5ms)", "Processo C (15ms)", "Processo D (8ms)"],
      color: "primary",
    },
    {
      icon: Printer,
      title: "Fila de Impressão",
      description: "Documentos aguardando para serem impressos",
      items: ["Relatório.pdf", "Apresentação.pptx", "Planilha.xlsx", "Imagem.jpg"],
      color: "accent",
    },
    {
      icon: HardDrive,
      title: "Buffer de I/O",
      description: "Dados aguardando operações de entrada/saída",
      items: ["Bloco 1 (4KB)", "Bloco 2 (4KB)", "Bloco 3 (4KB)", "Bloco 4 (4KB)"],
      color: "chart-3",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Visualizações <span className="text-primary">Práticas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Veja como o FIFO funciona em diferentes cenários de sistemas operacionais
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <Card
              key={scenario.title}
              className={`p-6 bg-card/50 backdrop-blur-sm border-${scenario.color}/20 scale-in transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-${scenario.color}/20 rounded-full flex items-center justify-center mr-4`}>
                  <scenario.icon className={`h-6 w-6 text-${scenario.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{scenario.title}</h3>
                  <p className="text-sm text-muted-foreground">{scenario.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                {scenario.items.map((item, itemIndex) => (
                  <div
                    key={item}
                    className={`
                      p-3 rounded-lg border transition-all duration-300
                      ${
                        itemIndex === 0
                          ? `bg-${scenario.color}/10 border-${scenario.color}/30`
                          : "bg-secondary/30 border-secondary/50"
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{item}</span>
                      {itemIndex === 0 && (
                        <div className="flex items-center text-xs text-primary">
                          <span className="mr-1">PRÓXIMO</span>
                          <ArrowRight className="h-3 w-3" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-xs text-muted-foreground text-center">
                Ordem de processamento: 1 → 2 → 3 → 4
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
