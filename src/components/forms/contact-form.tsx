"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle } from "lucide-react"
import {
  validateContactForm,
  type ContactFormData,
} from "@/lib/validation"

type FormState = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [state, setState] = useState<FormState>("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    const validation = validateContactForm(formData)
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
      
      // Here you would call: await contactAPI.submit(formData)
      
      setState("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      
      // Reset success state after 5 seconds
      setTimeout(() => setState("idle"), 5000)
    } catch (error) {
      setState("error")
    }
  }

  const getFieldError = (field: string) => errors[field]
  const messageLength = (formData.message || "").length

  return (
    <>
      {state === "success" && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start space-x-3">
          <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-emerald-900">
              Message Sent Successfully!
            </h3>
            <p className="text-emerald-700 text-sm mt-1">
              Thank you for contacting us. We'll get back to you as soon as possible.
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
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              placeholder="Your name"
              className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors ${
                getFieldError("name")
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300"
              }`}
            />
            {getFieldError("name") && (
              <p className="text-red-600 text-sm mt-1">
                {getFieldError("name")}
              </p>
            )}
          </div>

          {/* Email Field */}
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
              placeholder="your@email.com"
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

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
              Subject *
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject || ""}
              onChange={handleChange}
              placeholder="How can we help you?"
              className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors ${
                getFieldError("subject")
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300"
              }`}
            />
            {getFieldError("subject") && (
              <p className="text-red-600 text-sm mt-1">
                {getFieldError("subject")}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                Message *
              </label>
              <span className="text-xs text-gray-500">
                {messageLength}/1000
              </span>
            </div>
            <textarea
              id="message"
              name="message"
              value={formData.message || ""}
              onChange={handleChange}
              placeholder="Tell us more about your inquiry..."
              rows={5}
              maxLength={1000}
              className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none ${
                getFieldError("message")
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300"
              }`}
            />
            {getFieldError("message") && (
              <p className="text-red-600 text-sm mt-1">
                {getFieldError("message")}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={state === "submitting"}
            className="w-full py-3"
          >
            {state === "submitting"
              ? "Sending..."
              : "Send Message"}
          </Button>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 text-center">
            We'll respond to your message within 24 hours during business days.
          </p>
        </form>
      </Card>
    </>
  )
}
