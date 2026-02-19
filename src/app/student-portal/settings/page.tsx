"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MOCK_USER } from "@/lib/constants"

export default function SettingsPage() {
  return (
    <div className="p-8 space-y-8 max-w-2xl">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your account and preferences</p>
      </div>

      {/* Profile Settings */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">First Name</label>
              <input
                type="text"
                defaultValue={MOCK_USER.name.split(" ")[0]}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Last Name</label>
              <input
                type="text"
                defaultValue={MOCK_USER.name.split(" ")[1]}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">Email Address</label>
            <input
              type="email"
              defaultValue={MOCK_USER.email}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">Phone Number</label>
            <input
              type="tel"
              defaultValue={MOCK_USER.phone}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <Button>Save Changes</Button>
        </div>
      </Card>

      {/* Security Settings */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Security</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-4 border-b">
            <div>
              <p className="font-medium text-gray-900">Password</p>
              <p className="text-sm text-gray-600">Change your password</p>
            </div>
            <Button variant="outline">Change</Button>
          </div>

          <div className="flex items-center justify-between pb-4 border-b">
            <div>
              <p className="font-medium text-gray-900">Two-Factor Authentication</p>
              <p className="text-sm text-gray-600">Add an extra layer of security</p>
            </div>
            <Badge variant="outline">Disabled</Badge>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Active Sessions</p>
              <p className="text-sm text-gray-600">Manage your login sessions</p>
            </div>
            <Button variant="outline">View</Button>
          </div>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Notifications</h2>
        <div className="space-y-4">
          {[
            { label: "Application Updates", description: "Get notified about your application status" },
            { label: "Visa Updates", description: "Receive visa processing updates" },
            { label: "Appointment Reminders", description: "Get reminders before appointments" },
            { label: "Messages", description: "Notifications for new messages" },
            { label: "Newsletter", description: "Subscribe to our tips and updates" },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
              <div>
                <p className="font-medium text-gray-900">{item.label}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </div>
          ))}
        </div>
      </Card>

      {/* Danger Zone */}
      <Card className="p-6 border-red-200">
        <h2 className="text-xl font-semibold text-red-900 mb-6">Danger Zone</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Delete Account</p>
              <p className="text-sm text-gray-600">Permanently delete your account and all data</p>
            </div>
            <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
              Delete Account
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
