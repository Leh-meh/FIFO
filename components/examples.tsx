"use client"

import { Card } from "@/components/ui/card"
import { Database, Network, Cpu } from "lucide-react"

export function Examples() {
  const examples = [
    {
      icon: Cpu,
      title: "Escalonamento de CPU",
      description: "Algoritmo FCFS (First-Come, First-Served)",
      code: `// Exemplo de escalonamento FIFO
struct Process {
    int pid;
    int arrival_time;
    int burst_time;
};

void fifo_scheduling(Process processes[], int n) {
    // Ordena por tempo de chegada
    sort(processes, processes + n, 
         [](Process a, Process b) {
             return a.arrival_time < b.arrival_time;
         });
    
    int current_time = 0;
    for(int i = 0; i < n; i++) {
        // Executa processo na ordem FIFO
        current_time += processes[i].burst_time;
        printf("Processo %d executado\\n", processes[i].pid);
    }
}`,
      language: "cpp",
    },
    {
      icon: Database,
      title: "Buffer Circular",
      description: "Implementação de buffer FIFO para I/O",
      code: `class FIFOBuffer:
    def __init__(self, size):
        self.buffer = [None] * size
        self.size = size
        self.head = 0  # Próximo a sair
        self.tail = 0  # Próximo a entrar
        self.count = 0
    
    def enqueue(self, data):
        if self.count < self.size:
            self.buffer[self.tail] = data
            self.tail = (self.tail + 1) % self.size
            self.count += 1
            return True
        return False  # Buffer cheio
    
    def dequeue(self):
        if self.count > 0:
            data = self.buffer[self.head]
            self.head = (self.head + 1) % self.size
            self.count -= 1
            return data
        return None  # Buffer vazio`,
      language: "python",
    },
    {
      icon: Network,
      title: "Fila de Rede",
      description: "Processamento de pacotes em ordem FIFO",
      code: `// Fila de pacotes de rede
typedef struct Packet {
    int id;
    char data[1024];
    int priority;
    struct Packet* next;
} Packet;

typedef struct NetworkQueue {
    Packet* front;
    Packet* rear;
    int size;
} NetworkQueue;

void enqueue_packet(NetworkQueue* queue, Packet* packet) {
    if (queue->rear == NULL) {
        queue->front = queue->rear = packet;
    } else {
        queue->rear->next = packet;
        queue->rear = packet;
    }
    queue->size++;
}

Packet* dequeue_packet(NetworkQueue* queue) {
    if (queue->front == NULL) return NULL;
    
    Packet* packet = queue->front;
    queue->front = queue->front->next;
    
    if (queue->front == NULL) {
        queue->rear = NULL;
    }
    
    queue->size--;
    return packet;
}`,
      language: "c",
    },
  ]

  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Exemplos <span className="text-primary">Práticos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Implementações reais de FIFO em diferentes contextos de sistemas operacionais
          </p>
        </div>

        <div className="space-y-8">
          {examples.map((example, index) => (
            <Card
              key={example.title}
              className={`p-8 bg-card/50 backdrop-blur-sm border-primary/20 fade-in-up transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <example.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">{example.title}</h3>
                      <p className="text-muted-foreground">{example.description}</p>
                    </div>
                  </div>

                  <div className="prose prose-invert max-w-none">
                    <p className="text-foreground/80 leading-relaxed">
                      Este exemplo demonstra como o algoritmo FIFO é implementado em {example.title.toLowerCase()},
                      garantindo que os elementos sejam processados na ordem exata de chegada.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute top-4 right-4 text-xs text-muted-foreground uppercase tracking-wide">
                    {example.language}
                  </div>
                  <pre className="bg-background/50 p-6 rounded-lg overflow-x-auto text-sm border border-border">
                    <code className="text-foreground font-mono">{example.code}</code>
                  </pre>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
