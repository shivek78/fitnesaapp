"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Pause, Play, RotateCcw } from "lucide-react"

interface WorkoutTimerProps {
  duration: number
  exerciseName: string
}

export function WorkoutTimer({ duration, exerciseName }: WorkoutTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration)
  const [isActive, setIsActive] = useState(false)
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 1
          setProgress((newTime / duration) * 100)
          return newTime
        })
      }, 1000)
    } else if (timeLeft === 0) {
      setIsActive(false)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, timeLeft, duration])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setTimeLeft(duration)
    setProgress(100)
  }

  return (
    <div className="space-y-4 mt-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold">{formatTime(timeLeft)}</h3>
        <p className="text-sm text-muted-foreground">{exerciseName}</p>
      </div>

      <Progress value={progress} className="h-2" />

      <div className="flex justify-center gap-2">
        <Button variant="outline" size="icon" onClick={resetTimer}>
          <RotateCcw className="h-4 w-4" />
        </Button>
        <Button onClick={toggleTimer}>
          {isActive ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
          {isActive ? "Pause" : "Start"}
        </Button>
      </div>
    </div>
  )
}

