"use client"

import { motion } from "framer-motion"
import { BookOpenCheck, Clock3, Users } from "lucide-react"

import { Layout } from "@/components/layout/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

const testPrograms = [
  {
    id: "ielts",
    name: "IELTS",
    description: "Academic & General Training with mock tests and speaking clubs.",
    features: ["Weekly full‑length mocks", "Speaking one‑on‑one", "Writing review with feedback"],
  },
  {
    id: "toefl",
    name: "TOEFL iBT",
    description: "UG & PG focused training for top US & Canadian universities.",
    features: ["Integrated tasks practice", "Listening labs", "Score improvement plan"],
  },
  {
    id: "pte",
    name: "PTE",
    description: "Computer‑based prep ideal for fast‑track test takers.",
    features: ["Question bank access", "Scored mocks", "Template strategies"],
  },
]

export default function TestPreparationPage() {
  return (
    <Layout>
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto max-w-5xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1.6fr,1.2fr] md:items-center"
          >
            <div className="space-y-3 text-center md:text-left">
              <Badge variant="secondary" className="text-xs">
                Test Preparation
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Score‑boosting prep for IELTS, TOEFL, and PTE.
              </h1>
              <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base md:mx-0">
                Small batches, practice‑heavy lessons, and detailed feedback to help you hit your
                target band score for admissions and visas.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Book a Free Demo Class</CardTitle>
                <CardDescription>Experience our teaching style before you commit.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="Full name" required />
                <Input placeholder="WhatsApp number" required />
                <select className="h-10 w-full rounded-md border border-input bg-background px-2 text-sm">
                  <option>Test you are preparing for</option>
                  <option>IELTS</option>
                  <option>TOEFL iBT</option>
                  <option>PTE</option>
                </select>
                <Button
                  className="w-full"
                  onClick={() =>
                    toast({
                      title: "Demo booked",
                      description: "Our test prep team will confirm your slot via WhatsApp.",
                      variant: "success",
                    })
                  }
                >
                  Join Demo Class
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3"
          >
            {testPrograms.map((program) => (
              <Card key={program.id} className="border-0 bg-white shadow-md">
                <CardHeader>
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <BookOpenCheck className="h-4 w-4" />
                    </div>
                    <CardTitle className="text-base">{program.name}</CardTitle>
                  </div>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <ul className="space-y-1 text-muted-foreground">
                    {program.features.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      Small batches
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock3 className="h-3 w-3" />
                      6–8 weeks
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

