"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { BookOpen, Award, GraduationCap, Clock, GitBranch, Users, Languages, Monitor, ChevronDown, ChevronUp } from "lucide-react"

export function ProgramLevels() {
  const [showAll, setShowAll] = useState(false)

  const programs = [
    { icon: BookOpen, title: "Undergraduate", description: "Diploma/Certificate/Associate Degree" },
    { icon: Award, title: "Undergraduate", description: "Bachelor's Degree Programs" },
    { icon: GraduationCap, title: "Post graduate", description: "Diploma/Certificate Programs" },
    { icon: Clock, title: "Foundation", description: "Preparation Programs" },
    { icon: BookOpen, title: "Short term courses", description: "Skill Development Programs" },
    { icon: GitBranch, title: "Pathway programs", description: "Bridge to Degree Programs" },
    { icon: Users, title: "Twinning programs", description: "UG/PG Collaborative Programs" },
    { icon: Languages, title: "English Language Programs", description: "Language Proficiency Courses" },
    { icon: Monitor, title: "Online/Distance Learning", description: "Flexible Study Options" }
  ]

  const displayPrograms = showAll ? programs : programs.slice(0, 6)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Program <span className="text-blue-600">Levels</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right program level for your academic journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayPrograms.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <program.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-sm text-gray-600">{program.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Collapsible remaining programs */}
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
                    Show More Programs <ChevronDown className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {programs.slice(6).map((program, index) => (
                <Card key={index + 6} className="hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <program.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{program.title}</h3>
                        <p className="text-sm text-gray-600">{program.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  )
}
