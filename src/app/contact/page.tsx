"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

import { Layout } from "@/components/layout/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

export default function ContactPage() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    const name = (formData.get("name") as string | null)?.trim()
    const email = (formData.get("email") as string | null)?.trim()
    const message = (formData.get("message") as string | null)?.trim()

    if (!name || !email || !message) {
      toast({
        title: "Missing details",
        description: "Please fill in your name, email, and message.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Message sent",
      description: "Our team will get back to you within one working day.",
      variant: "success",
    })
    form.reset()
  }

  return (
    <Layout>
      <section className="bg-white py-10">
        <div className="container mx-auto grid max-w-5xl gap-8 md:grid-cols-[1.4fr,1.3fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 text-center md:text-left"
          >
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s talk about your study abroad plan.
            </h1>
            <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base md:mx-0">
              Reach out for counselling, visa queries, or partner university collaborations. We
              respond within one business day.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-blue-600" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-blue-600" />
                <span>info@unitransvisa.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>Sarit Centre, Westlands, Nairobi, Kenya</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Contact Form</CardTitle>
                <CardDescription>
                  This maps to your backend lead / contact endpoint.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input name="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                      name="message"
                      className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Tell us about your preferred country, course, and timeline..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
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

