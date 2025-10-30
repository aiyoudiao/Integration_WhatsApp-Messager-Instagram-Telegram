"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Search,
  Plus,
  MoreHorizontal,
  Phone,
  Video,
  Info,
  Paperclip,
  Mic,
  Send,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

const contacts = [
  { id: 1, name: "peihao222", time: "18:37", avatar: "/cat-avatar.png", online: true },
  { id: 2, name: "peihao2", time: "18:23", avatar: "/cat-avatar.png", online: true },
  { id: 3, name: "peihao", time: "18:22", avatar: "/cat-avatar.png", online: false },
]

const messages = [
  { id: 1, text: "Hey! How are you?", time: "18:30", sent: false },
  { id: 2, text: "I'm good! Working on the new project.", time: "18:32", sent: true },
  { id: 3, text: "That sounds exciting! Tell me more about it.", time: "18:35", sent: false },
  { id: 4, text: "It's a chat application with glassmorphism design!", time: "18:37", sent: true },
]

export default function ChatPage() {
  const [selectedContact, setSelectedContact] = useState(contacts[0])
  const [messageInput, setMessageInput] = useState("")
  const [expandedSections, setExpandedSections] = useState({
    photos: false,
    videos: false,
    files: false,
    privacy: false,
    about: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-purple-600 to-blue-700 animate-gradient-shift" />

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/geometric-network-pattern.jpg')] bg-cover bg-center" />
      </div>

      {/* Main content */}
      <div className="relative z-10 h-screen flex">
        {/* Left Sidebar - Contacts */}
        <div className="w-80 glass-strong border-r border-white/10 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">OC</span>
                </div>
                <h1 className="text-xl font-bold text-foreground">OmniChat</h1>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground hover:bg-white/10">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search"
                className="pl-10 bg-secondary/50 border-white/10 text-foreground placeholder:text-muted-foreground"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-foreground hover:bg-white/10"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Contacts List */}
          <ScrollArea className="flex-1 h-full" >
            <div className="p-2">
              {contacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => setSelectedContact(contact)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    selectedContact.id === contact.id ? "bg-secondary/60" : "hover:bg-secondary/30"
                  }`}
                >
                  <div className="relative">
                    <Avatar className="h-12 w-12 border-2 border-white/20">
                      <AvatarImage src={contact.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{contact.name[0]}</AvatarFallback>
                    </Avatar>
                    {contact.online && (
                      <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-background" />
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{contact.name}</span>
                      <span className="text-xs text-muted-foreground">{contact.time}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Center - Chat Area */}
        <div className="flex-1 flex flex-col glass">
          {/* Chat Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border-2 border-white/20">
                <AvatarImage src={selectedContact.avatar || "/placeholder.svg"} />
                <AvatarFallback>{selectedContact.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold text-foreground">{selectedContact.name}</h2>
                <p className="text-xs text-muted-foreground">MESSENGER</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-9 w-9 text-foreground hover:bg-white/10">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-foreground hover:bg-white/10">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-foreground hover:bg-white/10">
                <Info className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-6 h-full">
            <div className="space-y-4 max-w-3xl mx-auto">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sent ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-md px-4 py-3 rounded-2xl ${
                      message.sent ? "bg-primary text-primary-foreground" : "glass-strong text-foreground"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">{message.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3 max-w-3xl mx-auto">
              <Button variant="ghost" size="icon" className="h-10 w-10 text-foreground hover:bg-white/10 shrink-0">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 text-foreground hover:bg-white/10 shrink-0">
                <Mic className="h-5 w-5" />
              </Button>
              <Input
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-secondary/50 border-white/10 text-foreground placeholder:text-muted-foreground"
              />
              <Button size="icon" className="h-10 w-10 bg-primary hover:bg-primary/90 text-primary-foreground shrink-0">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Details */}
        <div className="w-80 glass-strong border-l border-white/10 flex flex-col">
          <ScrollArea className="flex-1 h-full" >
            <div className="p-6">
              {/* Profile */}
              <div className="text-center space-y-4 pb-6 border-b border-white/10">
                <Avatar className="h-24 w-24 mx-auto border-4 border-white/20">
                  <AvatarImage src={selectedContact.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{selectedContact.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{selectedContact.name}</h3>
                  <p className="text-sm text-muted-foreground">MESSENGER</p>
                  <p className="text-sm text-muted-foreground mt-1">94764565</p>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-2 mt-4">
                {/* Shared Photos */}
                <div className="border-b border-white/10">
                  <button
                    onClick={() => toggleSection("photos")}
                    className="w-full flex items-center justify-between py-4 text-foreground hover:text-primary transition-colors"
                  >
                    <span className="font-medium">Shared Photos</span>
                    {expandedSections.photos ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                  {expandedSections.photos && (
                    <div className="pb-4 grid grid-cols-3 gap-2">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-square bg-secondary/50 rounded-lg" />
                      ))}
                    </div>
                  )}
                </div>

                {/* Shared Videos */}
                <div className="border-b border-white/10">
                  <button
                    onClick={() => toggleSection("videos")}
                    className="w-full flex items-center justify-between py-4 text-foreground hover:text-primary transition-colors"
                  >
                    <span className="font-medium">Shared Videos</span>
                    {expandedSections.videos ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                </div>

                {/* Shared Files */}
                <div className="border-b border-white/10">
                  <button
                    onClick={() => toggleSection("files")}
                    className="w-full flex items-center justify-between py-4 text-foreground hover:text-primary transition-colors"
                  >
                    <span className="font-medium">Shared Files</span>
                    {expandedSections.files ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                </div>

                {/* Privacy */}
                <div className="border-b border-white/10">
                  <button
                    onClick={() => toggleSection("privacy")}
                    className="w-full flex items-center justify-between py-4 text-foreground hover:text-primary transition-colors"
                  >
                    <span className="font-medium">Privacy</span>
                    {expandedSections.privacy ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                </div>

                {/* About Us */}
                <div>
                  <button
                    onClick={() => toggleSection("about")}
                    className="w-full flex items-center justify-between py-4 text-foreground hover:text-primary transition-colors"
                  >
                    <span className="font-medium">About Us</span>
                    {expandedSections.about ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                  {expandedSections.about && (
                    <div className="pb-4 text-sm text-muted-foreground leading-relaxed">
                      <p>
                        OmniChat is a versatile application 💬 designed to unify the differences among various chat platforms such as WhatsApp, Messenger, Instagram, and Telegram ✨.
                        Its ultimate goal is to provide a universal chat platform DEMO 🌍 that bridges these popular services.
                        Continuous enhancements will be made to OmniChat to deliver a more seamless and efficient communication experience 🚀.
                      </p>
                      <p className="mt-3">
                        OmniChat 是一款多功能应用程序 💬，旨在整合 WhatsApp、Messenger、Instagram、Telegram 等多个聊天平台之间的差异 ✨。
                          它的最终目标是打造一个连接所有流行聊天服务的 全域聊天平台 DEMO 🌍，
                          未来我们将持续增强和优化 OmniChat，让沟通更加高效与统一 🚀。
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 20s ease infinite;
        }
      `}</style>
    </div>
  )
}
