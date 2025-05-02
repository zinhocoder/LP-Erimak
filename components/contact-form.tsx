"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Construir a mensagem para o WhatsApp
    const message = `
Olá, gostaria de mais informações sobre as extrusoras da Erimak Brasil.

Nome: ${formData.name}
Empresa: ${formData.company}
Email: ${formData.email}
Telefone: ${formData.phone}
Interesse: ${formData.interest}
Mensagem: ${formData.message}
    `.trim()

    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(message)

    // Abrir o WhatsApp com a mensagem preenchida
    window.open(`https://wa.me/5517997398569?text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="contato" className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Entre em contato</h2>
            <p className="text-gray-600 mb-8">
              Estamos prontos para ajudar sua empresa a alcançar novos patamares de produtividade com as nossas Extrusoras.
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nome Completo
                  </label>
                  <Input id="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Empresa
                  </label>
                  <Input id="company" placeholder="Nome da empresa" value={formData.company} onChange={handleChange} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Telefone
                  </label>
                  <Input id="phone" placeholder="(00) 00000-0000" value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="text-sm font-medium">
                  Interesse
                </label>
                <Select onValueChange={handleSelectChange} value={formData.interest}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quote">Solicitar orçamento</SelectItem>
                    <SelectItem value="demo">Agendar demonstração</SelectItem>
                    <SelectItem value="support">Suporte técnico</SelectItem>
                    <SelectItem value="parts">Peças e acessórios</SelectItem>
                    <SelectItem value="other">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Descreva sua necessidade..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                Enviar Mensagem
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-green-700 mr-4 mt-0.5" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-gray-600">(17) 99739-8569</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-green-700 mr-4 mt-0.5" />
                  <div>
                    <p className="font-medium">E-mail</p>
                    <p className="text-gray-600">vendas@erimak.com.br</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-green-700 mr-4 mt-0.5" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-gray-600">Av. Industrial, 1000</p>
                    <p className="text-gray-600">São Paulo/SP - CEP 00000-000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-6">Horário de Atendimento</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Segunda a Sexta</span>
                  <span>08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span>09:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo e Feriados</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Suporte Técnico 24/7</h3>
                <p className="text-gray-600 mb-4">
                  Nosso time de especialistas está disponível 24 horas por dia, 7 dias por semana para garantir o
                  funcionamento contínuo da sua produção.
                </p>
                <Button
                  className="w-full bg-green-700 hover:bg-green-800"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5517997398569?text=Preciso%20de%20suporte%20técnico%20emergencial%20para%20a%20extrusora%20da%20Erimak%20Brasil",
                      "_blank",
                    )
                  }
                >
                  <Phone className="mr-2 h-4 w-4" /> Suporte Emergencial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
