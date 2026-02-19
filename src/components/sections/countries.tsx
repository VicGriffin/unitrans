"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Building, DollarSign } from "lucide-react"
import Link from "next/link"

export function Countries() {
  const countries = [
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      description: "World-class education with rich cultural heritage",
      students: "5000+",
      universities: "150+",
      avgCost: "$15,000 - $25,000",
      popularCourses: ["Business", "Engineering", "Medicine", "Law"],
      badge: "Most Popular"
    },
    {
      name: "United States",
      flag: "🇺🇸",
      description: "Land of opportunities and innovation",
      students: "4000+",
      universities: "200+",
      avgCost: "$20,000 - $40,000",
      popularCourses: ["Computer Science", "MBA", "Engineering", "Healthcare"],
      badge: "Top Choice"
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      description: "Quality education with immigration pathways",
      students: "3500+",
      universities: "100+",
      avgCost: "$15,000 - $30,000",
      popularCourses: ["IT", "Healthcare", "Business", "Hospitality"],
      badge: "PR Friendly"
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      description: "Excellent education with great lifestyle",
      students: "2500+",
      universities: "50+",
      avgCost: "$18,000 - $35,000",
      popularCourses: ["Nursing", "Engineering", "Business", "Tourism"],
      badge: "Work Rights"
    },
    {
      name: "Ireland",
      flag: "🇮🇪",
      description: "Tech hub with post-study work options",
      students: "2000+",
      universities: "30+",
      avgCost: "$12,000 - $25,000",
      popularCourses: ["Software", "Pharma", "Business", "Engineering"],
      badge: "Tech Focus"
    },
    {
      name: "Europe",
      flag: "🇪🇺",
      description: "Affordable education with diverse cultures",
      students: "3000+",
      universities: "100+",
      avgCost: "$8,000 - $20,000",
      popularCourses: ["Engineering", "Business", "Arts", "Sciences"],
      badge: "Affordable"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Study in Your
            <span className="text-primary"> Dream Country</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Choose from 15+ countries with world-class universities and excellent career opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {countries.map((country) => (
            <Card key={country.name} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl">{country.flag}</span>
                    <div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {country.name}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {country.badge}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-gray-600">
                  {country.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-blue-50 rounded-lg p-2">
                    <Users className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-blue-900">{country.students}</div>
                    <div className="text-xs text-gray-600">Students</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2">
                    <Building className="h-4 w-4 text-green-600 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-green-900">{country.universities}</div>
                    <div className="text-xs text-gray-600">Universities</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2">
                    <DollarSign className="h-4 w-4 text-purple-600 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-purple-900">Yearly</div>
                    <div className="text-xs text-gray-600">Cost</div>
                  </div>
                </div>

                {/* Popular Courses */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">Popular Courses:</div>
                  <div className="flex flex-wrap gap-1">
                    {country.popularCourses.map((course) => (
                      <Badge key={course} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Cost Range */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm text-gray-600">Average Yearly Cost:</div>
                  <div className="font-semibold text-gray-900">{country.avgCost}</div>
                </div>

                {/* CTA Button */}
                <Button className="w-full group-hover:bg-blue-600 transition-colors" asChild>
                  <Link href={`/study-abroad/${country.name.toLowerCase().replace(' ', '-')}`}>
                    Explore {country.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can&apos;t Find Your Country?
            </h3>
            <p className="text-gray-600 mb-6">
              We support many more destinations including UAE, Malaysia, New Zealand, and more
            </p>
            <Button variant="outline" size="lg">
              View All Countries
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
