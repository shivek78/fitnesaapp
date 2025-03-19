"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Phone } from "lucide-react"

export function GymList() {
  // Sample data - in a real app, this would come from an API based on the user's location
  const [gyms] = useState([
    {
      id: 1,
      name: "FitZone Gym",
      distance: "0.8 miles",
      rating: 4.7,
      address: "123 Fitness Ave",
      hours: "Open · Closes 10PM",
      phone: "(555) 123-4567",
      features: ["24/7", "Classes", "Pool"],
    },
    {
      id: 2,
      name: "PowerLift Center",
      distance: "1.2 miles",
      rating: 4.5,
      address: "456 Strength St",
      hours: "Open · Closes 11PM",
      phone: "(555) 987-6543",
      features: ["Free Weights", "Personal Training"],
    },
    {
      id: 3,
      name: "Cardio & Core",
      distance: "1.5 miles",
      rating: 4.2,
      address: "789 Wellness Blvd",
      hours: "Open · Closes 9PM",
      phone: "(555) 456-7890",
      features: ["Cardio Equipment", "Yoga Studio"],
    },
    {
      id: 4,
      name: "Total Fitness Club",
      distance: "2.3 miles",
      rating: 4.8,
      address: "101 Health Lane",
      hours: "Open · Closes 10PM",
      phone: "(555) 234-5678",
      features: ["Pool", "Sauna", "Basketball Court"],
    },
  ])

  return (
    <div className="space-y-4">
      {gyms.map((gym) => (
        <Card key={gym.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{gym.name}</h3>
                <Badge variant="outline" className="text-xs">
                  {gym.distance}
                </Badge>
              </div>

              <div className="flex items-center text-sm mb-2">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                <span>{gym.rating}</span>
                <span className="mx-2">•</span>
                <span className="text-muted-foreground">{gym.features.join(" • ")}</span>
              </div>

              <div className="space-y-1 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  {gym.address}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  {gym.hours}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="h-3 w-3 mr-1" />
                  {gym.phone}
                </div>
              </div>
            </div>

            <div className="flex border-t">
              <Button variant="ghost" className="flex-1 rounded-none h-10 text-xs">
                Directions
              </Button>
              <div className="w-px bg-border h-10" />
              <Button variant="ghost" className="flex-1 rounded-none h-10 text-xs">
                Website
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

