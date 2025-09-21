"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Plus, Minus, Play, RotateCcw } from "lucide-react"

interface QueueItem {
  id: number
  value: string
  timestamp: number
}

export function InteractiveDemo() {
  const [queue, setQueue] = useState<QueueItem[]>([])
  const [inputValue, setInputValue] = useState("")
  const [nextId, setNextId] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)

  const enqueue = () => {
    if (inputValue.trim()) {
      const newItem: QueueItem = {
        id: nextId,
        value: inputValue.trim(),
        timestamp: Date.now(),
      }
      setQueue((prev) => [...prev, newItem])
      setInputValue("")
      setNextId((prev) => prev + 1)
    }
  }

  const dequeue = () => {
    if (queue.length > 0) {
      setIsAnimating(true)
      setTimeout(() => {
        setQueue((prev) => prev.slice(1))
        setIsAnimating(false)
      }, 300)
    }
  }

  const reset = () => {
    setQueue([])
    setNextId(1)
    setInputValue("")
  }

  const autoDemo = () => {
    const demoItems = ["Processo A", "Processo B", "Processo C", "Processo D"]
    reset()

    demoItems.forEach((item, index) => {
      setTimeout(() => {
        const newItem: QueueItem = {
          id: index + 1,
          value: item,
          timestamp: Date.now(),
        }
        setQueue((prev) => [...prev, newItem])
        setNextId((prev) => prev + 1)
      }, index * 500)
    })
  }

  return (
    <section id="demo" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Demonstração <span className="text-primary">Interativa</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Experimente adicionar e remover elementos da fila para ver o FIFO em ação
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Controles */}
          <div className="slide-in-left">
            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6">Controles da Fila</h3>

              <div className="space-y-4 mb-6">
                <div className="flex gap-2">
                  <Input
                    placeholder="Digite um elemento (ex: Processo X)"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && enqueue()}
                    className="flex-1"
                  />
                  <Button onClick={enqueue} disabled={!inputValue.trim()}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={dequeue}
                    disabled={queue.length === 0}
                    variant="outline"
                    className="flex-1 bg-transparent"
                  >
                    <Minus className="h-4 w-4 mr-2" />
                    Remover (FIFO)
                  </Button>
                  <Button onClick={reset} variant="outline">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>

                <Button onClick={autoDemo} className="w-full" variant="secondary">
                  <Play className="h-4 w-4 mr-2" />
                  Demonstração Automática
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                <p className="mb-2">
                  <strong>Elementos na fila:</strong> {queue.length}
                </p>
                <p>
                  <strong>Próximo a sair:</strong> {queue.length > 0 ? queue[0].value : "Nenhum"}
                </p>
              </div>
            </Card>
          </div>

          {/* Visualização da Fila */}
          <div className="slide-in-right">
            <Card className="p-8 bg-card/50 backdrop-blur-sm min-h-[400px]">
              <h3 className="text-2xl font-semibold mb-6">Visualização da Fila</h3>

              <div className="space-y-3">
                {queue.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <div className="w-16 h-16 mx-auto mb-4 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center">
                      <Plus className="h-6 w-6" />
                    </div>
                    <p>Fila vazia - adicione elementos para começar</p>
                  </div>
                ) : (
                  <>
                    <div className="text-sm text-muted-foreground mb-4 flex justify-between">
                      <span>← Primeiro (sai primeiro)</span>
                      <span>Último (sai por último) →</span>
                    </div>

                    {queue.map((item, index) => (
                      <div
                        key={item.id}
                        className={`
                          p-4 rounded-lg border-2 transition-all duration-300
                          ${
                            index === 0
                              ? "bg-primary/20 border-primary animate-pulse"
                              : "bg-secondary/50 border-secondary"
                          }
                          ${isAnimating && index === 0 ? "opacity-50 scale-95" : ""}
                        `}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{item.value}</span>
                          <div className="text-sm text-muted-foreground">
                            #{item.id}
                            {index === 0 && <span className="ml-2 text-primary font-semibold">PRÓXIMO</span>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
