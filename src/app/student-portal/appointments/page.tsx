"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, MapPin, Clock, User, X } from "lucide-react"
import { MOCK_APPOINTMENTS } from "@/lib/constants"
import { useState } from "react"

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState(MOCK_APPOINTMENTS)
  const [cancelingId, setCancelingId] = useState<string | null>(null)

  const handleCancel = (id: string) => {
    setAppointments((prev) =>
      prev.filter((apt) => apt.id !== id)
    )
    setCancelingId(null)
  }

  const scheduledAppointments = appointments.filter(
    (apt) => apt.status === "scheduled"
  )
  const completedAppointments = appointments.filter(
    (apt) => apt.status === "completed"
  )

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Appointments
          </h1>
          <p className="text-gray-600 mt-2">
            Schedule and manage your meetings with our consultants
          </p>
        </div>
        <Button asChild>
          <a href="#schedule-form">
            <Plus className="h-4 w-4 mr-2" />
            New Appointment
          </a>
        </Button>
      </div>

      {/* Scheduled Appointments */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Upcoming Appointments
        </h2>

        {scheduledAppointments.length > 0 ? (
          <div className="space-y-4">
            {scheduledAppointments.map((apt) => (
              <Card key={apt.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {apt.type}
                      </h3>
                      <Badge className="bg-blue-100 text-blue-800">
                        {apt.status}
                      </Badge>
                    </div>

                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>Advisor: {apt.advisor}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>
                          {apt.date} at {apt.time}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{apt.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`#reschedule-${apt.id}`}>
                        Reschedule
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={() => setCancelingId(apt.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {cancelingId === apt.id && (
                  <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200 flex items-center justify-between">
                    <p className="text-red-800 text-sm">
                      Are you sure you want to cancel this appointment?
                    </p>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setCancelingId(null)}
                      >
                        Keep It
                      </Button>
                      <Button
                        size="sm"
                        className="bg-red-600 hover:bg-red-700"
                        onClick={() => handleCancel(apt.id)}
                      >
                        Cancel Appointment
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center">
            <p className="text-gray-600 mb-4">
              You don't have any upcoming appointments
            </p>
            <Button asChild>
              <a href="#schedule-form">Schedule One Now</a>
            </Button>
          </Card>
        )}
      </div>

      {/* Completed Appointments */}
      {completedAppointments.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Past Appointments
          </h2>

          <div className="space-y-4">
            {completedAppointments.map((apt) => (
              <Card
                key={apt.id}
                className="p-6 opacity-75 hover:opacity-100 transition-opacity"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {apt.type}
                      </h3>
                      <Badge className="bg-gray-100 text-gray-800">
                        {apt.status}
                      </Badge>
                    </div>

                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>Advisor: {apt.advisor}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>
                          {apt.date} at {apt.time}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" asChild>
                    <a href={`#feedback-${apt.id}`}>
                      Give Feedback
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Schedule Form Section */}
      <Card id="schedule-form" className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Schedule an Appointment
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Appointment Type
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              <option>Visa Consultation</option>
              <option>Document Review</option>
              <option>Application Guidance</option>
              <option>Interview Coaching</option>
              <option>General Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Preferred Time
            </label>
            <input
              type="time"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Meeting Format
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              <option>Online (Zoom)</option>
              <option>Phone Call</option>
              <option>In-Office</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Notes
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              rows={4}
              placeholder="Tell us what you'd like to discuss..."
            />
          </div>

          <Button className="md:col-span-2">
            Request Appointment
          </Button>
        </div>
      </Card>
    </div>
  )
}
