"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, Zap, Leaf, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function SpecsSection() {
  const [selectedModel, setSelectedModel] = useState("maxgutter")

  const models = {
    maxgutter: {
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
      specs: {
        capacidade: "Até 15 metros lineares por minuto",
        potencia: "75 kW",
        dimensoes: "6.5m x 2.2m x 1.8m",
        peso: "4.500 kg",
        tensao: "380V / 440V trifásico",
        controle: 'CLP com interface touchscreen de 15"',
        silo: "2.000 kg",
        vibracao: "Hidráulico com frequência variável",
        garantia: "3 anos para peças e componentes",
      },
    },
    midgutter: {
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
      specs: {
        capacidade: "Até 12 metros lineares por minuto",
        potencia: "60 kW",
        dimensoes: "5.8m x 2.0m x 1.6m",
        peso: "3.800 kg",
        tensao: "380V / 440V trifásico",
        controle: 'CLP com interface touchscreen de 10"',
        silo: "1.500 kg",
        vibracao: "Hidráulico com frequência variável",
        garantia: "3 anos para peças e componentes",
      },
    },
    ecogutter: {
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
      specs: {
        capacidade: "Até 8 metros lineares por minuto",
        potencia: "45 kW",
        dimensoes: "5.2m x 1.8m x 1.5m",
        peso: "3.200 kg",
        tensao: "380V / 440V trifásico ou sistema fotovoltaico",
        controle: 'CLP com interface touchscreen de 10" e biometria',
        silo: "1.200 kg",
        vibracao: "Hidráulico com frequência variável",
        garantia: "3 anos para peças e componentes",
      },
    },
  }

  const currentModel = models[selectedModel]

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
          <TabsList className="grid w-full md:w-[600px] grid-cols-3 mx-auto mb-8">
            <TabsTrigger value="models">Modelos</TabsTrigger>
            <TabsTrigger value="comparison">Comparativo</TabsTrigger>
            <TabsTrigger value="specs">Especificações</TabsTrigger>
          </TabsList>

          <TabsContent id="models" value="models" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(models).map(([key, model]) => (
                <div
                  key={key}
                  className={`border rounded-lg overflow-hidden h-full flex flex-col cursor-pointer transition-all ${
                    key === selectedModel
                      ? "border-green-700 ring-2 ring-green-700 shadow-lg transform scale-[1.02]"
                      : model.featured
                        ? "border-green-700 hover:shadow-md hover:scale-[1.01]"
                        : "border-gray-200 hover:border-green-700 hover:shadow-md hover:scale-[1.01]"
                  }`}
                  onClick={() => setSelectedModel(key)}
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
                          key === selectedModel || model.featured
                            ? "bg-green-700 text-white hover:bg-green-800"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(
                            `https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20extrusora%20${model.name}%20da%20Erimak%20Brasil`,
                            "_blank",
                          )
                        }}
                      >
                        Solicitar Orçamento
                      </button>
                    </div>
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
                    <TableHead
                      className={`${selectedModel === "maxgutter" ? "bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("maxgutter")}
                    >
                      MaxGutter
                    </TableHead>
                    <TableHead
                      className={`${selectedModel === "midgutter" ? "bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("midgutter")}
                    >
                      MidGutter
                    </TableHead>
                    <TableHead
                      className={`${selectedModel === "ecogutter" ? "bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("ecogutter")}
                    >
                      ecoGutter
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Capacidade de Produção</TableCell>
                    <TableCell
                      className={`${selectedModel === "maxgutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("maxgutter")}
                    >
                      15 m/min
                    </TableCell>
                    <TableCell
                      className={`${selectedModel === "midgutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("midgutter")}
                    >
                      12 m/min
                    </TableCell>
                    <TableCell
                      className={`${selectedModel === "ecogutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("ecogutter")}
                    >
                      8 m/min
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sistema de Extração</TableCell>
                    <TableCell
                      className={`${selectedModel === "maxgutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("maxgutter")}
                    >
                      Padrão
                    </TableCell>
                    <TableCell
                      className={`${selectedModel === "midgutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("midgutter")}
                    >
                      Padrão
                    </TableCell>
                    <TableCell
                      className={`${selectedModel === "ecogutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("ecogutter")}
                    >
                      Siya
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sistema de Energia</TableCell>
                    <TableCell
                      className={`${selectedModel === "maxgutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("maxgutter")}
                    >
                      Rede elétrica
                    </TableCell>
                    <TableCell
                      className={`${selectedModel === "midgutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("midgutter")}
                    >
                      Rede elétrica
                    </TableCell>
                    <TableCell
                      className={`${selectedModel === "ecogutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("ecogutter")}
                    >
                      Fotovoltaico
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sistema de Ignição</TableCell>
                    <TableCell
                      className={`${selectedModel === "maxgutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("maxgutter")}
                    >
                      Digital
                    </TableCell>
                    <TableCell
                      className={`${selectedModel === "midgutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("midgutter")}
                    >
                      Digital
                    </TableCell>
                    <TableCell
                      className={`${selectedModel === "ecogutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("ecogutter")}
                    >
                      Biométrico
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Consumo de Energia</TableCell>
                    <TableCell
                      className={`${selectedModel === "maxgutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("maxgutter")}
                    >
                      75 kW
                    </TableCell>
                    <TableCell
                      className={`${selectedModel === "midgutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("midgutter")}
                    >
                      60 kW
                    </TableCell>
                    <TableCell
                      className={`${selectedModel === "ecogutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("ecogutter")}
                    >
                      45 kW
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Precisão Dimensional</TableCell>
                    <TableCell
                      className={`${selectedModel === "maxgutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("maxgutter")}
                    >
                      ±0.5mm
                    </TableCell>
                    <TableCell
                      className={`${selectedModel === "midgutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("midgutter")}
                    >
                      ±0.8mm
                    </TableCell>
                    <TableCell
                      className={`${selectedModel === "ecogutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("ecogutter")}
                    >
                      ±1.0mm
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Garantia</TableCell>
                    <TableCell
                      className={`${selectedModel === "maxgutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("maxgutter")}
                    >
                      3 anos
                    </TableCell>
                    <TableCell
                      className={`${selectedModel === "midgutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("midgutter")}
                    >
                      3 anos
                    </TableCell>
                    <TableCell
                      className={`${selectedModel === "ecogutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("ecogutter")}
                    >
                      3 anos
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Suporte Técnico</TableCell>
                    <TableCell
                      className={`${selectedModel === "maxgutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("maxgutter")}
                    >
                      24/7
                    </TableCell>
                    <TableCell
                      className={`${selectedModel === "midgutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("midgutter")}
                    >
                      24/7
                    </TableCell>
                    <TableCell
                      className={`${selectedModel === "ecogutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("ecogutter")}
                    >
                      24/7
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Interface de Controle</TableCell>
                    <TableCell
                      className={`${selectedModel === "maxgutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("maxgutter")}
                    >
                      Touchscreen 15"
                    </TableCell>
                    <TableCell
                      className={`${selectedModel === "midgutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("midgutter")}
                    >
                      Touchscreen 10"
                    </TableCell>
                    <TableCell
                      className={`${selectedModel === "ecogutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("ecogutter")}
                    >
                      Touchscreen 10" com biometria
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tempo de Configuração</TableCell>
                    <TableCell
                      className={`${selectedModel === "maxgutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("maxgutter")}
                    >
                      15 min
                    </TableCell>
                    <TableCell
                      className={`${selectedModel === "midgutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("midgutter")}
                    >
                      25 min
                    </TableCell>
                    <TableCell
                      className={`${selectedModel === "ecogutter" ? "text-green-700 font-medium bg-green-50" : ""} cursor-pointer hover:bg-gray-50`}
                      onClick={() => setSelectedModel("ecogutter")}
                    >
                      20 min
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="mt-6 text-center">
              <Button
                className="bg-green-700 hover:bg-green-800"
                onClick={() =>
                  window.open(
                    `https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20extrusora%20${currentModel.name}%20da%20Erimak%20Brasil`,
                    "_blank",
                  )
                }
              >
                Solicitar Comparativo Detalhado
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="specs" className="mt-6">
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div
                className={`flex-1 p-4 rounded-lg cursor-pointer transition-all ${
                  selectedModel === "maxgutter"
                    ? "bg-green-50 border-2 border-green-700"
                    : "bg-gray-50 border border-gray-200 hover:border-green-700"
                }`}
                onClick={() => setSelectedModel("maxgutter")}
              >
                <div className="flex items-center justify-center mb-2">
                  <Zap className={`h-6 w-6 ${selectedModel === "maxgutter" ? "text-green-700" : "text-gray-500"}`} />
                  <h3
                    className={`ml-2 font-bold ${selectedModel === "maxgutter" ? "text-green-700" : "text-gray-700"}`}
                  >
                    MaxGutter
                  </h3>
                </div>
                <p className="text-sm text-center text-gray-600">Nossa solução premium para máxima produtividade</p>
              </div>

              <div
                className={`flex-1 p-4 rounded-lg cursor-pointer transition-all ${
                  selectedModel === "midgutter"
                    ? "bg-green-50 border-2 border-green-700"
                    : "bg-gray-50 border border-gray-200 hover:border-green-700"
                }`}
                onClick={() => setSelectedModel("midgutter")}
              >
                <div className="flex items-center justify-center mb-2">
                  <Shield className={`h-6 w-6 ${selectedModel === "midgutter" ? "text-green-700" : "text-gray-500"}`} />
                  <h3
                    className={`ml-2 font-bold ${selectedModel === "midgutter" ? "text-green-700" : "text-gray-700"}`}
                  >
                    MidGutter
                  </h3>
                </div>
                <p className="text-sm text-center text-gray-600">
                  O modelo mais vendido, equilibrando capacidade e custo
                </p>
              </div>

              <div
                className={`flex-1 p-4 rounded-lg cursor-pointer transition-all ${
                  selectedModel === "ecogutter"
                    ? "bg-green-50 border-2 border-green-700"
                    : "bg-gray-50 border border-gray-200 hover:border-green-700"
                }`}
                onClick={() => setSelectedModel("ecogutter")}
              >
                <div className="flex items-center justify-center mb-2">
                  <Leaf className={`h-6 w-6 ${selectedModel === "ecogutter" ? "text-green-700" : "text-gray-500"}`} />
                  <h3
                    className={`ml-2 font-bold ${selectedModel === "ecogutter" ? "text-green-700" : "text-gray-700"}`}
                  >
                    ecoGutter
                  </h3>
                </div>
                <p className="text-sm text-center text-gray-600">
                  LANÇAMENTO 2025: Solução sustentável com tecnologia de ponta
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Característica</TableHead>
                    <TableHead>{currentModel.name}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Capacidade de Produção</TableCell>
                    <TableCell>{currentModel.specs.capacidade}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Potência do Motor</TableCell>
                    <TableCell>{currentModel.specs.potencia}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Dimensões (C x L x A)</TableCell>
                    <TableCell>{currentModel.specs.dimensoes}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Peso</TableCell>
                    <TableCell>{currentModel.specs.peso}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tensão de Alimentação</TableCell>
                    <TableCell>{currentModel.specs.tensao}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sistema de Controle</TableCell>
                    <TableCell>{currentModel.specs.controle}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Capacidade do Silo</TableCell>
                    <TableCell>{currentModel.specs.silo}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sistema de Vibração</TableCell>
                    <TableCell>{currentModel.specs.vibracao}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Garantia</TableCell>
                    <TableCell>{currentModel.specs.garantia}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="mt-6 text-center">
              <Button
                className="bg-green-700 hover:bg-green-800"
                onClick={() =>
                  window.open(
                    `https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20extrusora%20${currentModel.name}%20da%20Erimak%20Brasil`,
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
