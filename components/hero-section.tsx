"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>
      </div>

      <div className="container relative z-10 pt-6 pb-16">
        {/* Logo no topo da seção hero */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo-erimak-brasil.png"
            alt="ERIMAK BRASIL"
            width={240}
            height={120}
            className="h-auto"
            priority
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Extrusoras de Perfis de Concreto</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-xl">
              Revolucione a produção de perfis de concreto com a mais avançada tecnologia do mercado.
            </p>
            <div className="inline-block bg-green-700 px-4 py-2 rounded-lg text-sm font-medium mb-6">
              Conheça também nosso lançamento 2025: ecoGutter - com tecnologia sustentável
            </div>
            <div>
              <Button
                size="lg"
                className="bg-green-700 hover:bg-green-800 text-white"
                onClick={() =>
                  window.open(
                    "https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20extrusora%20MaxGutter%20da%20Erimak%20Brasil",
                    "_blank",
                  )
                }
              >
                Solicitar Orçamento <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[650px]">
              <Image
                src="/3extrusoras.png"
                alt="Extrusora MaxGutter ERIMAK"
                width={400}
                height={400}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar - Corrigido para manter o verde sem degradê escuro */}
      <div className="bg-green-700 py-4 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold">+500</p>
              <p className="text-xs md:text-sm mt-1">Clientes Atendidos</p>
            </div>
            <div>
              <p className="text-2xl font-bold">+20</p>
              <p className="text-xs md:text-sm mt-1">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-2xl font-bold">+30%</p>
              <p className="text-xs md:text-sm mt-1">Aumento de Produtividade</p>
            </div>
            <div>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-xs md:text-sm mt-1">Satisfação Garantida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
