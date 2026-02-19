"use client"

import { Card } from "@/components/ui/card"

interface Step {
  number: number
  title: string
  description: string
}

interface ServiceProcessProps {
  title: string
  description: string
  steps: Step[]
}

export function ServiceProcess({
  title,
  description,
  steps,
}: ServiceProcessProps) {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-4 w-8 h-1 bg-gradient-to-r from-blue-600 to-blue-600/0" />
              )}

              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
