"use client"

import { Card } from "@/components/ui/card"
import { Monitor, Printer, HardDrive, Network, Cpu, MemoryStick as Memory, CheckCircle, XCircle } from "lucide-react"

export function UseCases() {
  const useCases = [
    {
      icon: Cpu,
      title: "Escalonamento de Processos",
      description: "FCFS (First-Come, First-Served) para CPU",
      advantages: ["Simples de implementar", "Justo para todos os processos", "Sem starvation"],
      disadvantages: ["Pode causar convoy effect", "Tempo médio de espera alto"],
      example: "Sistema batch onde processos são executados na ordem de chegada",
    },
    {
      icon: Printer,
      title: "Spooling de Impressão",
      description: "Fila de documentos para impressoras",
      advantages: ["Ordem preservada", "Fácil gerenciamento", "Transparente ao usuário"],
      disadvantages: ["Documentos urgentes podem esperar", "Sem priorização"],
      example: "Sistema de impressão em rede onde documentos são processados em ordem",
    },
    {
      icon: HardDrive,
      title: "Buffers de I/O",
      description: "Armazenamento temporário de dados",
      advantages: ["Sincronização simples", "Preserva ordem dos dados", "Eficiente para streams"],
      disadvantages: ["Latência para dados urgentes", "Tamanho fixo do buffer"],
      example: "Buffer de leitura de arquivos onde dados são processados sequencialmente",
    },
    {
      icon: Network,
      title: "Filas de Rede",
      description: "Processamento de pacotes em roteadores",
      advantages: ["Ordem de chegada mantida", "Implementação simples", "Baixo overhead"],
      disadvantages: ["Sem QoS", "Pode causar congestionamento"],
      example: "Roteador básico processando pacotes na ordem de chegada",
    },
    {
      icon: Memory,
      title: "Gerenciamento de Memória",
      description: "Alocação de páginas em sistemas paginados",
      advantages: ["Algoritmo determinístico", "Fácil de implementar", "Comportamento previsível"],
      disadvantages: ["Não considera localidade", "Performance subótima"],
      example: "Sistema de paginação onde páginas são substituídas por ordem de carregamento",
    },
    {
      icon: Monitor,
      title: "Interface de Usuário",
      description: "Fila de eventos em sistemas gráficos",
      advantages: ["Eventos processados em ordem", "Consistência temporal", "Simples de debugar"],
      disadvantages: ["Pode causar lag em interfaces", "Sem priorização de eventos"],
      example: "Sistema de janelas processando cliques e teclas em ordem cronológica",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Casos de <span className="text-primary">Uso</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Aplicações práticas do FIFO em diferentes componentes de sistemas operacionais
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <Card
              key={useCase.title}
              className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 scale-in transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <useCase.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground text-sm">{useCase.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-400 mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Vantagens
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {useCase.advantages.map((advantage, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-400 mb-2 flex items-center">
                    <XCircle className="h-4 w-4 mr-2" />
                    Desvantagens
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {useCase.disadvantages.map((disadvantage, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-1 h-1 bg-red-400 rounded-full mr-2"></div>
                        {disadvantage}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-accent mb-2">Exemplo Prático</h4>
                  <p className="text-sm text-muted-foreground italic">{useCase.example}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
