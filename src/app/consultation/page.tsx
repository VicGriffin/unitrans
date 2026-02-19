import { Layout } from "@/components/layout/layout"
import { ConsultationForm } from "@/components/forms/consultation-form"

export const metadata = {
  title: "Free Consultation - Unitrans Visa Solutions",
  description: "Book your free consultation with our visa experts to discuss your international education goals.",
};

export default function ConsultationPage() {
  return (
    <Layout>
      <div className="py-20 lg:py-32 bg-muted">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Book Your Free Consultation
            </h1>
            <p className="text-xl text-muted-foreground">
              Connect with our visa experts to discuss your goals and explore opportunities
            </p>
          </div>

          <ConsultationForm />
        </div>
      </div>
    </Layout>
  )
}
