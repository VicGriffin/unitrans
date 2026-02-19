"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, FileText, Plane, GraduationCap } from "lucide-react"

export function Process() {
  const steps = [
    {
      icon: FileText,
      title: "Apply",
      description: "Submit your application with our expert guidance",
      details: "Document preparation, university selection, application submission"
    },
    {
      icon: CheckCircle,
      title: "Admit",
      description: "Receive your admission offer letter",
      details: "Offer letter review, acceptance, enrollment confirmation"
    },
    {
      icon: GraduationCap,
      title: "Visa",
      description: "Complete your visa application process",
      details: "Visa documentation, interview preparation, submission"
    },
    {
      icon: Plane,
      title: "Travel",
      description: "Begin your international education journey",
      details: "Pre-departure briefing, travel arrangements, accommodation"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Your Journey to
            <span className="text-primary"> International Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our proven 4-step process ensures a smooth and successful journey from application to arrival
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="relative group">
              <Card className="h-full border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md group-hover:shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="bg-primary text-primary-foreground rounded-lg h-8 w-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <CardTitle className="text-lg text-foreground">{step.title}</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground text-sm">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    {step.details}
                  </p>
                </CardContent>
              </Card>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary/50 to-primary/20"></div>
                  <ArrowRight className="h-5 w-5 text-primary/50 -ml-2" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Ready to Start Your Journey?
            </h3>
            <p className="text-muted-foreground">
              Join thousands of students who have successfully studied abroad with our guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link href="/consultation">
                  Start Application
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/resources">
                  Download Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
