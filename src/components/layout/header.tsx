"use client"

import Link from "next/link"
import { Phone, MessageCircle, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">UV</span>
          </div>
          <span className="font-bold text-xl">Unitrans Visa</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/study-abroad" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Study Abroad
          </Link>
          <Link href="/visa-services" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Visa Services
          </Link>
          <Link href="/test-preparation" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Test Preparation
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" size="sm" asChild>
            <Link href="/student-portal">
              Student Portal
            </Link>
          </Button>
          <Button size="sm">
            Free Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-3">
            <Link href="/study-abroad" className="block text-sm font-medium hover:text-blue-600 transition-colors">
              Study Abroad
            </Link>
            <Link href="/visa-services" className="block text-sm font-medium hover:text-blue-600 transition-colors">
              Visa Services
            </Link>
            <Link href="/test-preparation" className="block text-sm font-medium hover:text-blue-600 transition-colors">
              Test Preparation
            </Link>
            <Link href="/about" className="block text-sm font-medium hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="block text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <div className="pt-3 space-y-2">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/student-portal">
                  Student Portal
                </Link>
              </Button>
              <Button size="sm" className="w-full">
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
