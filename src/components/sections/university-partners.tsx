"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function UniversityPartners() {
  const universities = [
    { name: "Coventry University", country: "United Kingdom", flag: "🇬🇧" },
    { name: "University of Bath", country: "United Kingdom", flag: "🇬🇧" },
    { name: "University of Glasgow", country: "United Kingdom", flag: "🇬🇧" },
    { name: "London Metropolitan University", country: "United Kingdom", flag: "🇬🇧" },
    { name: "University of California", country: "USA", flag: "🇺🇸" },
    { name: "New York Institute", country: "USA", flag: "🇺🇸" },
    { name: "State University of New York", country: "USA", flag: "🇺🇸" },
    { name: "University of Utah", country: "USA", flag: "🇺🇸" },
    { name: "University of Europe", country: "Dubai", flag: "🇦🇪" },
    { name: "University of Bolton", country: "Dubai", flag: "🇦🇪" },
    { name: "Britts Imperial College", country: "Dubai", flag: "🇦🇪" },
    { name: "University of Regina", country: "Canada", flag: "🇨🇦" },
    { name: "Seneca Polytechnic", country: "Canada", flag: "🇨🇦" },
    { name: "University of Manitoba", country: "Canada", flag: "🇨🇦" },
    { name: "Toronto Metropolitan University", country: "Canada", flag: "🇨🇦" },
    { name: "Berkeley University", country: "California", flag: "🇺🇸" },
    { name: "University of Queensland", country: "Australia", flag: "🇦🇺" },
    { name: "University of Otago", country: "New Zealand", flag: "🇳🇿" },
    { name: "University of Waikato", country: "New Zealand", flag: "🇳🇿" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Top University <span className="text-blue-600">Partners</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partnering with world-renowned universities to provide you with the best education opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {universities.map((university, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">{university.flag}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{university.name}</h3>
                <p className="text-sm text-gray-600">{university.country}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              850+ University Partners Worldwide
            </h3>
            <p className="text-gray-600 mb-6">
              Our extensive network ensures you find the perfect match for your academic goals and career aspirations
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">33</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">850+</div>
                <div className="text-sm text-gray-600">Universities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">1M+</div>
                <div className="text-sm text-gray-600">Course Options</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
