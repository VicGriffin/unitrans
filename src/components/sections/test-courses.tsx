"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Users } from "lucide-react"

interface Course {
  id: string
  name: string
  duration: string
  level: string
  startDate: string
  maxStudents: number
  currentEnrolled: number
  description: string
  modules: string[]
}

const COURSES: Course[] = [
  {
    id: "ielts",
    name: "IELTS Preparation",
    duration: "8 weeks",
    level: "All Levels",
    startDate: "Ongoing",
    maxStudents: 15,
    currentEnrolled: 8,
    description: "Comprehensive IELTS preparation covering all four skills: listening, reading, writing, and speaking.",
    modules: [
      "Listening strategies",
      "Reading comprehension",
      "Academic writing",
      "Speaking fluency",
    ],
  },
  {
    id: "toefl",
    name: "TOEFL Preparation",
    duration: "8 weeks",
    level: "Intermediate+",
    startDate: "Ongoing",
    maxStudents: 15,
    currentEnrolled: 12,
    description: "Master the TOEFL iBT exam with focus on American English and digital test format.",
    modules: [
      "Reading section mastery",
      "Listening skills",
      "Speaking responses",
      "Integrated writing",
    ],
  },
  {
    id: "gre",
    name: "GRE Preparation",
    duration: "10 weeks",
    level: "Advanced",
    startDate: "Monthly",
    maxStudents: 12,
    currentEnrolled: 10,
    description: "Intensive GRE coaching focusing on quantitative reasoning, verbal reasoning, and analytical writing.",
    modules: [
      "Quantitative reasoning",
      "Verbal reasoning",
      "Analytical writing",
      "Test strategies",
    ],
  },
  {
    id: "gmat",
    name: "GMAT Preparation",
    duration: "10 weeks",
    level: "Advanced",
    startDate: "Monthly",
    maxStudents: 12,
    currentEnrolled: 6,
    description: "Complete GMAT preparation for business school admissions with focus on problem-solving skills.",
    modules: [
      "Quantitative section",
      "Verbal section",
      "Data insights",
      "Integrated reasoning",
    ],
  },
]

export function TestCoursesSection() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Our Preparation Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the course that aligns with your goals and aspirations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {COURSES.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="p-6 flex-1 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {course.name}
                  </h3>
                  <Badge className="bg-blue-100 text-blue-800">
                    {course.level}
                  </Badge>
                </div>

                <p className="text-gray-600 text-sm">{course.description}</p>

                {/* Course details */}
                <div className="grid grid-cols-2 gap-4 py-4 border-t border-b">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>
                      {course.currentEnrolled}/{course.maxStudents} enrolled
                    </span>
                  </div>
                </div>

                {/* Modules */}
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-2">
                    Course Modules:
                  </p>
                  <ul className="space-y-1">
                    {course.modules.map((module, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 flex items-center space-x-2"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        <span>{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm font-semibold text-gray-900">
                  Starts: {course.startDate}
                </p>
              </div>

              <div className="p-6 bg-gray-50 border-t">
                <Button className="w-full" asChild>
                  <a href={`/consultation?course=${course.id}`}>
                    Enroll Now
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
