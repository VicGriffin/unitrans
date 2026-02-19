import { Layout } from "@/components/layout/layout"
import { ServiceHero } from "@/components/sections/service-hero"
import { ServiceProcess } from "@/components/sections/service-process"
import { UniversitiesGrid } from "@/components/sections/universities-grid"
import { ServiceFAQ } from "@/components/sections/service-faq"

export const metadata = {
  title: "Study Abroad - Unitrans Visa Solutions",
  description: "Get admitted to top universities worldwide. Expert guidance for your international education journey.",
};

export default function StudyAbroadPage() {
  return (
    <Layout>
      <ServiceHero
        title="Study Abroad"
        subtitle="Get admitted to top universities worldwide"
        description="Unitrans helps you achieve your dream of studying at leading international universities. Our expert counselors provide personalized guidance for every step of the admission process."
        buttonText="Start Your Journey"
        icon="GraduationCap"
      />
      
      <ServiceProcess 
        title="Our Study Abroad Process"
        description="We guide you through every step of your international education journey"
        steps={[
          {
            number: 1,
            title: "Profile Assessment",
            description: "We evaluate your academic background and career goals to identify the best universities for you.",
          },
          {
            number: 2,
            title: "University Selection",
            description: "Choose from thousands of universities across 15+ countries based on your preferences.",
          },
          {
            number: 3,
            title: "Application Preparation",
            description: "We assist with essay writing, recommendation letters, and application materials.",
          },
          {
            number: 4,
            title: "Interview Coaching",
            description: "Get trained for university interviews to increase your chances of acceptance.",
          },
          {
            number: 5,
            title: "Admission Decision",
            description: "Receive your admission offers and guidance on choosing the right university.",
          },
          {
            number: 6,
            title: "Post-Admission Support",
            description: "We assist with visa processing and pre-arrival preparations.",
          },
        ]}
      />

      <UniversitiesGrid />

      <ServiceFAQ 
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "What are the eligibility requirements?",
            answer: "Requirements vary by university and program. Generally, you need a strong academic record, English proficiency (IELTS/TOEFL), and sometimes standardized test scores.",
          },
          {
            question: "How long does the admission process take?",
            answer: "The entire process typically takes 6-12 months from initial consultation to admission decision, depending on the university and program.",
          },
          {
            question: "What is your success rate?",
            answer: "We have a 95% success rate with our students getting admitted to their target universities.",
          },
          {
            question: "Can you help with scholarships?",
            answer: "Yes! We help identify scholarship opportunities and guide you through the application process.",
          },
          {
            question: "Do you assist with test preparation?",
            answer: "Yes, we offer IELTS, TOEFL, GRE, and GMAT preparation courses through our Test Preparation program.",
          },
          {
            question: "What countries do you cover?",
            answer: "We assist with admissions to universities in USA, UK, Canada, Australia, New Zealand, Germany, Netherlands, France, and more.",
          },
        ]}
      />
    </Layout>
  )
}
