"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
          <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-green-900">
              Message Sent Successfully!
            </h3>
            <p className="text-green-700 text-sm mt-1">
              Thank you for contacting us. We'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      )}

      {state === "error" && Object.keys(errors).length > 0 && (
        <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start space-x-3">
          <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-destructive">
              Please fix the errors below
            </h3>
            <ul className="text-destructive text-sm mt-2 list-disc list-inside space-y-1">
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
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Full Name *
            </label>
            <Input
              id="name"
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              placeholder="Your name"
              aria-invalid={!!getFieldError("name")}
            />
            {getFieldError("name") && (
              <p className="text-destructive text-sm mt-1">
                {getFieldError("name")}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              placeholder="your@email.com"
              aria-invalid={!!getFieldError("email")}
            />
            {getFieldError("email") && (
              <p className="text-destructive text-sm mt-1">
                {getFieldError("email")}
              </p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
              Subject *
            </label>
            <Input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject || ""}
              onChange={handleChange}
              placeholder="How can we help you?"
              aria-invalid={!!getFieldError("subject")}
            />
            {getFieldError("subject") && (
              <p className="text-destructive text-sm mt-1">
                {getFieldError("subject")}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Message *
              </label>
              <span className="text-xs text-muted-foreground">
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
              className="w-full px-4 py-2.5 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />
            {getFieldError("message") && (
              <p className="text-destructive text-sm mt-1">
                {getFieldError("message")}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={state === "submitting"}
            className="w-full"
          >
            {state === "submitting"
              ? "Sending..."
              : "Send Message"}
          </Button>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground/75 text-center">
            We'll respond to your message within 24 hours during business days.
          </p>
        </form>
      </Card>
    </>
  )
}
