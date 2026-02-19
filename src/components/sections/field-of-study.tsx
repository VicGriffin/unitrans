"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FieldOfStudy() {
  const [showAll, setShowAll] = useState(false)

  const fields = [
    "Architecture", "Agriculture", "Arts", "Commerce, Business, Administration",
    "Computer science & Information Technology", "Education", "Engineering", "Environmental sciences",
    "Medicine & Health", "Humanities", "Journalism", "Law", "Life sciences", "Manufacturing",
    "Mathematics & Statistics", "Social sciences", "Veterinary"
  ]

  const displayFields = showAll ? fields : fields.slice(0, 8)

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Field of <span className="text-blue-600">Study</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore diverse academic disciplines across global universities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {displayFields.map((field, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-blue-200">
              <CardContent className="p-4 text-center">
                <h3 className="text-sm font-medium text-gray-900">{field}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Collapsible remaining fields */}
        <Collapsible open={showAll} onOpenChange={setShowAll}>
          <CollapsibleTrigger asChild>
            <div className="text-center mb-8">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                {showAll ? (
                  <>
                    Show Less <ChevronUp className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show More Fields <ChevronDown className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
              {fields.slice(8).map((field, index) => (
                <Card key={index + 8} className="hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-blue-200">
                  <CardContent className="p-4 text-center">
                    <h3 className="text-sm font-medium text-gray-900">{field}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        <div className="text-center">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can&apos;t find your field?
            </h3>
            <p className="text-gray-600 mb-6">
              We offer guidance for over 1,000,000 course options across all disciplines
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Explore All Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
