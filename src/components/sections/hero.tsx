"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MessageCircle, Globe, GraduationCap, Plane } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-muted/20 py-20 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-scale">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-semibold text-foreground">
                <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                Trusted by 5000+ Students
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Study, Work & Travel Abroad with
                <span className="text-primary"> Expert Guidance</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Transform your dreams into reality with Unitrans Visa Solutions. 
                Your trusted partner for international education and visa success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/consultation">
                  Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Talk to an Advisor
                  <Phone className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center border-l border-r border-border">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-xs text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">5000+</div>
                <div className="text-xs text-muted-foreground">Students</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 space-y-4 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              {/* Feature Card 1 */}
              <div className="bg-card border border-border rounded-xl shadow-sm hover:shadow-md p-6 space-y-3 transition-all duration-200 group hover:border-accent/50">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Global Reach</h3>
                  <p className="text-sm text-muted-foreground">Study in top universities worldwide</p>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-card border border-border rounded-xl shadow-sm hover:shadow-md p-6 space-y-3 transition-all duration-200 group hover:border-accent/50">
                <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Expert Guidance</h3>
                  <p className="text-sm text-muted-foreground">Personalized counseling for your success</p>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-card border border-border rounded-xl shadow-sm hover:shadow-md p-6 space-y-3 transition-all duration-200 group hover:border-secondary/50">
                <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Plane className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Visa Success</h3>
                  <p className="text-sm text-muted-foreground">High visa approval rate with our support</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold animate-float shadow-lg">
              Limited Spots!
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold animate-float shadow-lg" style={{ animationDelay: '1s' }}>
              Next: Sept 2024
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        <Button
          size="icon"
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
          asChild
        >
          <Link href="https://wa.me/254700123456" target="_blank" aria-label="WhatsApp">
            <MessageCircle className="h-6 w-6" />
          </Link>
        </Button>
        <Button
          size="icon"
          className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
          asChild
        >
          <Link href="tel:+254700123456" aria-label="Call">
            <Phone className="h-6 w-6" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

