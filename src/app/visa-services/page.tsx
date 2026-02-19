"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Stamp, FileSearch } from "lucide-react"

import { Layout } from "@/components/layout/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

const visaServices = [
  {
    id: "study-visa",
    title: "Study Visa",
    icon: Stamp,
    description: "End‑to‑end guidance for student visa applications to over 15+ countries.",
    highlights: ["Visa form completion", "Financial documentation review", "Interview preparation"],
  },
  {
    id: "dependant-visa",
    title: "Dependant & Spouse Visa",
    icon: ShieldCheck,
    description: "Support for family and dependant visa applications linked to your study visa.",
    highlights: ["Eligibility check", "Document checklist", "Tie‑break explanations"],
  },
  {
    id: "visit-visa",
    title: "Visitor & Travel Visa",
    icon: FileSearch,
    description: "Short‑term visit, graduation visits, and parents’ travel visas.",
    highlights: ["Purpose of visit documentation", "Itinerary review", "Cover letter drafting"],
  },
]

export default function VisaServicesPage() {
  return (
    <Layout>
      <section className="bg-white py-10">
        <div className="container mx-auto max-w-5xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 md:grid-cols-[1.6fr,1.2fr] md:items-center"
          >
            <div className="space-y-3 text-center md:text-left">
              <Badge variant="secondary" className="text-xs">
                Visa Services
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Visa support with a 95% approval history.
              </h1>
              <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base md:mx-0">
                From document checks to visa interviews, our consultants ensure your file meets
                embassy expectations for your destination.
              </p>
            </div>

            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle className="text-base">Check Visa Eligibility</CardTitle>
                <CardDescription>We’ll do a quick pre‑assessment.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="Citizenship e.g. Kenyan" />
                  <Input placeholder="Destination e.g. Canada" />
                </div>
                <select className="h-10 w-full rounded-md border border-input bg-background px-2 text-sm">
                  <option>Visa type</option>
                  <option>Study Visa</option>
                  <option>Dependant / Spouse Visa</option>
                  <option>Visitor / Graduation Visa</option>
                </select>
                <Button
                  className="w-full"
                  onClick={() =>
                    toast({
                      title: "Eligibility request submitted",
                      description: "Our visa team will share a pre‑assessment via your portal.",
                      variant: "success",
                    })
                  }
                >
                  Get Eligibility Check
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {visaServices.map((service) => (
              <Card
                key={service.id}
                className="group border-0 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-base group-hover:text-blue-600">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <ul className="space-y-1 text-muted-foreground">
                    {service.highlights.map((h) => (
                      <li key={h}>• {h}</li>
                    ))}
                  </ul>
                  <Button
                    size="sm"
                    className="w-full"
                    onClick={() =>
                      toast({
                        title: `${service.title} consultation`,
                        description: "In production this will open a pre‑filled appointment form.",
                      })
                    }
                  >
                    Talk to Visa Expert
                  </Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

