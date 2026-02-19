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
    <section className="py-20 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-4 w-8 h-1 bg-gradient-to-r from-primary to-primary/30" />
              )}

              <Card className="p-6 h-full border border-border hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold text-lg group-hover:shadow-lg transition-all duration-200">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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
