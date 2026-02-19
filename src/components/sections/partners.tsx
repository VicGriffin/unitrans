"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Partners() {
  const partners = [
    { name: "University of Oxford", logo: "🎓", type: "UK" },
    { name: "Harvard University", logo: "📚", type: "USA" },
    { name: "University of Toronto", logo: "🏛️", type: "Canada" },
    { name: "University of Melbourne", logo: "🎯", type: "Australia" },
    { name: "Trinity College Dublin", logo: "🔬", type: "Ireland" },
    { name: "Technical University Munich", logo: "⚙️", type: "Germany" },
    { name: "National University of Singapore", logo: "🌏", type: "Singapore" },
    { name: "University of Auckland", logo: "🏝️", type: "New Zealand" }
  ]

  const achievements = [
    { number: "200+", label: "Partner Universities" },
    { number: "15+", label: "Countries" },
    { number: "95%", label: "Success Rate" },
    { number: "5000+", label: "Students Placed" }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Trusted by
            <span className="text-primary"> Top Universities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            We have partnerships with prestigious universities worldwide to help you secure admission
          </p>
        </div>

        {/* University Partners */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {partners.map((partner, index) => (
            <Card key={index} className="group border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {partner.logo}
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">{partner.name}</h3>
                <Badge variant="outline" className="text-xs">
                  {partner.type}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-primary">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium text-sm">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">
              Become Our Partner University
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Join our network of prestigious universities and connect with talented students from Kenya and across Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/partner">
                  Partner With Us
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/partnership">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
