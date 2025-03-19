"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Dumbbell } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center gap-2 font-bold mr-6">
          <Dumbbell className="h-5 w-5" />
          <span>FitTrack</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/"
            className={`transition-colors hover:text-foreground/80 ${pathname === "/" ? "text-foreground font-medium" : "text-foreground/60"}`}
          >
            Home
          </Link>
          <Link
            href="/progress"
            className={`transition-colors hover:text-foreground/80 ${pathname === "/progress" ? "text-foreground font-medium" : "text-foreground/60"}`}
          >
            Progress
          </Link>
          <Link
            href="/workouts"
            className={`transition-colors hover:text-foreground/80 ${pathname === "/workouts" ? "text-foreground font-medium" : "text-foreground/60"}`}
          >
            Workouts
          </Link>
          <Link
            href="/nutrients"
            className={`transition-colors hover:text-foreground/80 ${pathname === "/nutrients" ? "text-foreground font-medium" : "text-foreground/60"}`}
          >
            Nutrients
          </Link>
          <Link
            href="/gyms"
            className={`transition-colors hover:text-foreground/80 ${pathname === "/gyms" ? "text-foreground font-medium" : "text-foreground/60"}`}
          >
            Nearby Gyms
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
          <Button size="sm" className="hidden md:inline-flex">
            Start Workout
          </Button>
        </div>
      </div>
    </header>
  )
}

