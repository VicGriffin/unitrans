import { PortalSidebar } from "@/components/portal/sidebar-nav"

export const metadata = {
  title: "Student Portal - Unitrans Visa Solutions",
  description: "Manage your applications, visas, documents, and appointments in one place.",
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <PortalSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
