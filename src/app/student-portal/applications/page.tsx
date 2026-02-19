"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Calendar } from "lucide-react"
import Link from "next/link"
import {
  MOCK_APPLICATIONS,
  APPLICATION_STATUSES,
} from "@/lib/constants"

export default function ApplicationsPage() {
  const getStatusColor = (status: string) => {
    const statusObj = APPLICATION_STATUSES.find((s) => s.value === status)
    return statusObj?.color || "gray"
  }

  const getApplicationProgress = (status: string) => {
    const progressMap: Record<string, number> = {
      draft: 20,
      submitted: 40,
      "under-review": 60,
      shortlisted: 80,
      accepted: 100,
      rejected: 0,
    }
    return progressMap[status] || 0
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            University Applications
          </h1>
          <p className="text-gray-600 mt-2">
            Track and manage all your university applications
          </p>
        </div>
        <Button asChild>
          <Link href="/student-portal/applications/new">
            <Plus className="h-4 w-4 mr-2" />
            New Application
          </Link>
        </Button>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {MOCK_APPLICATIONS.map((app) => (
          <Card
            key={app.id}
            className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {app.universityName}
                  </h3>
                  <p className="text-gray-600 mt-1">{app.program}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {app.country}
                  </p>
                </div>
                <div className="text-right">
                  <Badge
                    className={`bg-${getStatusColor(app.status)}-100 text-${getStatusColor(app.status)}-800`}
                  >
                    {app.status.split("-").join(" ")}
                  </Badge>
                  {app.decision && (
                    <div className="mt-2">
                      <Badge className="bg-emerald-100 text-emerald-800">
                        {app.decision}
                      </Badge>
                    </div>
                  )}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${getApplicationProgress(app.status)}%` }}
                />
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Applied Date
                  </p>
                  <p className="font-semibold text-gray-900 mt-1">
                    {app.appliedDate}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Deadline
                  </p>
                  <p className="font-semibold text-gray-900 mt-1">
                    {app.deadline}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Intake
                  </p>
                  <p className="font-semibold text-gray-900 mt-1">
                    {app.intakeSemester}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Decision Date
                  </p>
                  <p className="font-semibold text-gray-900 mt-1">
                    {app.decisionDate || "Pending"}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2 pt-4 border-t">
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={`/student-portal/applications/${app.id}`}
                  >
                    View Details
                  </Link>
                </Button>
                <Button variant="ghost" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Meeting
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {MOCK_APPLICATIONS.length === 0 && (
        <Card className="p-12 text-center">
          <p className="text-gray-600 mb-4">
            No applications yet
          </p>
          <Button asChild>
            <Link href="/student-portal/applications/new">
              Create Your First Application
            </Link>
          </Button>
        </Card>
      )}
    </div>
  )
}
