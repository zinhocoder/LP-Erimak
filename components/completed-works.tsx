"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { ArrowRight, MapPin, Calendar } from "lucide-react"

export default function CompletedWorks() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Drenagem urbana em São Paulo",
      description: "Instalação de canaletas de drenagem em área urbana com a MidGutter",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%209%2C%202025%2C%2010_25_42%20PM-6wJX91X2tU7EtjGFBD1UxuEZ5gn94t.png",
      category: "drenagem",
      location: "São Paulo, SP",
      date: "Março 2024",
    },
    {
      id: 2,
      title: "Canaletas de concreto para rodovia",
      description: "Construção de sistema de drenagem para nova rodovia estadual",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%209%2C%202025%2C%2010_28_36%20PM-11hMGdL5nfm5IQg0uvmGzo6XhWO4G5.png",
      category: "drenagem",
      location: "Ribeirão Preto, SP",
      date: "Janeiro 2024",
    },
    {
      id: 3,
      title: "Meio-fio para urbanização",
      description: "Instalação de meio-fio em projeto de urbanização municipal",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sobre4-Faonnl1T023gm89EqimuF32RyUuVpE.png",
      category: "meio-fio",
      location: "Campinas, SP",
      date: "Dezembro 2023",
    },
    {
      id: 4,
      title: "Canaletas para escoamento pluvial",
      description: "Construção de sistema de escoamento para águas pluviais",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-1-NTHVyBrnned9aIPpcYCpfQp0rNzdpu.png",
      category: "drenagem",
      location: "Fortaleza, CE",
      date: "Novembro 2023",
    },
    {
      id: 5,
      title: "Meio-fio para rotatória",
      description: "Instalação de meio-fio para nova rotatória em avenida principal",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-eRi6Q8MWWSm84JFvwcsfxNtB166nAz.png",
      category: "meio-fio",
      location: "Goiânia, GO",
      date: "Outubro 2023",
    },
    {
      id: 6,
      title: "Sistema de drenagem para loteamento",
      description: "Construção de canaletas para novo loteamento residencial",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-1-0SKei8WySVjIHdPeDYGrWHswc9YIZZ.png",
      category: "drenagem",
      location: "Belo Horizonte, MG",
      date: "Setembro 2023",
    },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="obras" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Obras Realizadas</h2>
          <p className="text-gray-600">
            Conheça alguns dos projetos executados com as extrusoras ERIMAK em todo o Brasil. Nossas máquinas estão
            presentes em obras de infraestrutura urbana, rodovias, loteamentos e muito mais.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <Tabs
            defaultValue="all"
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="w-full max-w-md"
          >
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="all">Todas</TabsTrigger>
              <TabsTrigger value="meio-fio">Meio-fio</TabsTrigger>
              <TabsTrigger value="drenagem">Drenagem</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg overflow-hidden border border-gray-200 hover:border-green-700 transition-all hover:shadow-lg group"
            >
              <div className="relative h-64">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button
                    className="bg-green-700 hover:bg-green-800"
                    onClick={() =>
                      window.open(
                        "https://wa.me/5517997398569?text=Gostaria%20de%20saber%20mais%20sobre%20o%20projeto%20" +
                          encodeURIComponent(project.title),
                        "_blank",
                      )
                    }
                  >
                    Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{project.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            className="bg-green-700 hover:bg-green-800"
            onClick={() =>
              window.open(
                "https://wa.me/5517997398569?text=Gostaria%20de%20conhecer%20mais%20projetos%20realizados%20com%20as%20extrusoras%20ERIMAK",
                "_blank",
              )
            }
          >
            Ver Mais Projetos <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
