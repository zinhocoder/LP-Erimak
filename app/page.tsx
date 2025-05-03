"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import HeroSection from "@/components/hero-section"
import TestimonialSection from "@/components/testimonial-section"
import FeatureSection from "@/components/feature-section"
import ContactForm from "@/components/contact-form"
import ProductDemo from "@/components/product-demo"
import SpecsSection from "@/components/specs-section"

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Revolucione sua produção com as Extrusoras de alta tecnologia da Erimak
              </h2>
              <p className="text-gray-600 mb-6">
                As Extrusoras de Perfis de Concreto representam o que há de mais avançado em tecnologia para a
                produção de elementos pré-fabricados de concreto. Desenvolvidas pela ERIMAK, líder no setor de máquinas
                para construção civil, as nossas máquinas combinam precisão, eficiência e durabilidade.
              </p>
              <p className="text-gray-600 mb-6">
                Com mais de 20 anos de experiência no mercado, a ERIMAK entende as necessidades dos profissionais da
                construção civil e desenvolveu uma linha completa de extrusoras para atender diferentes demandas: a
                MaxGutter para alta produção, a MidGutter para médio porte, e nossa novidade, a ecoGutter, com foco em
                sustentabilidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  className="bg-green-700 hover:bg-green-800"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20extrusora%20MaxGutter%20da%20Erimak%20Brasil",
                      "_blank",
                    )
                  }
                >
                  Solicitar Demonstração <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/3juntaserimak.png?height=400&width=600"
                alt="Extrusora MaxGutter"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* Product Demo Section */}
      <ProductDemo />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Specifications Section */}
      <SpecsSection />

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para revolucionar sua produção?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Junte-se às centenas de empresas que já transformaram seus processos produtivos com as extrusoras ERIMAK.
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-white text-green-700 hover:bg-gray-100"
              onClick={() =>
                window.open(
                  "https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20extrusoras%20da%20Erimak%20Brasil",
                  "_blank",
                )
              }
            >
              Solicitar Orçamento <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image src="/logo-white.png" alt="ERIMAK" width={120} height={40} className="h-10 w-auto mb-4" />
              <p className="text-sm mt-4">
                Líder em soluções para a indústria da construção civil, com foco em inovação e qualidade.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Produtos</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("models")}
                    className="text-sm hover:text-white transition-colors"
                  >
                    MaxGutter
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("models")}
                    className="text-sm hover:text-white transition-colors"
                  >
                    MidGutter
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("models")}
                    className="text-sm hover:text-white transition-colors"
                  >
                    ecoGutter
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("resultados")}
                    className="text-sm hover:text-white transition-colors"
                  >
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("depoimentos")}
                    className="text-sm hover:text-white transition-colors"
                  >
                    Clientes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      window.open(
                        "https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20extrusoras%20da%20Erimak%20Brasil",
                        "_blank",
                      )
                    }
                    className="text-sm hover:text-white transition-colors"
                  >
                    Notícias
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      window.open(
                        "https://wa.me/5517997398569?text=Desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20extrusoras%20da%20Erimak%20Brasil",
                        "_blank",
                      )
                    }
                    className="text-sm hover:text-white transition-colors"
                  >
                    Carreiras
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2025 ERIMAK. Todos os direitos reservados. Desenvolvido por{" "}
              <a
                href="https://www.devpro.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400"
              >
                DevPro
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
