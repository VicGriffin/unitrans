"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UNIVERSITIES, COUNTRIES } from "@/lib/constants"
import { Globe, MapPin } from "lucide-react"

export function UniversitiesGrid() {
  const getCountryFlag = (countryId: string) => {
    const country = COUNTRIES.find((c) => c.id === countryId)
    return country?.icon || "🌍"
  }

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Partner Universities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We work with over 500 leading universities worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {UNIVERSITIES.map((university) => (
            <Card
              key={university.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="p-6 space-y-4">
                {/* Header with flag and ranking */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getCountryFlag(university.country)}</span>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">
                    #{university.ranking}
                  </Badge>
                </div>

                {/* University name */}
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {university.name}
                </h3>

                {/* Location */}
                <div className="flex items-center text-sm text-gray-600 space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{university.location}</span>
                </div>

                {/* Intakes */}
                <div className="pt-2 border-t">
                  <p className="text-xs font-semibold text-gray-500 mb-2">
                    Available Intakes:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {university.intakes.map((intake) => (
                      <Badge
                        key={intake}
                        variant="outline"
                        className="text-xs"
                      >
                        {intake}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            These are just a few of our partner universities
          </p>
          <div className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold cursor-pointer">
            <Globe className="h-5 w-5" />
            <span>Explore all universities</span>
          </div>
        </div>
      </div>
    </section>
  )
}
