"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mwangi",
      country: "🇬🇧 United Kingdom",
      course: "Computer Science",
      university: "University of Manchester",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "Unitrans Visa made my dream of studying in the UK a reality. Their guidance throughout the application and visa process was exceptional. I got into my dream university!",
      badge: "Success Story"
    },
    {
      name: "David Kamau",
      country: "🇺🇸 United States",
      course: "MBA",
      university: "MIT Sloan",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "The expertise and support I received from Unitrans Visa was invaluable. They helped me secure a scholarship and guided me through the complex US visa process.",
      badge: "Scholarship Winner"
    },
    {
      name: "Grace Wanjiru",
      country: "🇨🇦 Canada",
      course: "Nursing",
      university: "University of Toronto",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "From choosing the right program to getting my study permit, Unitrans Visa was with me every step of the way. I highly recommend their services to anyone looking to study abroad.",
      badge: "PR Pathway"
    },
    {
      name: "James Ochieng",
      country: "🇦🇺 Australia",
      course: "Engineering",
      university: "University of Melbourne",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "The team at Unitrans Visa is professional, knowledgeable, and truly cares about their students' success. They made the entire process smooth and stress-free.",
      badge: "Work Rights"
    },
    {
      name: "Esther Kinyua",
      country: "🇮🇪 Ireland",
      course: "Software Engineering",
      university: "Trinity College Dublin",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      content: "Unitrans Visa helped me secure admission to one of Ireland's top universities. Their visa preparation sessions were incredibly helpful for my interview.",
      badge: "Tech Career"
    },
    {
      name: "Michael Njoroge",
      country: "🇪🇺 Germany",
      course: "Mechanical Engineering",
      university: "Technical University Munich",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      content: "Studying in Germany seemed impossible until I met Unitrans Visa. They helped me with language requirements and found me a tuition-free program!",
      badge: "Free Education"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Student
            <span className="text-blue-600"> Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students who are now studying at their dream universities abroad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>{testimonial.country}</span>
                        <span>•</span>
                        <span>{testimonial.course}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.badge}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="h-8 w-8 text-blue-100 absolute -top-2 -left-2" />
                  <p className="text-gray-700 leading-relaxed pl-6">
                    {testimonial.content}
                  </p>
                </div>

                {/* University */}
                <div className="mt-4 pt-4 border-t">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">University:</span> {testimonial.university}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Students Placed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Student Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
