"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Partners() {
  const partners = [
    { name: "University of Oxford", logo: "🎓", type: "UK" },
    { name: "Harvard University", logo: "📚", type: "USA" },
    { name: "University of Toronto", logo: "🏛️", type: "Canada" },
    { name: "University of Melbourne", logo: "🎯", type: "Australia" },
    { name: "Trinity College Dublin", logo: "🔬", type: "Ireland" },
    { name: "Technical University Munich", logo: "⚙️", type: "Germany" },
    { name: "National University of Singapore", logo: "🌏", type: "Singapore" },
    { name: "University of Auckland", logo: "🏝️", type: "New Zealand" }
  ]

  const achievements = [
    { number: "200+", label: "Partner Universities" },
    { number: "15+", label: "Countries" },
    { number: "95%", label: "Success Rate" },
    { number: "5000+", label: "Students Placed" }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Trusted by
            <span className="text-blue-600"> Top Universities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have partnerships with prestigious universities worldwide to help you secure admission
          </p>
        </div>

        {/* University Partners */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {partners.map((partner, index) => (
            <Card key={index} className="group hover:shadow-md transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {partner.logo}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{partner.name}</h3>
                <Badge variant="outline" className="text-xs">
                  {partner.type}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-blue-600">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Become Our Partner University
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join our network of prestigious universities and connect with talented students from Kenya and across Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Partner With Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
