"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, Search } from "lucide-react"
import { MOCK_MESSAGES } from "@/lib/constants"
import { useState } from "react"

export default function MessagesPage() {
  const [messages, setMessages] = useState(MOCK_MESSAGES)
  const [newMessage, setNewMessage] = useState("")
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const message = {
      id: `msg-${Date.now()}`,
      senderId: "user-1",
      senderName: "You",
      studentId: "user-1",
      content: newMessage,
      timestamp: new Date(),
      read: true,
    }

    setMessages([...messages, message])
    setNewMessage("")
  }

  const groupedMessages = messages.reduce(
    (acc, msg) => {
      const sender = msg.senderName
      if (!acc[sender]) {
        acc[sender] = []
      }
      acc[sender].push(msg)
      return acc
    },
    {} as Record<string, typeof MOCK_MESSAGES>
  )

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Messages</h1>
        <p className="text-gray-600 mt-2">
          Communicate with your advisors and consultants
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <div className="lg:col-span-1 bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto space-y-1 p-2">
            {Object.entries(groupedMessages).map(([sender, msgs]) => {
              const lastMessage = msgs[msgs.length - 1]
              const isSelected = selectedMessage === sender
              const unreadCount = msgs.filter((m) => !m.read).length

              return (
                <button
                  key={sender}
                  onClick={() => setSelectedMessage(sender)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    isSelected
                      ? "bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <p className="font-semibold text-gray-900 text-sm">
                      {sender}
                    </p>
                    {unreadCount > 0 && (
                      <span className="bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {unreadCount}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 truncate mt-1">
                    {lastMessage.content}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {lastMessage.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </button>
              )
            })}
          </div>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col">
          {selectedMessage ? (
            <>
              {/* Header */}
              <div className="p-4 border-b bg-gray-50">
                <h2 className="font-semibold text-gray-900">
                  {selectedMessage}
                </h2>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {groupedMessages[selectedMessage]?.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.senderId === "user-1"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.senderId === "user-1"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.senderId === "user-1"
                            ? "text-blue-100"
                            : "text-gray-500"
                        }`}
                      >
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <form onSubmit={handleSendMessage} className="p-4 border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                  <Button type="submit" size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Select a conversation to start messaging
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
