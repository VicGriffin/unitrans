"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, Passport, BookOpen } from "lucide-react"
import Link from "next/link"

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  buttonText: string
  icon: "GraduationCap" | "Passport" | "BookOpen"
}

const iconMap = {
  GraduationCap: GraduationCap,
  Passport: Passport,
  BookOpen: BookOpen,
}

export function ServiceHero({
  title,
  subtitle,
  description,
  buttonText,
  icon,
}: ServiceHeroProps) {
  const Icon = iconMap[icon]

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
            <Icon className="h-8 w-8 text-blue-600" />
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              {subtitle}
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/consultation">
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
