"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, Zap, Leaf, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function SpecsSection() {
  return (
    <section id="especificacoes" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Especificações Técnicas</h2>
          <p className="text-gray-600">
            Conheça em detalhes as especificações das extrusoras ERIMAK e descubra qual é a escolha ideal para sua
            empresa.
          </p>
        </div>

        <Tabs defaultValue="models" className="w-full">
          <TabsList className="grid w-full md:w-[600px] grid-cols-4 mx-auto mb-8">
            <TabsTrigger value="models">Modelos</TabsTrigger>
            <TabsTrigger value="drawings">Desenhos</TabsTrigger>
            <TabsTrigger value="comparison">Comparativo</TabsTrigger>
            <TabsTrigger value="specs">Especificações</TabsTrigger>
          </TabsList>

          <TabsContent id="models" value="models" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "MaxGutter",
                  icon: <Zap className="h-8 w-8 text-green-700 mb-2" />,
                  description: "Nossa solução premium para máxima produtividade",
                  capacity: "15 metros lineares/min",
                  price: "Consulte",
                  featured: true,
                  features: [
                    "Alta capacidade de produção",
                    "Sistema de controle avançado",
                    "Máxima precisão dimensional",
                    "Garantia de 3 anos",
                  ],
                },
                {
                  name: "MidGutter",
                  icon: <Shield className="h-8 w-8 text-green-700 mb-2" />,
                  description: "O modelo mais vendido, equilibrando capacidade e custo",
                  capacity: "12 metros lineares/min",
                  price: "Consulte",
                  features: [
                    "Sistema de controle digital",
                    "Eficiência energética avançada",
                    "Manutenção simplificada",
                    "Garantia de 3 anos",
                  ],
                },
                {
                  name: "ecoGutter",
                  icon: <Leaf className="h-8 w-8 text-green-700 mb-2" />,
                  description: "LANÇAMENTO 2025: Solução sustentável com tecnologia de ponta",
                  capacity: "8 metros lineares/min",
                  price: "Consulte",
                  isNew: true,
                  features: [
                    "Sistema de extração com siya",
                    "Tecnologia fotovoltaica integrada",
                    "Sistema de ignição biométrica",
                    "Garantia de 3 anos",
                  ],
                },
              ].map((model, index) => (
                <div
                  key={index}
                  className={`border rounded-lg overflow-hidden h-full flex flex-col ${
                    model.featured ? "border-green-700 ring-1 ring-green-700" : "border-gray-200"
                  }`}
                >
                  {model.isNew && (
                    <div className="bg-green-700 text-white text-center py-1 text-sm font-medium">LANÇAMENTO 2025</div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-col items-center mb-4">
                      {model.icon}
                      <h3 className="text-xl font-bold text-center">{model.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 text-center">{model.description}</p>
                    <div className="space-y-3 mb-6">
                      {model.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-700 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      <div className="flex items-start pt-2">
                        <CheckCircle className="h-5 w-5 text-green-700 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Capacidade: {model.capacity}</span>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="text-2xl font-bold mb-4 text-center">{model.price}</div>
                      <button
                        className={`w-full py-2 rounded-md font-medium ${
                          model.featured
                            ? "bg-green-700 text-white hover:bg-green-800"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                        onClick={() =>
                          window.open(
                            `https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20extrusora%20${model.name}%20da%20Erimak%20Brasil`,
                            "_blank",
                          )
                        }
                      >
                        Solicitar Orçamento
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="drawings" className="mt-6">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "MaxGutter",
                  image: "/desenhomax.jpg?height=400&width=400&text=MaxGutter",
                  isHighlighted: true,
                  description1:
                    "A MaxGutter é nossa solução premium para alta produtividade. Com capacidade de até 15 metros lineares por minuto, é ideal para grandes projetos e produção em larga escala.",
                  description2:
                    "Seu sistema de controle avançado garante precisão dimensional de ±0.5mm, resultando em produtos finais de altíssima qualidade e acabamento superior.",
                },
                {
                  name: "MidGutter",
                  image: "/desenhomini.jpg?height=400&width=400&text=MidGutter",
                  isHighlighted: false,
                  description1:
                    "A MidGutter é nossa solução mais vendida, equilibrando capacidade e custo. Com produção de até 12 metros lineares por minuto, atende perfeitamente a projetos de médio porte.",
                  description2:
                    "Seu design compacto e eficiente proporciona fácil manutenção e operação simplificada, ideal para empresas que buscam equilíbrio entre investimento e produtividade.",
                },
                {
                  name: "ecoGutter",
                  image: "/desenhoeco.jpg?height=400&width=400&text=ecoGutter",
                  isHighlighted: false,
                  isNew: true,
                  description1:
                    "A ecoGutter é nossa inovação mais recente, focada em sustentabilidade e tecnologia de ponta. Com sistema de extração com siya, tecnologia fotovoltaica integrada e ignição biométrica.",
                  description2:
                    "Ideal para empresas comprometidas com práticas sustentáveis, a ecoGutter reduz significativamente o consumo energético enquanto mantém alta qualidade de produção com recursos de segurança avançados.",
                },
              ].map((model, index) => (
                <div key={index} className="border rounded-lg overflow-hidden h-full flex flex-col">
                  <div className={`p-4 ${model.isNew ? "bg-green-700 text-white" : "bg-gray-50"} border-b`}>
                    <h3 className="text-xl font-bold text-center">{model.name}</h3>
                    {model.isNew && <p className="text-xs text-center mt-1">LANÇAMENTO 2025</p>}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="aspect-square relative mb-4 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={model.image || "/placeholder.svg"}
                        alt={`Desenho técnico da ${model.name}`}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <div className="space-y-4 flex-grow">
                      <p className="text-gray-700">{model.description1}</p>
                      <p className="text-gray-700">{model.description2}</p>
                    </div>
                    <Button
                      className={`w-full mt-4 ${model.isHighlighted ? "bg-green-700 hover:bg-green-800" : "bg-green-700 hover:bg-green-800"}`}
                      onClick={() =>
                        window.open(
                          `https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20extrusora%20${model.name}%20da%20Erimak%20Brasil`,
                          "_blank",
                        )
                      }
                    >
                      Solicitar Detalhes
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="comparison" className="mt-6">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Característica</TableHead>
                    <TableHead>MaxGutter</TableHead>
                    <TableHead>MidGutter</TableHead>
                    <TableHead>ecoGutter</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Capacidade de Produção</TableCell>
                    <TableCell className="text-green-700">15 m/min</TableCell>
                    <TableCell>12 m/min</TableCell>
                    <TableCell>8 m/min</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sistema de Extração</TableCell>
                    <TableCell>Padrão</TableCell>
                    <TableCell>Padrão</TableCell>
                    <TableCell className="text-green-700">Siya</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sistema de Energia</TableCell>
                    <TableCell>Rede elétrica</TableCell>
                    <TableCell>Rede elétrica</TableCell>
                    <TableCell className="text-green-700">Fotovoltaico</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sistema de Ignição</TableCell>
                    <TableCell>Digital</TableCell>
                    <TableCell>Digital</TableCell>
                    <TableCell className="text-green-700">Biométrico</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Consumo de Energia</TableCell>
                    <TableCell>75 kW</TableCell>
                    <TableCell>60 kW</TableCell>
                    <TableCell className="text-green-700">45 kW</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Precisão Dimensional</TableCell>
                    <TableCell className="text-green-700">±0.5mm</TableCell>
                    <TableCell>±0.8mm</TableCell>
                    <TableCell>±1.0mm</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Garantia</TableCell>
                    <TableCell>3 anos</TableCell>
                    <TableCell>3 anos</TableCell>
                    <TableCell>3 anos</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Suporte Técnico</TableCell>
                    <TableCell>24/7</TableCell>
                    <TableCell>24/7</TableCell>
                    <TableCell>24/7</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Interface de Controle</TableCell>
                    <TableCell>Touchscreen 15"</TableCell>
                    <TableCell>Touchscreen 10"</TableCell>
                    <TableCell>Touchscreen 10" com biometria</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tempo de Configuração</TableCell>
                    <TableCell>15 min</TableCell>
                    <TableCell>25 min</TableCell>
                    <TableCell>20 min</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="mt-6 text-center">
              <Button
                className="bg-green-700 hover:bg-green-800"
                onClick={() =>
                  window.open(
                    "https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20extrusoras%20da%20Erimak%20Brasil",
                    "_blank",
                  )
                }
              >
                Solicitar Comparativo Detalhado
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="specs" className="mt-6">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Característica</TableHead>
                    <TableHead>Especificação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Capacidade de Produção</TableCell>
                    <TableCell>Até 15 metros lineares por minuto</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Potência do Motor</TableCell>
                    <TableCell>75 kW</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Dimensões (C x L x A)</TableCell>
                    <TableCell>6.5m x 2.2m x 1.8m</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Peso</TableCell>
                    <TableCell>4.500 kg</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tensão de Alimentação</TableCell>
                    <TableCell>380V / 440V trifásico</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sistema de Controle</TableCell>
                    <TableCell>CLP com interface touchscreen de 15"</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Capacidade do Silo</TableCell>
                    <TableCell>2.000 kg</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sistema de Vibração</TableCell>
                    <TableCell>Hidráulico com frequência variável</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Garantia</TableCell>
                    <TableCell>3 anos para peças e componentes</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="mt-6 text-center">
              <Button
                className="bg-green-700 hover:bg-green-800"
                onClick={() =>
                  window.open(
                    "https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20extrusoras%20da%20Erimak%20Brasil",
                    "_blank",
                  )
                }
              >
                Solicitar Especificações Completas
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
