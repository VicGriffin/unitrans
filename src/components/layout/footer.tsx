import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground/95 text-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">UV</span>
              </div>
              <span className="font-bold text-lg">Unitrans</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Your trusted partner for international education and visa solutions. 
              Helping students achieve their dreams of studying abroad.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-background/60 hover:text-primary transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-background/60 hover:text-primary transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-background/60 hover:text-primary transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-background/60 hover:text-primary transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/study-abroad" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Study Abroad
                </Link>
              </li>
              <li>
                <Link href="/visa-services" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Visa Services
                </Link>
              </li>
              <li>
                <Link href="/test-preparation" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Test Preparation
                </Link>
              </li>
              <li>
                <Link href="/student-portal" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Blog & Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Study Destinations */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Study Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/study-abroad/uk" className="text-background/70 hover:text-primary transition-colors text-sm">
                  United Kingdom
                </Link>
              </li>
              <li>
                <Link href="/study-abroad/usa" className="text-background/70 hover:text-primary transition-colors text-sm">
                  United States
                </Link>
              </li>
              <li>
                <Link href="/study-abroad/canada" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Canada
                </Link>
              </li>
              <li>
                <Link href="/study-abroad/australia" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Australia
                </Link>
              </li>
              <li>
                <Link href="/study-abroad/europe" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Europe
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/80 text-sm">+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/80 text-sm">info@unitransvisa.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/80 text-sm">
                  Nairobi, Kenya<br />
                  Westlands, Sarit Centre
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2024 Unitrans Visa Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-background/60 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-background/60 hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
