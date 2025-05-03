"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, FileText, Download } from "lucide-react"
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
          description: "Visualize o design robusto e os componentes de alta precisão",
        },
        {
          src: "/images/maxpainel.png?height=300&width=400&text=MaxGutter 2",
          alt: "MaxGutter - Painel de controle",
          title: "Painel de controle touchscreen",
          description: "Interface intuitiva com tela de 15 polegadas",
        },
        {
          src: "/images/maxestrusao.png?height=300&width=400&text=MaxGutter 3",
          alt: "MaxGutter - Sistema de extrusão",
          title: "Sistema de extrusão avançado",
          description: "Componentes de alta durabilidade para máxima produtividade",
        },
        {
          src: "/images/maxalimentacao.png?height=300&width=400&text=MaxGutter 4",
          alt: "MaxGutter - Silo de alimentação",
          title: "Silo de alimentação de 2.000kg",
          description: "Capacidade para longos períodos de operação contínua",
        },
        {
          src: "/images/maxhidraulico.png?height=300&width=400&text=MaxGutter 5",
          alt: "MaxGutter - Sistema hidráulico",
          title: "Sistema hidráulico de precisão",
          description: "Controle fino para resultados consistentes",
        },
        {
          src: "/images/maxproducao.png?height=300&width=400&text=MaxGutter 6",
          alt: "MaxGutter - Em operação",
          title: "MaxGutter em operação",
          description: "Veja a máquina produzindo perfis de concreto",
        },
      ],
      video: "/placeholder.svg?height=720&width=1280&text=Vídeo MaxGutter",
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
          description: "Design compacto e eficiente para médias produções",
        },
        {
          src: "/images/midpainel.png?height=300&width=400&text=MidGutter 2",
          alt: "MidGutter - Painel de controle",
          title: "Painel de controle digital",
          description: "Interface de 10 polegadas para fácil operação",
        },
        {
          src: "/images/midextrusao.png?height=300&width=400&text=MidGutter 3",
          alt: "MidGutter - Sistema de extrusão",
          title: "Sistema de extrusão balanceado",
          description: "Equilíbrio perfeito entre desempenho e custo",
        },
        {
          src: "/images/midalimentacao.png?height=300&width=400&text=MidGutter 4",
          alt: "MidGutter - Silo de alimentação",
          title: "Silo de alimentação de 1.500kg",
          description: "Capacidade ideal para operações de médio porte",
        },
        {
          src: "/images/midvibracao.png?height=300&width=400&text=MidGutter 5",
          alt: "MidGutter - Sistema de vibração",
          title: "Sistema de vibração ajustável",
          description: "Controle preciso para diferentes tipos de concreto",
        },
        {
          src: "/images/midproducao.png?height=300&width=400&text=MidGutter 6",
          alt: "MidGutter - Em operação",
          title: "MidGutter em operação",
          description: "Produção eficiente de perfis de concreto",
        },
      ],
      video: "/placeholder.svg?height=720&width=1280&text=Vídeo MidGutter",
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
          description: "Design inovador com foco em sustentabilidade",
        },
        {
          src: "/images/fotovoltaico.png?height=300&width=400&text=ecoGutter 2",
          alt: "ecoGutter - Sistema fotovoltaico",
          title: "Sistema fotovoltaico integrado",
          description: "Painéis solares para operação com energia limpa",
        },
        {
          src: "/images/ecoextracao.png?height=300&width=400&text=ecoGutter 3",
          alt: "ecoGutter - Sistema de extração com siya",
          title: "Sistema de extração com siya",
          description: "Tecnologia exclusiva para maior eficiência energética",
        },
        {
          src: "/images/ecoignicao.png?height=300&width=400&text=ecoGutter 4",
          alt: "ecoGutter - Sistema de ignição biométrica",
          title: "Sistema de ignição biométrica",
          description: "Segurança avançada com reconhecimento de impressão digital",
        },
        {
          src: "/images/ecobiometria.png?height=300&width=400&text=ecoGutter 5",
          alt: "ecoGutter - Painel de controle",
          title: "Painel de controle com biometria",
          description: "Interface moderna com controle de acesso seguro",
        },
        {
          src: "/images/ecoproducao.png?height=300&width=400&text=ecoGutter 6",
          alt: "ecoGutter - Em operação",
          title: "ecoGutter em operação",
          description: "Produção sustentável de perfis de concreto",
        },
      ],
      video: "/placeholder.svg?height=720&width=1280&text=Vídeo ecoGutter",
    },
  }

  const currentModel = models[selectedModel]

  return (
    <section id="demonstracao" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Conheça Nossas Extrusoras</h2>
          <p className="text-gray-600">
            Descubra como as extrusoras ERIMAK podem transformar sua produção de perfis de concreto com eficiência e
            precisão incomparáveis.
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
          <TabsList className="grid w-full md:w-[400px] grid-cols-3 mx-auto mb-8">
            <TabsTrigger value="desenho">Desenho</TabsTrigger>
            <TabsTrigger value="galeria">Galeria</TabsTrigger>
            <TabsTrigger value="video">Vídeo</TabsTrigger>
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
                        "_blank",
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

          <TabsContent value="video" className="mt-6">
            <div className="aspect-video max-w-4xl mx-auto bg-black rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={currentModel.video || "/placeholder.svg"}
                  alt={`Vídeo demonstrativo da ${currentModel.name}`}
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover opacity-70"
                />
                <Button
                  size="lg"
                  className="absolute bg-green-700 hover:bg-green-800 rounded-full w-16 h-16 flex items-center justify-center"
                  onClick={() =>
                    window.open(
                      `https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20extrusora%20${currentModel.name}%20da%20Erimak%20Brasil`,
                      "_blank",
                    )
                  }
                >
                  <Play className="h-8 w-8" />
                </Button>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">Assista ao vídeo completo para ver a {currentModel.name} em operação</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="border-green-700 text-green-700 hover:bg-green-50"
                  onClick={() =>
                    window.open(
                      `https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20extrusora%20${currentModel.name}%20da%20Erimak%20Brasil`,
                      "_blank",
                    )
                  }
                >
                  <FileText className="mr-2 h-4 w-4" /> Ver Especificações
                </Button>
                <Button
                  variant="outline"
                  className="border-green-700 text-green-700 hover:bg-green-50"
                  onClick={() =>
                    window.open(
                      `https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20extrusora%20${currentModel.name}%20da%20Erimak%20Brasil`,
                      "_blank",
                    )
                  }
                >
                  <Download className="mr-2 h-4 w-4" /> Baixar Catálogo
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
