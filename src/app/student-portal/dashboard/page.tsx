"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Passport,
  Calendar,
  MessageSquare,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import {
  MOCK_APPLICATIONS,
  MOCK_VISA,
  MOCK_APPOINTMENTS,
  APPLICATION_STATUSES,
  VISA_STATUSES,
  MOCK_USER,
} from "@/lib/constants"

export default function DashboardPage() {
  const recentApplications = MOCK_APPLICATIONS.slice(0, 2)
  const upcomingAppointments = MOCK_APPOINTMENTS.filter(
    (apt) => apt.status === "scheduled"
  )

  const getStatusColor = (status: string, type: "application" | "visa") => {
    if (type === "application") {
      const statusObj = APPLICATION_STATUSES.find((s) => s.value === status)
      return statusObj?.color || "gray"
    } else {
      const statusObj = VISA_STATUSES.find((s) => s.value === status)
      return statusObj?.color || "gray"
    }
  }

  return (
    <div className="p-8 space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome back, {MOCK_USER.name}!
        </h1>
        <p className="text-gray-600 mt-2">
          Here's an overview of your application status
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">
                Active Applications
              </p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {MOCK_APPLICATIONS.length}
              </p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">
                Visa Status
              </p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {MOCK_VISA.status.split("-").join(" ").toUpperCase()[0]}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {MOCK_VISA.status.split("-").join(" ")}
              </p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <Passport className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">
                Upcoming Events
              </p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {upcomingAppointments.length}
              </p>
            </div>
            <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">
                Unread Messages
              </p>
              <p className="text-3xl font-bold text-gray-900 mt-2">2</p>
            </div>
            <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
              <MessageSquare className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Applications */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Recent Applications
          </h2>
          <Button variant="outline" asChild>
            <Link href="/student-portal/applications">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4">
          {recentApplications.map((app) => (
            <Card key={app.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {app.universityName}
                    </h3>
                    <Badge
                      className={`bg-${getStatusColor(app.status, "application")}-100 text-${getStatusColor(app.status, "application")}-800`}
                    >
                      {app.status.split("-").join(" ")}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {app.program}
                  </p>
                  <div className="flex items-center space-x-6 text-xs text-gray-500">
                    <span>Applied: {app.appliedDate}</span>
                    <span>Deadline: {app.deadline}</span>
                    <span>Intake: {app.intakeSemester}</span>
                  </div>
                </div>
                {app.decision && (
                  <Badge className="bg-emerald-100 text-emerald-800 ml-4">
                    {app.decision}
                  </Badge>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Upcoming Appointments
          </h2>
          <Button variant="outline" asChild>
            <Link href="/student-portal/appointments">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {upcomingAppointments.length > 0 ? (
          <div className="grid gap-4">
            {upcomingAppointments.map((apt) => (
              <Card key={apt.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {apt.type}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      With: {apt.advisor}
                    </p>
                    <div className="flex items-center space-x-6 text-xs text-gray-500 mt-3">
                      <span>{apt.date} at {apt.time}</span>
                      <span>{apt.location}</span>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">
                    Scheduled
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-6 text-center">
            <p className="text-gray-600">No upcoming appointments</p>
            <Button className="mt-4" asChild>
              <Link href="/student-portal/appointments">
                Book an Appointment
              </Link>
            </Button>
          </Card>
        )}
      </div>
    </div>
  )
}
