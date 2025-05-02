"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, FileText, Download, RotateCw } from "lucide-react"
import MachineViewer3D from "./machine-viewer-3d"

export default function ProductDemo() {
  return (
    <section id="demonstracao" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Veja a MaxGutter em Ação</h2>
          <p className="text-gray-600">
            Descubra como a Extrusora MaxGutter pode transformar sua produção de perfis de concreto com eficiência e
            precisão incomparáveis.
          </p>
        </div>

        <Tabs defaultValue="video" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-3 mx-auto mb-8">
            <TabsTrigger value="video">Vídeo</TabsTrigger>
            <TabsTrigger value="gallery">Galeria</TabsTrigger>
            <TabsTrigger value="3d">Modelo 3D</TabsTrigger>
          </TabsList>

          <TabsContent value="video" className="mt-6">
            <div className="aspect-video max-w-4xl mx-auto bg-black rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Vídeo demonstrativo da MaxGutter"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover opacity-70"
                />
                <Button
                  size="lg"
                  className="absolute bg-green-700 hover:bg-green-800 rounded-full w-16 h-16 flex items-center justify-center"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20extrusoras%20da%20Erimak%20Brasil",
                      "_blank",
                    )
                  }
                >
                  <Play className="h-8 w-8" />
                </Button>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">Assista ao vídeo completo para ver a MaxGutter em operação</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="border-green-700 text-green-700 hover:bg-green-50"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20extrusoras%20da%20Erimak%20Brasil",
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
                      "https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20extrusoras%20da%20Erimak%20Brasil",
                      "_blank",
                    )
                  }
                >
                  <Download className="mr-2 h-4 w-4" /> Baixar Catálogo
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="mt-6">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div
        key={i}
        className="rounded-lg overflow-hidden border border-gray-200 hover:border-green-700 transition-all hover:shadow-md"
      >
        <div className="relative h-64">
          <Image
            src={`/images/maxgutter${i}.jpg`}
            alt={`MaxGutter - Imagem ${i}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h4 className="font-medium">Detalhe da Extrusora MaxGutter {i}</h4>
          <p className="text-sm text-gray-600 mt-1">Visualize os componentes de alta precisão</p>
        </div>
      </div>
    ))}
  </div>
</TabsContent>


          <TabsContent value="3d" className="mt-6">
            <div className="aspect-video max-w-4xl mx-auto bg-gray-100 rounded-lg overflow-hidden relative border border-gray-200">
              <div className="h-[600px] w-full">
                <MachineViewer3D />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">
                Explore todos os ângulos e componentes da MaxGutter com nosso modelo 3D interativo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="border-green-700 text-green-700 hover:bg-green-50"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20extrusoras%20da%20Erimak%20Brasil",
                      "_blank",
                    )
                  }
                >
                  <RotateCw className="mr-2 h-4 w-4" /> Solicitar Demonstração
                </Button>
                <Button
                  variant="outline"
                  className="border-green-700 text-green-700 hover:bg-green-50"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20extrusoras%20da%20Erimak%20Brasil",
                      "_blank",
                    )
                  }
                >
                  <Download className="mr-2 h-4 w-4" /> Baixar Especificações
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
