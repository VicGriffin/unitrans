"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Layout } from "@/components/layout/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

export default function ConsultationPage() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    const phone = (formData.get("phone") as string | null)?.trim()

    if (!phone) {
      toast({
        title: "Phone number required",
        description: "Please enter your WhatsApp number so our team can reach you.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Consultation request received",
      description: "Expect a call or WhatsApp message from our team shortly.",
      variant: "success",
    })
    form.reset()
  }

  return (
    <Layout>
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-14">
        <div className="container mx-auto grid max-w-5xl gap-8 md:grid-cols-[1.4fr,1.2fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 text-center md:text-left"
          >
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Book your free study abroad consultation.
            </h1>
            <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base md:mx-0">
              Share your preferred country, course, and budget. A dedicated Unitrans consultant will
              guide you on eligibility, timelines, and next steps.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• 30‑minute one‑on‑one session</li>
              <li>• Profile & budget review</li>
              <li>• Country & course recommendations</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Get Started</CardTitle>
                <CardDescription>
                  This will connect to your `lead / consultation` endpoint in production.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-3" onSubmit={handleSubmit}>
                  <Input name="name" placeholder="Full name" required />
                  <Input
                    name="phone"
                    placeholder="WhatsApp number"
                    required
                  />
                  <Input
                    name="preferredCountry"
                    placeholder="Preferred country (optional)"
                  />
                  <Input
                    name="preferredCourse"
                    placeholder="Preferred course (optional)"
                  />
                  <Button type="submit" className="w-full">
                    Request Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

