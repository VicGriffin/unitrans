"use client"

import Link from "next/link"
import { Phone, MessageCircle, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/98 backdrop-blur supports-[backdrop-filter]:bg-background/95 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2.5 group">
          <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center group-hover:shadow-lg transition-all duration-200 group-hover:scale-105">
            <span className="text-primary-foreground font-bold text-sm">UV</span>
          </div>
          <span className="font-bold text-lg text-foreground hidden sm:inline">Unitrans</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/study-abroad" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-200">
            Study Abroad
          </Link>
          <Link href="/visa-services" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-200">
            Visa Services
          </Link>
          <Link href="/test-preparation" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-200">
            Test Preparation
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-200">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-200">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-2.5">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/student-portal">
              Student Portal
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/consultation">
              Free Consultation
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-slide-in-down">
          <div className="container py-4 space-y-3">
            <Link href="/study-abroad" className="block text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              Study Abroad
            </Link>
            <Link href="/visa-services" className="block text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              Visa Services
            </Link>
            <Link href="/test-preparation" className="block text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              Test Preparation
            </Link>
            <Link href="/about" className="block text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="block text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              Contact
            </Link>
            <div className="pt-3 space-y-2">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/student-portal">
                  Student Portal
                </Link>
              </Button>
              <Button size="sm" className="w-full" asChild>
                <Link href="/consultation">
                  Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
