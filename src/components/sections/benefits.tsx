"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Plane, Home, Users, Languages, TrendingUp, Award } from "lucide-react"

export function Benefits() {
  const benefits = [
    { icon: GraduationCap, title: "World class education", description: "Access top-ranked universities globally" },
    { icon: Briefcase, title: "Work part time", description: "Gain work experience while studying" },
    { icon: Plane, title: "Post study work visa", description: "Stay back and work after graduation" },
    { icon: Home, title: "Permanent residency pathway", description: "Opportunity to settle permanently" },
    { icon: Users, title: "Experience new culture", description: "Immerse in diverse cultural experiences" },
    { icon: Languages, title: "Language skills", description: "Learn new languages and improve communication" },
    { icon: TrendingUp, title: "High earning potential", description: "Better career opportunities and salaries" },
    { icon: Award, title: "Competitive edge", description: "Stand out in the global job market" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Benefits of <span className="text-blue-600">Studying Abroad</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your future with international education opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
