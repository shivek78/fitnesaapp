import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { BottomNav } from "@/components/bottom-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FitTrack - Your Fitness Companion",
  description: "Track your fitness journey, monitor progress, and find nearby gyms",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1 pb-16 md:pb-0">{children}</div>
            <BottomNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'