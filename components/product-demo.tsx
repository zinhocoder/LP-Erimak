"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function ProductDemo() {
  const [selectedModel, setSelectedModel] = useState("maxgutter")

  const models = {
    maxgutter: {
      name: "MaxGutter",
      description: "Nossa solução premium para máxima produtividade",
      drawing: "/desenhomax.jpg?height=400&width=400&text=MaxGutter",
      drawingDescription1:
        "A MaxGutter é nossa solução premium para alta produtividade. Com capacidade de até 15 metros lineares por minuto, é ideal para grandes projetos e produção em larga escala.",
      drawingDescription2:
        "Seu sistema de controle avançado garante precisão dimensional de ±0.5mm, resultando em produtos finais de altíssima qualidade e acabamento superior.",
      gallery: [
        {
          src: "/images/maxgutter1.jpg?height=300&width=400&text=MaxGutter 1",
          alt: "MaxGutter - Vista frontal",
          title: "Vista frontal da MaxGutter",
          description: "Visualize o design robusto e os componentes de alta precisão"
        },
        {
          src: "/images/maxgutter4.jpg?height=300&width=400&text=Operando MaxGutter",
          alt: "MaxGutter - Em operação por operador",
          title: "Operação da MaxGutter",
          description: "Veja a máquina sendo operada com precisão"
        },
        {
          src: "/images/maxproducao.png?height=300&width=400&text=Produção MaxGutter",
          alt: "MaxGutter - Produção",
          title: "Produção com MaxGutter",
          description: "Máxima performance na fabricação de perfis"
        }
      ],
    },
    midgutter: {
      name: "MidGutter",
      description: "O modelo mais vendido, equilibrando capacidade e custo",
      drawing: "/desenhomid.jpg?height=400&width=400&text=MidGutter",
      drawingDescription1:
        "A MidGutter é nossa solução mais vendida, equilibrando capacidade e custo. Com produção de até 12 metros lineares por minuto, atende perfeitamente a projetos de médio porte.",
      drawingDescription2:
        "Seu design compacto e eficiente proporciona fácil manutenção e operação simplificada, ideal para empresas que buscam equilíbrio entre investimento e produtividade.",
      gallery: [
        {
          src: "/images/maxgutter2.jpg?height=300&width=400&text=MidGutter 1",
          alt: "MidGutter - Vista frontal",
          title: "Vista frontal da MidGutter",
          description: "Design compacto e eficiente para médias produções"
        },
        {
          src: "/images/maxgutter5.jpg?height=300&width=400&text=Operando MidGutter",
          alt: "MidGutter - Em operação por operador",
          title: "Operação da MidGutter",
          description: "Controle simplificado e desempenho balanceado"
        },
        {
          src: "/images/midproducao.png?height=300&width=400&text=Produção MidGutter",
          alt: "MidGutter - Produção",
          title: "Produção com MidGutter",
          description: "Processo produtivo eficiente em andamento"
        }
      ],
    },
    ecogutter: {
      name: "ecoGutter",
      description: "LANÇAMENTO 2025: Solução sustentável com tecnologia de ponta",
      drawing: "/desenhoeco.jpg?height=400&width=400&text=ecoGutter",
      drawingDescription1:
        "A ecoGutter é nossa inovação mais recente, focada em sustentabilidade e tecnologia de ponta. Com sistema de extração com siya, tecnologia fotovoltaica integrada e ignição biométrica.",
      drawingDescription2:
        "Ideal para empresas comprometidas com práticas sustentáveis, a ecoGutter reduz significativamente o consumo energético enquanto mantém alta qualidade de produção com recursos de segurança avançados.",
      gallery: [
        {
          src: "/images/maxgutter3.jpg?height=300&width=400&text=ecoGutter 1",
          alt: "ecoGutter - Vista frontal",
          title: "Vista frontal da ecoGutter",
          description: "Design inovador com foco em sustentabilidade"
        },
        {
          src: "/images/maxgutter6.jpg?height=300&width=400&text=Operando ecoGutter",
          alt: "ecoGutter - Em operação por operador",
          title: "Operação da ecoGutter",
          description: "Eficiência energética sendo aplicada em campo"
        },
        {
          src: "/images/ecoproducao.png?height=300&width=400&text=Produção ecoGutter",
          alt: "ecoGutter - Produção",
          title: "Produção com ecoGutter",
          description: "Alta performance com foco sustentável"
        }
      ],
    },
  }

  const currentModel = models[selectedModel]

  return (
    <section id="demonstracao" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Conheça Nossas Extrusoras</h2>
          <p className="text-gray-600">
            Descubra como as extrusoras ERIMAK podem transformar sua produção de perfis de concreto com eficiência e precisão incomparáveis.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setSelectedModel("maxgutter")}
              className={`px-4 py-2 text-sm font-medium ${
                selectedModel === "maxgutter" ? "bg-green-700 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
              } border border-gray-200 rounded-l-lg`}
            >
              MaxGutter
            </button>
            <button
              type="button"
              onClick={() => setSelectedModel("midgutter")}
              className={`px-4 py-2 text-sm font-medium ${
                selectedModel === "midgutter" ? "bg-green-700 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
              } border-t border-b border-gray-200`}
            >
              MidGutter
            </button>
            <button
              type="button"
              onClick={() => setSelectedModel("ecogutter")}
              className={`px-4 py-2 text-sm font-medium ${
                selectedModel === "ecogutter" ? "bg-green-700 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
              } border border-gray-200 rounded-r-lg`}
            >
              ecoGutter {selectedModel === "ecogutter" ? "" : "- NOVO"}
            </button>
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold">{currentModel.name}</h3>
          <p className="text-gray-600">{currentModel.description}</p>
        </div>

        <Tabs defaultValue="desenho" className="w-full">
          <TabsList className="grid w-full md:w-[300px] grid-cols-2 mx-auto mb-8">
            <TabsTrigger value="desenho">Desenho</TabsTrigger>
            <TabsTrigger value="galeria">Galeria</TabsTrigger>
          </TabsList>

          <TabsContent value="desenho" className="mt-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={currentModel.drawing || "/"}
                    alt={`Desenho técnico da ${currentModel.name}`}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">{currentModel.drawingDescription1}</p>
                  <p className="text-gray-700">{currentModel.drawingDescription2}</p>
                  <Button
                    className="w-full bg-green-700 hover:bg-green-800"
                    onClick={() =>
                      window.open(
                        `https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20extrusora%20${currentModel.name}%20da%20Erimak%20Brasil`,
                        "_blank"
                      )
                    }
                  >
                    Solicitar Detalhes
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="galeria" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentModel.gallery.map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden border border-gray-200 hover:border-green-700 transition-all hover:shadow-md"
                >
                  <div className="relative h-64">
                    <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}