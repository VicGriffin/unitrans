"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

interface ServiceFAQProps {
  title: string
  faqs: FAQ[]
}

export function ServiceFAQ({ title, faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-left font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-gray-600 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
