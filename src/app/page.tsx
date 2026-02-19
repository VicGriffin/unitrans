import { Layout } from "@/components/layout/layout"
import { Hero } from "@/components/sections/hero"
import { Process } from "@/components/sections/process"
import { Countries } from "@/components/sections/countries"
import { Testimonials } from "@/components/sections/testimonials"
import { Partners } from "@/components/sections/partners"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Process />
      <Countries />
      <Testimonials />
      <Partners />
    </Layout>
  )
}
