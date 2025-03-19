"use client"

import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Calendar, Clock, Flame } from "lucide-react"

export function ActivityList() {
  // Sample data - in a real app, this would come from an API or database
  const activities = [
    {
      id: 1,
      type: "Running",
      date: "Today, 8:30 AM",
      duration: "45 min",
      calories: 320,
      distance: "5.2 km",
    },
    {
      id: 2,
      type: "Strength Training",
      date: "Yesterday, 6:15 PM",
      duration: "60 min",
      calories: 450,
      distance: null,
    },
    {
      id: 3,
      type: "Cycling",
      date: "Mar 17, 7:00 AM",
      duration: "30 min",
      calories: 280,
      distance: "8.5 km",
    },
    {
      id: 4,
      type: "Yoga",
      date: "Mar 16, 8:00 PM",
      duration: "45 min",
      calories: 180,
      distance: null,
    },
    {
      id: 5,
      type: "Swimming",
      date: "Mar 15, 5:30 PM",
      duration: "40 min",
      calories: 350,
      distance: "1.2 km",
    },
  ]

  const getActivityColor = (type: string) => {
    switch (type) {
      case "Running":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Strength Training":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "Cycling":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Yoga":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
      case "Swimming":
        return "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "Running":
        return "🏃"
      case "Strength Training":
        return "💪"
      case "Cycling":
        return "🚴"
      case "Yoga":
        return "🧘"
      case "Swimming":
        return "🏊"
      default:
        return "🏋️"
    }
  }

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4 p-4 rounded-lg border">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-primary/10 text-primary">{getActivityIcon(activity.type)}</AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h4 className="font-medium">{activity.type}</h4>
                <Badge variant="secondary" className={getActivityColor(activity.type)}>
                  {activity.distance ? activity.distance : "No distance"}
                </Badge>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-3 w-3" />
                {activity.date}
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center text-sm">
                <Clock className="mr-1 h-3 w-3" />
                {activity.duration}
              </div>
              <div className="flex items-center text-sm">
                <Flame className="mr-1 h-3 w-3" />
                {activity.calories} kcal
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

