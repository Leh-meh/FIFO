"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, Clock, ArrowRight } from "lucide-react"

export function Definition() {
  return (
    <section id="definition" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            O que é <span className="text-primary">FIFO</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            FIFO é um algoritmo de escalonamento que processa elementos na ordem exata em que chegaram
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 slide-in-left bg-card/50 backdrop-blur-sm border-primary/20 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Definição</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              FIFO (First In, First Out) é uma estrutura de dados e algoritmo de escalonamento onde o primeiro elemento
              a entrar é o primeiro a sair, funcionando como uma fila comum.
            </p>
          </Card>

          <Card className="p-8 slide-in-right bg-card/50 backdrop-blur-sm border-accent/20 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                <CheckCircle className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Características</h3>
            </div>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 text-primary mr-2" />
                Ordem cronológica preservada
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 text-primary mr-2" />
                Simples de implementar
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 text-primary mr-2" />
                Justo para todos os processos
              </li>
            </ul>
          </Card>
        </div>

        <div className="text-center scale-in">
          <Card className="inline-block p-8 bg-primary/10 border-primary/30 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h4 className="text-2xl font-semibold mb-4 text-primary">Analogia Simples</h4>
            <p className="text-lg text-foreground max-w-2xl">
              Imagine uma fila de banco: a primeira pessoa a chegar é a primeira a ser atendida. É exatamente assim que
              o FIFO funciona em sistemas operacionais!
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
