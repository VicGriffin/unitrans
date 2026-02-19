import { Layout } from "@/components/layout/layout"
import { ContactForm } from "@/components/forms/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Contact Us - Unitrans Visa Solutions",
  description: "Get in touch with our team. We're here to help you with your visa and education queries.",
};

export default function ContactPage() {
  return (
    <Layout>
      <div className="py-20 lg:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              Have a question? We'd love to hear from you
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600 mt-1">+254 700 123 456</p>
                    <p className="text-gray-600">+254 713 987 654</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">info@unitransvisa.com</p>
                    <p className="text-gray-600">support@unitransvisa.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600 mt-1">
                      123 Business Park Road<br />
                      Nairobi, Kenya 00100
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Hours</h3>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 3:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}
