"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      company: "Construtora Horizonte",
      image: "/placeholder.svg?height=100&width=100&text=CS",
      quote:
        "A Extrusora EcoGutter revolucionou nossa produção. Conseguimos aumentar nossa capacidade em 40% e reduzir custos operacionais significativamente.",
      rating: 5,
    },
    {
      name: "Ana Ferreira",
      company: "Pré-Moldados Estrutura",
      image: "/placeholder.svg?height=100&width=100&text=AF",
      quote:
        "Após 6 meses utilizando a MaxGutter, nossa produtividade aumentou drasticamente. O suporte técnico da ERIMAK é excepcional.",
      rating: 5,
    },
    {
      name: "Roberto Mendes",
      company: "Concreto & Cia",
      image: "/placeholder.svg?height=100&width=100&text=RM",
      quote:
        "A qualidade dos perfis produzidos com a MaxGutter é incomparável. Nossos clientes notaram a diferença imediatamente.",
      rating: 4,
    },
    {
      name: "Mariana Costa",
      company: "MC Construções",
      image: "/placeholder.svg?height=100&width=100&text=MC",
      quote:
        "Investir na MidGutter foi a melhor decisão que tomamos. O retorno sobre o investimento veio em menos de um ano.",
      rating: 5,
    },
  ]

  return (
    <section id="depoimentos" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">O que nossos clientes dizem</h2>
          <p className="text-gray-600">
            Centenas de empresas já transformaram sua produção com a Extrusora MiniGutter. Confira alguns depoimentos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200 hover:border-green-700 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div id="resultados" className="mt-16 bg-green-700 text-white p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Resultados Comprovados</h3>
              <p className="mb-6">
                Nossos clientes relatam resultados impressionantes após a implementação das nossas Extrusoras em suas
                linhas de produção.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-3xl font-bold">+40%</p>
                  <p className="text-sm mt-1">Aumento de Produção</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-3xl font-bold">-25%</p>
                  <p className="text-sm mt-1">Redução de Custos</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-3xl font-bold">+35%</p>
                  <p className="text-sm mt-1">Melhoria na Qualidade</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-3xl font-bold">12</p>
                  <p className="text-sm mt-1">Meses para ROI</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
              <Image
                src="/consultorerimak.jpg?height=400&width=400&text=Casos de Sucesso"
                alt="Casos de Sucesso"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-lg font-medium">
                  Descubra como a Erimak transformou a produção da Construtora Horizonte
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
