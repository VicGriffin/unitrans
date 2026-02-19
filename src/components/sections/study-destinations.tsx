"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Globe, MapPin } from "lucide-react"

export function StudyDestinations() {
  const destinations = [
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "USA", flag: "🇺🇸" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "New Zealand", flag: "🇳🇿" },
    { name: "Ireland", flag: "🇮🇪" },
    { name: "Europe", flag: "🇪🇺" },
    { name: "UAE", flag: "🇦🇪" },
    { name: "Malaysia", flag: "🇲🇾" }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Study <span className="text-blue-600">Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are bringing overseas education within everyone&apos;s reach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {destinations.map((destination, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{destination.flag}</div>
                <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
                <div className="mt-2 text-blue-600">
                  <MapPin className="h-5 w-5 mx-auto" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">65+ Global Offices</h3>
            </div>
            <p className="text-gray-600">
              Our extensive network ensures you get support wherever you are in your study abroad journey
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
