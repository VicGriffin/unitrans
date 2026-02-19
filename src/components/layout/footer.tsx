import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">UV</span>
              </div>
              <span className="font-bold text-xl">Unitrans Visa</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted partner for international education and visa solutions. 
              Helping students achieve their dreams of studying abroad.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/study-abroad" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Study Abroad
                </Link>
              </li>
              <li>
                <Link href="/visa-services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Visa Services
                </Link>
              </li>
              <li>
                <Link href="/test-preparation" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Test Preparation
                </Link>
              </li>
              <li>
                <Link href="/student-portal" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Blog & Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Study Destinations */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Study Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/study-abroad/uk" className="text-gray-300 hover:text-white transition-colors text-sm">
                  United Kingdom
                </Link>
              </li>
              <li>
                <Link href="/study-abroad/usa" className="text-gray-300 hover:text-white transition-colors text-sm">
                  United States
                </Link>
              </li>
              <li>
                <Link href="/study-abroad/canada" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Canada
                </Link>
              </li>
              <li>
                <Link href="/study-abroad/australia" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Australia
                </Link>
              </li>
              <li>
                <Link href="/study-abroad/europe" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Europe
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">info@unitransvisa.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">
                  Nairobi, Kenya<br />
                  Westlands, Sarit Centre
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Unitrans Visa Solutions. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
