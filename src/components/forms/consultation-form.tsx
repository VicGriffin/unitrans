"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle } from "lucide-react"
import {
  validateConsultationForm,
  type ConsultationFormData,
} from "@/lib/validation"
import { COUNTRIES, INTAKES } from "@/lib/constants"

type FormState = "idle" | "submitting" | "success" | "error"

export function ConsultationForm() {
  const [formData, setFormData] = useState<Partial<ConsultationFormData>>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    course: "",
    intakeSemester: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [state, setState] = useState<FormState>("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState("submitting")

    // Validate form
    const validation = validateConsultationForm(formData)
    if (!validation.isValid) {
      const errorMap: Record<string, string> = {}
      validation.errors.forEach((error) => {
        errorMap[error.field] = error.message
      })
      setErrors(errorMap)
      setState("error")
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      
      // Here you would call: await consultationAPI.submit(formData)
      
      setState("success")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        course: "",
        intakeSemester: "",
      })
      
      // Reset success state after 5 seconds
      setTimeout(() => setState("idle"), 5000)
    } catch (error) {
      setState("error")
    }
  }

  const getFieldError = (field: string) => errors[field]

  return (
    <>
      {state === "success" && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start space-x-3">
          <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-emerald-900">
              Consultation Requested Successfully!
            </h3>
            <p className="text-emerald-700 text-sm mt-1">
              Thank you for your interest. Our team will contact you shortly to confirm your appointment.
            </p>
          </div>
        </div>
      )}

      {state === "error" && Object.keys(errors).length > 0 && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
          <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-red-900">
              Please fix the errors below
            </h3>
            <ul className="text-red-700 text-sm mt-2 list-disc list-inside space-y-1">
              {Object.values(errors).map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <Card className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                First Name *
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName || ""}
                onChange={handleChange}
                placeholder="John"
                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors ${
                  getFieldError("firstName")
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
              />
              {getFieldError("firstName") && (
                <p className="text-red-600 text-sm mt-1">
                  {getFieldError("firstName")}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                Last Name *
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName || ""}
                onChange={handleChange}
                placeholder="Doe"
                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors ${
                  getFieldError("lastName")
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
              />
              {getFieldError("lastName") && (
                <p className="text-red-600 text-sm mt-1">
                  {getFieldError("lastName")}
                </p>
              )}
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors ${
                  getFieldError("email")
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
              />
              {getFieldError("email") && (
                <p className="text-red-600 text-sm mt-1">
                  {getFieldError("email")}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors ${
                  getFieldError("phone")
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
              />
              {getFieldError("phone") && (
                <p className="text-red-600 text-sm mt-1">
                  {getFieldError("phone")}
                </p>
              )}
            </div>
          </div>

          {/* Destination and Program */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-900 mb-2">
                Destination Country *
              </label>
              <select
                id="country"
                name="country"
                value={formData.country || ""}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors ${
                  getFieldError("country")
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
              >
                <option value="">Select a country...</option>
                {COUNTRIES.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.icon} {country.name}
                  </option>
                ))}
              </select>
              {getFieldError("country") && (
                <p className="text-red-600 text-sm mt-1">
                  {getFieldError("country")}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-900 mb-2">
                Program Level *
              </label>
              <select
                id="course"
                name="course"
                value={formData.course || ""}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors ${
                  getFieldError("course")
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
              >
                <option value="">Select a program...</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">PhD/Research</option>
                <option value="diploma">Diploma/Certificate</option>
                <option value="postdoc">Post-Doctoral</option>
              </select>
              {getFieldError("course") && (
                <p className="text-red-600 text-sm mt-1">
                  {getFieldError("course")}
                </p>
              )}
            </div>
          </div>

          {/* Intake */}
          <div>
            <label htmlFor="intakeSemester" className="block text-sm font-medium text-gray-900 mb-2">
              Preferred Intake *
            </label>
            <select
              id="intakeSemester"
              name="intakeSemester"
              value={formData.intakeSemester || ""}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors ${
                getFieldError("intakeSemester")
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300"
              }`}
            >
              <option value="">Select an intake...</option>
              {INTAKES.map((intake) => (
                <option key={intake.value} value={intake.value}>
                  {intake.label}
                </option>
              ))}
            </select>
            {getFieldError("intakeSemester") && (
              <p className="text-red-600 text-sm mt-1">
                {getFieldError("intakeSemester")}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between pt-4">
            <p className="text-sm text-gray-600">
              <Badge variant="outline">All fields are required</Badge>
            </p>
            <Button
              type="submit"
              disabled={state === "submitting"}
              className="px-8 py-3"
            >
              {state === "submitting"
                ? "Submitting..."
                : "Request Free Consultation"}
            </Button>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 text-center pt-4">
            By submitting this form, you agree to our Terms of Service and Privacy Policy.
            We'll contact you shortly to schedule your consultation.
          </p>
        </form>
      </Card>
    </>
  )
}
