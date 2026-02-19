import { Layout } from "@/components/layout/layout"
import { ServiceHero } from "@/components/sections/service-hero"
import { ServiceProcess } from "@/components/sections/service-process"
import { TestCoursesSection } from "@/components/sections/test-courses"
import { ServiceFAQ } from "@/components/sections/service-faq"

export const metadata = {
  title: "Test Preparation - Unitrans Visa Solutions",
  description: "IELTS, TOEFL, GRE, and GMAT preparation courses with expert instructors.",
};

export default function TestPreparationPage() {
  return (
    <Layout>
      <ServiceHero
        title="Test Preparation"
        subtitle="Ace Your Exams"
        description="Master IELTS, TOEFL, GRE, and GMAT with our comprehensive preparation courses. Our experienced instructors guide you to achieve your target scores."
        buttonText="Enroll Now"
        icon="BookOpen"
      />
      
      <ServiceProcess 
        title="Our Test Preparation Approach"
        description="Structured curriculum designed to maximize your test performance"
        steps={[
          {
            number: 1,
            title: "Assessment Test",
            description: "Take a diagnostic test to identify your strengths and areas for improvement.",
          },
          {
            number: 2,
            title: "Personalized Plan",
            description: "We create a customized study plan based on your target score and learning style.",
          },
          {
            number: 3,
            title: "Expert Instruction",
            description: "Learn from experienced instructors with extensive test-taking expertise.",
          },
          {
            number: 4,
            title: "Practice Tests",
            description: "Take full-length practice tests in exam-like conditions to build confidence.",
          },
          {
            number: 5,
            title: "One-on-One Coaching",
            description: "Get personalized feedback and strategies for difficult question types.",
          },
          {
            number: 6,
            title: "Target Score Achievement",
            description: "Achieve your desired score and get ready for your next steps.",
          },
        ]}
      />

      <TestCoursesSection />

      <ServiceFAQ 
        title="Test Preparation FAQs"
        faqs={[
          {
            question: "What is the difference between IELTS and TOEFL?",
            answer: "IELTS (British standard) and TOEFL (American standard) test English proficiency differently. We help you choose the right test based on your target universities.",
          },
          {
            question: "How long should I prepare for these exams?",
            answer: "Most students benefit from 8-12 weeks of preparation. Our intensive courses can be completed in 4-6 weeks for experienced students.",
          },
          {
            question: "What is the average score improvement?",
            answer: "Our students typically improve by 1-2 bands in IELTS or 20-50 points in TOEFL within our course duration.",
          },
          {
            question: "Do you offer online classes?",
            answer: "Yes, we offer both online and in-person classes. You can choose the format that works best for you.",
          },
          {
            question: "Can I retake the course if I don't achieve my target?",
            answer: "Yes, we offer retake guarantees. If you don't reach your target score, you can retake the course at a reduced rate.",
          },
          {
            question: "What are the typical scores needed?",
            answer: "Most universities require IELTS 6.5-7.5 or TOEFL 80-100. GRE/GMAT requirements vary by program.",
          },
        ]}
      />
    </Layout>
  )
}
