"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, Download, FileText, Trash2, Eye } from "lucide-react"

export default function DocumentsPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Documents</h1>
          <p className="text-gray-600 mt-2">Manage and upload your application documents</p>
        </div>
        <Button asChild>
          <a href="#upload">
            <Upload className="h-4 w-4 mr-2" />
            Upload Document
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Passport Scan", date: "2024-02-05", size: "2.5 MB" },
          { name: "Admission Letter", date: "2024-02-01", size: "1.8 MB" },
          { name: "Transcripts", date: "2024-01-28", size: "3.2 MB" },
          { name: "Statement of Purpose", date: "2024-01-25", size: "0.8 MB" },
          { name: "Recommendation Letter 1", date: "2024-01-22", size: "1.1 MB" },
          { name: "Recommendation Letter 2", date: "2024-01-20", size: "1.0 MB" },
        ].map((doc, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <FileText className="h-8 w-8 text-blue-600" />
              <div className="flex space-x-1">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4 text-red-600" />
                </Button>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 line-clamp-2">{doc.name}</h3>
            <p className="text-xs text-gray-500 mt-2">Uploaded: {doc.date}</p>
            <p className="text-xs text-gray-500">{doc.size}</p>
          </Card>
        ))}
      </div>

      <Card id="upload" className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload New Document</h2>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:bg-gray-50 transition-colors">
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="font-semibold text-gray-900 mb-2">
            Drag and drop your files here
          </h3>
          <p className="text-gray-600 mb-4">or</p>
          <Button>Browse Files</Button>
          <p className="text-xs text-gray-500 mt-4">
            Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
          </p>
        </div>
      </Card>
    </div>
  )
}
