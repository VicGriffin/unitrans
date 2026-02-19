"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, FileText, Plane, CreditCard, FileCheck, Home, Calendar } from "lucide-react"

export function Process() {
  const steps = [
    {
      icon: FileText,
      title: "Initiate Application",
      description: "Start your study abroad journey with us",
      details: "Submit your details and preferences"
    },
    {
      icon: CheckCircle,
      title: "Receive Offer Letter",
      description: "Get admission confirmation from universities",
      details: "Timeline: 1-7 days"
    },
    {
      icon: CreditCard,
      title: "Pay First Semester Fees",
      description: "Secure your admission spot",
      details: "Payment confirmation and receipt"
    },
    {
      icon: FileCheck,
      title: "Enrollment Confirmation",
      description: "Receive official enrollment letter",
      details: "Document verification process"
    },
    {
      icon: Plane,
      title: "Visa + Medical + Biometrics",
      description: "Complete visa formalities",
      details: "Medical tests, biometrics, insurance"
    },
    {
      icon: Home,
      title: "Book Accommodation",
      description: "Secure your housing abroad",
      details: "Student housing or private options"
    },
    {
      icon: Calendar,
      title: "Book Flight",
      description: "Plan your travel arrangements",
      details: "Student discounts and baggage allowance"
    }
  ]

  const intakes = ["January", "March", "May", "September", "November"]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Application <span className="text-blue-600">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined 7-step process ensures smooth admission to your dream university
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
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
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Available Intakes</h3>
            <div className="flex flex-wrap gap-3">
              {intakes.map((intake, index) => (
                <span key={index} className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {intake}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mt-4">
              Multiple intake options throughout the year for your convenience
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tuition Fee Range</h3>
            <p className="text-gray-600 mb-4">
              Tuition fees vary depending on:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                <span>University ranking and reputation</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                <span>Country and location</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                <span>Program level and duration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
