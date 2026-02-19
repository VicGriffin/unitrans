"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Your Journey to
            <span className="text-blue-600"> International Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process ensures a smooth and successful journey from application to arrival
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <Card className="h-full border-2 border-gray-100 hover:border-blue-200 transition-colors">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-500 text-center">
                    {step.details}
                  </p>
                </CardContent>
              </Card>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-blue-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of students who have successfully studied abroad with our guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Application
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Download Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
