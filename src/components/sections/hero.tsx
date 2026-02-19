"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MessageCircle, Globe, GraduationCap, Plane } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                Trusted by 5000+ Students
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Study, Work & Travel Abroad with
                <span className="text-blue-600"> Expert Guidance</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your dreams into reality with Unitrans Visa Solutions. 
                Your trusted partner for international education and visa success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/consultation">
                  Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/contact">
                  Talk to an Advisor
                  <Phone className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5000+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Global Reach</h3>
                    <p className="text-sm text-gray-600">Study in top universities worldwide</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Expert Guidance</h3>
                    <p className="text-sm text-gray-600">Personalized counseling for your success</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Plane className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Visa Success</h3>
                    <p className="text-sm text-gray-600">High visa approval rate with our support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-semibold animate-float">
              Limited Spots Available!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold animate-float" style={{ animationDelay: '1s' }}>
              Next Intake: Sept 2024
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        <Button
          size="lg"
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg"
          asChild
        >
          <Link href="https://wa.me/254700123456" target="_blank">
            <MessageCircle className="h-6 w-6" />
          </Link>
        </Button>
        <Button
          size="lg"
          className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg"
          asChild
        >
          <Link href="tel:+254700123456">
            <Phone className="h-6 w-6" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

