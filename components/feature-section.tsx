import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Zap, Award, Clock, Sun, Fingerprint } from "lucide-react"

export default function FeatureSection() {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-green-700" />,
      title: "Alta Produtividade",
      description: "Aumente sua produção em até 30% com a tecnologia avançada da MaxGutter.",
    },
    {
      icon: <Award className="h-10 w-10 text-green-700" />,
      title: "Precisão Incomparável",
      description: "Sistema de controle avançado que garante perfis de concreto com acabamento perfeito.",
    },
    {
      icon: <Clock className="h-10 w-10 text-green-700" />,
      title: "Rápida Configuração",
      description: "Troca de moldes e ajustes em minutos, minimizando o tempo de inatividade.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-green-700" />,
      title: "Suporte Técnico Especializado",
      description: "Equipe de suporte disponível 24/7 para garantir o funcionamento contínuo da sua produção.",
    },
    {
      icon: <Sun className="h-10 w-10 text-green-700" />,
      title: "Linha Completa de Soluções",
      description: "Da MaxGutter à ecoGutter, temos a solução ideal para cada necessidade e orçamento.",
    },
    {
      icon: <Fingerprint className="h-10 w-10 text-green-700" />,
      title: "Tecnologia de Ponta",
      description: "Conheça nossa nova ecoGutter com sistema de ignição biométrica e tecnologia fotovoltaica.",
    },
  ]

  return (
    <section id="beneficios" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Por que escolher as Extrusoras ERIMAK?</h2>
          <p className="text-gray-600">
            Desenvolvidas com tecnologia de ponta, nossas extrusoras oferecem benefícios incomparáveis que transformarão
            sua produção de perfis de concreto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-200 hover:border-green-700 transition-colors">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg border border-gray-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Vantagens Competitivas</h3>
              <p className="text-gray-600 mb-6">
                As Extrusoras ERIMAK foram projetadas para superar os desafios mais complexos da indústria de
                pré-fabricados de concreto, oferecendo vantagens significativas em relação à concorrência.
              </p>
              <ul className="space-y-3">
                {[
                  "Linha completa para diferentes necessidades e orçamentos",
                  "Tecnologia ecoGutter com sistema de extração com siya",
                  "Opção com tecnologia fotovoltaica para economia de energia",
                  "Sistema de ignição biométrica para segurança avançada",
                  "Redução de até 40% no tempo de produção",
                  "Garantia estendida de 3 anos em todas as peças",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold mb-4 text-green-700">ROI Comprovado</h4>
              <p className="text-gray-600 mb-6">
                Nossos clientes relatam retorno sobre o investimento em menos de 12 meses após a aquisição das
                extrusoras ERIMAK.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Aumento de Produtividade</span>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-700 h-2 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Redução de Custos Operacionais</span>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-700 h-2 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Qualidade do Produto Final</span>
                    <span className="text-sm font-medium">35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-700 h-2 rounded-full" style={{ width: "35%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
