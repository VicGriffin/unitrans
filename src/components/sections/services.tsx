"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { University, FileText, BookOpen, DollarSign, Home, Plane, Users, Briefcase, Award, Languages } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: University,
      title: "University Placement",
      description: "We assist students in choosing the right program and institution, preparing compiling applications and ensuring timely admissions into globally recognized universities.",
      destinations: ["UK", "USA", "Canada", "Germany", "Australia", "New Zealand", "Ireland", "Malaysia"],
      highlight: "Wide choice of destinations with smooth application process"
    },
    {
      icon: FileText,
      title: "Application Requirements",
      description: "Complete documentation support for university and student visa applications.",
      requirements: [
        "Identification Documents (Passport, ID card, Birth Certificate)",
        "All Academic Documents",
        "Updated CV (if applicable)",
        "Work Recommendation (if applicable)",
        "IELTS/TOEFL/PTE Certificate (if applicable)",
        "Bank Statements",
        "Statement of Purpose"
      ]
    },
    {
      icon: BookOpen,
      title: "IELTS Training & Test Preparation",
      description: "In partnership with British Council, we offer IELTS training in Listening, Speaking, Writing and Reading.",
      details: {
        training: "Ksh 9,900 (Online) & Ksh 14,900 (Physical classes)",
        exam: "Ksh 35,900 paid to British Council",
        benefit: "Equips students with skills and confidence needed for high IELTS scores"
      }
    },
    {
      icon: Languages,
      title: "German Language Training",
      description: "German language is widely spoken in Europe - Germany, Austria, Switzerland, Luxembourg and parts of Belgium.",
      benefits: ["Study Abroad", "Work Abroad", "Aupair opportunities", "Ausbildung opportunities", "Scholarships"],
      modules: [
        { level: "A1", fee: "Ksh 19,000" },
        { level: "A2", fee: "Ksh 19,000" },
        { level: "B1", fee: "Ksh 29,000" },
        { level: "B2", fee: "Ksh 29,000" }
      ],
      duration: "2-3 months per module"
    },
    {
      icon: Award,
      title: "Scholarships",
      description: "Our Global universities have plenty of scholarships and bursaries for ambitious and aspiring international students.",
      offerings: ["High value scholarships", "Guidance on how to apply", "Country-based scholarships"]
    },
    {
      icon: DollarSign,
      title: "Education Loans",
      description: "ELAN LOAN - Secure & unsecured loans with hassle-free documentation.",
      features: ["Pre visa services", "Hustle free documentation", "Quick sanction of loans"]
    },
    {
      icon: Home,
      title: "Accommodation Arrangements",
      description: "Finding the right place is one of the most important parts in settling into a new country.",
      benefit: "End-to-end accommodation support to ensure students are safe, comfortable and ready to focus on studies"
    },
    {
      icon: Plane,
      title: "Student Visa Processing",
      description: "From document preparation to interview readiness, our team offers end-to-end support.",
      services: ["Expert guidance on country-specific visa rules", "Financial statements compilation", "Admission letters", "Medical reports", "Required documents"]
    },
    {
      icon: Users,
      title: "Flight Booking",
      description: "We help students find cost-effective and convenient travel options.",
      benefits: ["Special student discounts", "Extra baggage allowance", "Guidance on transit visas", "Airport pickup coordination"]
    },
    {
      icon: Briefcase,
      title: "Pre & Post Departure Services",
      description: "From orientation sessions to cultural adaptation tips - we ensure our students are supported even after departure.",
      services: ["Orientation sessions", "Accommodation guidance", "Airport pickup", "Cultural adaptation tips"]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support for your entire study abroad journey
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-blue-200 transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-gray-900 mb-2">{service.title}</CardTitle>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                {service.destinations && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Available Destinations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.destinations.map((dest, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {dest}
                        </span>
                      ))}
                    </div>
                    {service.highlight && (
                      <p className="text-sm text-gray-600 mt-2 italic">{service.highlight}</p>
                    )}
                  </div>
                )}

                {service.requirements && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Required Documents:</h4>
                    <ul className="space-y-1">
                      {service.requirements.map((req, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <div className="h-2 w-2 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.details && (
                  <div className="mt-4 grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-gray-900">Training Charges</p>
                      <p className="text-sm text-gray-600">{service.details.training}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-gray-900">Exam Fee</p>
                      <p className="text-sm text-gray-600">{service.details.exam}</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-gray-900">Benefit</p>
                      <p className="text-sm text-gray-600">{service.details.benefit}</p>
                    </div>
                  </div>
                )}

                {service.modules && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Course Modules:</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                      {service.modules.map((module, i) => (
                        <div key={i} className="bg-gray-50 p-3 rounded-lg text-center">
                          <p className="font-semibold text-blue-600">Module {module.level}</p>
                          <p className="text-sm text-gray-600">{module.fee}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Duration: {service.duration}</p>
                  </div>
                )}

                {service.offerings && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">We Offer:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.offerings.map((offering, i) => (
                        <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {offering}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.benefits && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, i) => (
                        <span key={i} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.features && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <div className="h-2 w-2 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.services && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Services Include:</h4>
                    <ul className="space-y-1">
                      {service.services.map((serv, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <div className="h-2 w-2 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          {serv}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.benefit && (
                  <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">{service.benefit}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
