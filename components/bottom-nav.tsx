"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart2, Dumbbell, Home, MapPin, Salad } from "lucide-react"

export function BottomNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-background border-t md:hidden">
      <div className="grid h-full grid-cols-5">
        <Link
          href="/"
          className={`flex flex-col items-center justify-center ${pathname === "/" ? "text-primary" : "text-muted-foreground"}`}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          href="/progress"
          className={`flex flex-col items-center justify-center ${pathname === "/progress" ? "text-primary" : "text-muted-foreground"}`}
        >
          <BarChart2 className="h-5 w-5" />
          <span className="text-xs mt-1">Progress</span>
        </Link>
        <Link
          href="/workouts"
          className={`flex flex-col items-center justify-center ${pathname === "/workouts" ? "text-primary" : "text-muted-foreground"}`}
        >
          <Dumbbell className="h-5 w-5" />
          <span className="text-xs mt-1">Workouts</span>
        </Link>
        <Link
          href="/nutrients"
          className={`flex flex-col items-center justify-center ${pathname === "/nutrients" ? "text-primary" : "text-muted-foreground"}`}
        >
          <Salad className="h-5 w-5" />
          <span className="text-xs mt-1">Nutrients</span>
        </Link>
        <Link
          href="/gyms"
          className={`flex flex-col items-center justify-center ${pathname === "/gyms" ? "text-primary" : "text-muted-foreground"}`}
        >
          <MapPin className="h-5 w-5" />
          <span className="text-xs mt-1">Gyms</span>
        </Link>
      </div>
    </div>
  )
}

