"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User } from "lucide-react"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-600 to-orange-500 animate-gradient-shift" />

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/geometric-tech-pattern.jpg')] bg-cover bg-center" />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl flex justify-between gap-8 md:gap-0">
          {/* Login Section */}
          <div
            className={`flex items-center justify-center p-8 transition-opacity duration-500 ${!isLogin ? "opacity-90" : "opacity-100"}`}
          >
            <div className="w-full max-w-md space-y-8">
              <div className="text-center space-y-2">
                <h1 className="text-4xl font-bold text-white text-balance">Welcome back</h1>
              </div>

              <div className="glass-strong rounded-2xl p-8 space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="peihao@gmail.com"
                      className=" border-white/20 text-foreground placeholder:text-muted-foreground h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="password"
                      placeholder="••••••••••"
                      className=" border-white/20 text-foreground placeholder:text-muted-foreground h-12"
                    />
                  </div>
                </div>

                <Button
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base"
                  onClick={() => (window.location.href = "/chat")}
                >
                  Sign In
                </Button>

                <div className="text-center">
                  <button
                    onClick={() => setIsLogin(false)}
                    className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer underline"
                  >
                    {"Don't have an account? Sign up"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-white/20 mx-auto" />

          {/* Register Section */}
          <div
            className={`flex items-center justify-center p-8 transition-opacity duration-500 ${isLogin ? "opacity-90" : "opacity-100"}`}
          >
            <div className="w-full max-w-md space-y-8">
              <div className="text-center space-y-2">
                <h1 className="text-4xl font-bold text-white text-balance">Create an Account</h1>
              </div>

              <div className="glass-strong rounded-2xl p-8 space-y-6">
                <div className="flex justify-center">
                  <div className="relative group cursor-pointer">
                    <Avatar className="h-20 w-20 border-2 border-white/30">
                      <AvatarFallback className="bg-muted/50 text-muted-foreground">
                        <User className="h-10 w-10" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs text-white font-medium">Upload</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Username"
                      className=" border-white/20 text-foreground placeholder:text-muted-foreground h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Email"
                      className=" border-white/20 text-foreground placeholder:text-muted-foreground h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="tel"
                      placeholder="Phone"
                      className=" border-white/20 text-foreground placeholder:text-muted-foreground h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="password"
                      placeholder="••••••••••"
                      className=" border-white/20 text-foreground placeholder:text-muted-foreground h-12"
                    />
                  </div>
                </div>

                <Button
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base"
                  onClick={() => (window.location.href = "/chat")}
                >
                  Sign Up
                </Button>

                <div className="text-center">
                  <button
                    onClick={() => setIsLogin(true)}
                    className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer underline"
                  >
                    Already have an account? Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
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
          animation: gradient-shift 15s ease infinite;
        }
      `}</style>
    </div>
  )
}
