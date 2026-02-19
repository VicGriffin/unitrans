"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Target, Shield, TrendingUp } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Free Consultation",
      description: "Get expert guidance without any initial cost"
    },
    {
      icon: Users,
      title: "Expert Consultants",
      description: "15+ years of experience in international education"
    },
    {
      icon: Award,
      title: "Strong University Partnerships",
      description: "Direct connections with 850+ global universities"
    },
    {
      icon: Target,
      title: "Tailored Student-Focused Approach",
      description: "Personalized guidance based on your goals"
    },
    {
      icon: Shield,
      title: "Transparent & Ethical",
      description: "Honest advice with no hidden charges"
    },
    {
      icon: TrendingUp,
      title: "Result-Driven Services",
      description: "High success rate in admissions and visas"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-blue-600">Unitrans Visa Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for successful international education journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-blue-200">
              <CardContent className="p-8 text-center">
                <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <reason.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower students by simplifying the application, admission, and visa process while providing personalized guidance to ensure their successful transition to International Universities.
            </p>
          </div>
          <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="leading-relaxed">
              To become the leading trusted study abroad consultancy in East Africa by 2030
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Begin Your Study Abroad Journey Today with Unitrans
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Register via the link below and one of our student counsellors will contact you.
            </p>
            <a 
              href="https://app.coursefinder.ai/student-platform/88f4d47f/sign-up"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
