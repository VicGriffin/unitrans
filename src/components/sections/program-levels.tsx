"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Award, GraduationCap, Clock, GitBranch, Users, Languages, Monitor } from "lucide-react"

export function ProgramLevels() {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
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
      </div>
    </section>
  )
}
