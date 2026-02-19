import { Layout } from "@/components/layout/layout"
import { ServiceHero } from "@/components/sections/service-hero"
import { ServiceProcess } from "@/components/sections/service-process"
import { ServiceFAQ } from "@/components/sections/service-faq"

export const metadata = {
  title: "Visa Services - Unitrans Visa Solutions",
  description: "Complete visa processing and documentation support for study visas, work visas, and more.",
};

export default function VisaServicesPage() {
  return (
    <Layout>
      <ServiceHero
        title="Visa Services"
        subtitle="Complete Visa Processing"
        description="Navigate the complex visa process with confidence. Our expert visa consultants provide end-to-end support for all visa types including study visas, work visas, and visit visas."
        buttonText="Book Visa Consultation"
        icon="Passport"
      />
      
      <ServiceProcess 
        title="Our Visa Processing Services"
        description="We simplify every step of your visa application process"
        steps={[
          {
            number: 1,
            title: "Eligibility Assessment",
            description: "We evaluate your eligibility based on your education, work experience, and personal circumstances.",
          },
          {
            number: 2,
            title: "Documentation",
            description: "We help you gather all required documents and ensure they meet specific visa requirements.",
          },
          {
            number: 3,
            title: "Application Submission",
            description: "Our team handles the visa application submission to ensure accuracy and timely processing.",
          },
          {
            number: 4,
            title: "Biometric Appointment",
            description: "We guide you through scheduling and preparation for biometric appointments.",
          },
          {
            number: 5,
            title: "Interview Preparation",
            description: "Comprehensive interview training to answer visa officer questions with confidence.",
          },
          {
            number: 6,
            title: "Visa Approval",
            description: "Track your application status and receive your visa decision.",
          },
        ]}
      />

      <ServiceFAQ 
        title="Visa Services FAQs"
        faqs={[
          {
            question: "What documents do I need for a study visa?",
            answer: "Typical documents include passport, admission letter, proof of financial support, academic transcripts, and language test scores. Requirements vary by country.",
          },
          {
            question: "How long does visa processing take?",
            answer: "Processing time varies by country (typically 4-12 weeks). We ensure your application is submitted quickly to maximize processing time.",
          },
          {
            question: "What is your visa approval rate?",
            answer: "We have achieved a 92% visa approval rate. Our comprehensive support and attention to detail significantly improve approval chances.",
          },
          {
            question: "Can you help with visa rejections?",
            answer: "Yes, we analyze rejection reasons and help prepare a strong reapplication with additional supporting documents.",
          },
          {
            question: "Do you provide interview coaching?",
            answer: "Absolutely! Our visa interview coaching is one of our key services that helps students succeed.",
          },
          {
            question: "Can you help with work visa sponsorship?",
            answer: "Yes, we assist with various work visas including skilled worker visas, intra-company transfers, and temporary work permits.",
          },
        ]}
      />
    </Layout>
  )
}
