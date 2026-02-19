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
    <section className="relative bg-gradient-to-br from-background via-background to-muted/20 py-20 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto animate-fade-in-scale">
          <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center group hover:bg-primary/20 transition-colors duration-200">
            <Icon className="h-8 w-8 text-primary" />
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              {subtitle}
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" asChild>
              <Link href="/consultation">
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
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
