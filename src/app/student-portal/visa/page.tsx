"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MOCK_VISA, VISA_STATUSES } from "@/lib/constants"
import {
  FileText,
  Upload,
  CheckCircle,
  AlertCircle,
  Download,
} from "lucide-react"

export default function VisaPage() {
  const getStatusColor = (status: string) => {
    const statusObj = VISA_STATUSES.find((s) => s.value === status)
    return statusObj?.color || "gray"
  }

  const getDocumentIcon = (status: string) => {
    switch (status) {
      case "uploaded":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "in-review":
        return <AlertCircle className="h-5 w-5 text-yellow-600" />
      case "pending":
        return <FileText className="h-5 w-5 text-gray-400" />
      default:
        return <FileText className="h-5 w-5 text-gray-400" />
    }
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Visa Status</h1>
        <p className="text-gray-600 mt-2">
          Track your visa application progress
        </p>
      </div>

      {/* Visa Overview */}
      <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Visa Information
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b">
                <span className="text-gray-600">Visa Type</span>
                <span className="font-semibold text-gray-900">
                  {MOCK_VISA.visaType}
                </span>
              </div>

              <div className="flex items-center justify-between pb-4 border-b">
                <span className="text-gray-600">Country</span>
                <span className="font-semibold text-gray-900">
                  {MOCK_VISA.country}
                </span>
              </div>

              <div className="flex items-center justify-between pb-4 border-b">
                <span className="text-gray-600">Current Status</span>
                <Badge
                  className={`bg-${getStatusColor(MOCK_VISA.status)}-100 text-${getStatusColor(MOCK_VISA.status)}-800`}
                >
                  {MOCK_VISA.status.split("-").join(" ")}
                </Badge>
              </div>

              <div className="flex items-center justify-between pb-4 border-b">
                <span className="text-gray-600">Started</span>
                <span className="font-semibold text-gray-900">
                  {MOCK_VISA.startDate}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Expected Approval</span>
                <span className="font-semibold text-gray-900">
                  {MOCK_VISA.expectedApprovalDate}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Passport Information
            </h2>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-sm text-gray-600 mb-1">Passport Number</p>
                <p className="font-mono font-semibold text-gray-900">
                  {MOCK_VISA.passportNumber}
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-sm text-gray-600 mb-1">Expiry Date</p>
                <p className="font-semibold text-gray-900">
                  {MOCK_VISA.passportExpiry}
                </p>
                <p className="text-xs text-green-600 mt-2">
                  ✓ Valid for visa application
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Progress Timeline */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Application Timeline
        </h2>

        <div className="space-y-6">
          {[
            { step: "Application Submitted", date: "2024-02-01", completed: true },
            { step: "Documents Received", date: "2024-02-05", completed: true },
            { step: "Initial Review", date: "2024-02-15", completed: true },
            { step: "Medical Examination", date: "In Progress", completed: false },
            { step: "Final Decision", date: "Expected: 2024-06-15", completed: false },
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div
                className={`h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.completed
                    ? "bg-green-100"
                    : "bg-gray-100"
                }`}
              >
                <CheckCircle
                  className={`h-6 w-6 ${
                    item.completed
                      ? "text-green-600"
                      : "text-gray-400"
                  }`}
                />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">
                  {item.step}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Documents Section */}
      <Card className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Required Documents
          </h2>
          <Button asChild>
            <span className="cursor-pointer flex items-center space-x-2">
              <Upload className="h-4 w-4" />
              Upload Document
            </span>
          </Button>
        </div>

        <div className="space-y-4">
          {MOCK_VISA.documents.map((doc) => (
            <div
              key={doc.id}
              className="p-4 border rounded-lg flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                {getDocumentIcon(doc.status)}
                <div>
                  <p className="font-semibold text-gray-900">
                    {doc.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {doc.status === "uploaded"
                      ? `Uploaded: ${doc.uploadedDate}`
                      : doc.status === "in-review"
                        ? "Under Review"
                        : "Awaiting Upload"}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Badge
                  className={`bg-${
                    doc.status === "uploaded"
                      ? "green"
                      : doc.status === "in-review"
                        ? "yellow"
                        : "gray"
                  }-100 text-${
                    doc.status === "uploaded"
                      ? "green"
                      : doc.status === "in-review"
                        ? "yellow"
                        : "gray"
                  }-800`}
                >
                  {doc.status.split("-").join(" ")}
                </Badge>
                {doc.status === "uploaded" && (
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
