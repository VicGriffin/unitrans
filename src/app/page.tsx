import { Layout } from "@/components/layout/layout"
import { Hero } from "@/components/sections/hero"
import { StudyDestinations } from "@/components/sections/study-destinations"
import { Benefits } from "@/components/sections/benefits"
import { ProgramLevels } from "@/components/sections/program-levels"
import { FieldOfStudy } from "@/components/sections/field-of-study"
import { Process } from "@/components/sections/process"
import { Services } from "@/components/sections/services"
import { UniversityPartners } from "@/components/sections/university-partners"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Testimonials } from "@/components/sections/testimonials"
import { Partners } from "@/components/sections/partners"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <StudyDestinations />
      <Benefits />
      <ProgramLevels />
      <FieldOfStudy />
      <Process />
      <Services />
      <UniversityPartners />
      <WhyChooseUs />
      <Testimonials />
      <Partners />
    </Layout>
  )
}
