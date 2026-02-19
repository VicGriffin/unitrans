"use client"

import { motion } from "framer-motion"
import { Filter, Globe2, GraduationCap } from "lucide-react"
import { Layout } from "@/components/layout/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

const studyDestinations = [
  {
    id: "uk",
    name: "United Kingdom",
    badge: "Most Popular",
    description: "World‑class universities, 1‑year masters, and strong post‑study work options.",
    courses: ["Business & Management", "Law", "Health Sciences", "Data & AI"],
  },
  {
    id: "usa",
    name: "United States",
    badge: "Top Choice",
    description: "Ivy‑league & top state universities with rich campus life and innovation.",
    courses: ["Computer Science", "Engineering", "MBA", "STEM"],
  },
  {
    id: "canada",
    name: "Canada",
    badge: "PR Pathway",
    description: "High‑quality education with friendly immigration pathways for graduates.",
    courses: ["Nursing", "IT & Cybersecurity", "Business", "Hospitality"],
  },
  {
    id: "australia",
    name: "Australia",
    badge: "Work Rights",
    description: "Excellent lifestyle, generous work rights, and high graduate salaries.",
    courses: ["Engineering", "Nursing", "Business Analytics", "Tourism"],
  },
]

const intakes = ["Jan 2026", "May 2026", "Sept 2026"]

export default function StudyAbroadPage() {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-10">
        <div className="container mx-auto max-w-5xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 md:grid-cols-[1.5fr,1fr] md:items-center"
          >
            <div className="space-y-3 text-center md:text-left">
              <Badge variant="secondary" className="mb-2 text-xs">
                Study Abroad
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Choose the right country, course, and intake.
              </h1>
              <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base md:mx-0">
                Filter by destination, intake, and area of study. Our counsellors will match you to
                the best‑fit universities based on your profile and budget.
              </p>
            </div>

            <Card className="border-blue-100 bg-white/80 shadow-sm backdrop-blur">
              <CardHeader>
                <CardTitle className="text-base">Find Programs</CardTitle>
                <CardDescription>Share your interest and we’ll shortlist options.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="Preferred course e.g. Computer Science" />
                <div className="grid grid-cols-2 gap-2">
                  <select className="h-10 rounded-md border border-input bg-background px-2 text-sm">
                    <option>Any destination</option>
                    {studyDestinations.map((d) => (
                      <option key={d.id}>{d.name}</option>
                    ))}
                  </select>
                  <select className="h-10 rounded-md border border-input bg-background px-2 text-sm">
                    <option>Any intake</option>
                    {intakes.map((i) => (
                      <option key={i}>{i}</option>
                    ))}
                  </select>
                </div>
                <Button
                  className="w-full"
                  onClick={() =>
                    toast({
                      title: "Request received",
                      description: "Your preferences have been captured. A consultant will share options.",
                      variant: "success",
                    })
                  }
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Get Matching Programs
                </Button>
                <p className="text-[11px] text-muted-foreground">
                  This form maps to the programs search endpoint in production.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {studyDestinations.map((dest) => (
              <Card key={dest.id} className="group border-0 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe2 className="h-4 w-4 text-blue-600" />
                      <CardTitle className="text-base group-hover:text-blue-600">
                        {dest.name}
                      </CardTitle>
                    </div>
                    <Badge variant="secondary" className="text-[10px]">
                      {dest.badge}
                    </Badge>
                  </div>
                  <CardDescription>{dest.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {dest.courses.map((c) => (
                      <Badge key={c} variant="outline" className="text-[11px]">
                        <GraduationCap className="mr-1 h-3 w-3" />
                        {c}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() =>
                      toast({
                        title: `Shortlist for ${dest.name}`,
                        description: "In production this opens filtered universities for this destination.",
                      })
                    }
                  >
                    View Universities
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

