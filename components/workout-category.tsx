"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WorkoutTimer } from "@/components/workout-timer"
import type { Exercise } from "@/lib/workout-data"
import { Clock, Dumbbell, Info } from "lucide-react"

interface WorkoutCategoryProps {
  exercises: Exercise[]
}

export function WorkoutCategory({ exercises }: WorkoutCategoryProps) {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null)

  const subcategories = [...new Set(exercises.map((exercise) => exercise.subcategory))]

  return (
    <div className="space-y-6">
      <Tabs defaultValue={subcategories[0]} className="w-full">
        <TabsList className="w-full justify-start overflow-auto">
          {subcategories.map((subcategory) => (
            <TabsTrigger key={subcategory} value={subcategory} className="whitespace-nowrap">
              {subcategory}
            </TabsTrigger>
          ))}
        </TabsList>

        {subcategories.map((subcategory) => (
          <TabsContent key={subcategory} value={subcategory} className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {exercises
                .filter((exercise) => exercise.subcategory === subcategory)
                .map((exercise) => (
                  <Card key={exercise.id} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={exercise.image || "/placeholder.svg"}
                        alt={exercise.name}
                        fill
                        className="object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm">
                        {exercise.duration}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-lg">{exercise.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{exercise.description}</p>
                      <div className="flex items-center mt-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{exercise.duration}</span>
                        {exercise.equipment && (
                          <>
                            <span className="mx-2">•</span>
                            <Dumbbell className="h-4 w-4 mr-1" />
                            <span>{exercise.equipment}</span>
                          </>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={() => setSelectedExercise(exercise)}
                          >
                            <Info className="h-4 w-4 mr-2" />
                            Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>{selectedExercise?.name}</DialogTitle>
                            <DialogDescription>
                              {selectedExercise?.subcategory} • {selectedExercise?.duration}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="relative h-48 w-full mt-2 rounded-md overflow-hidden">
                            <Image
                              src={selectedExercise?.image || "/placeholder.svg"}
                              alt={selectedExercise?.name || "Exercise"}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="mt-4 space-y-4">
                            <div>
                              <h4 className="text-sm font-medium">Description</h4>
                              <p className="text-sm text-muted-foreground mt-1">{selectedExercise?.description}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium">Instructions</h4>
                              <ol className="text-sm text-muted-foreground mt-1 list-decimal list-inside space-y-1">
                                {selectedExercise?.instructions.map((instruction, index) => (
                                  <li key={index}>{instruction}</li>
                                ))}
                              </ol>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium">Benefits</h4>
                              <ul className="text-sm text-muted-foreground mt-1 list-disc list-inside space-y-1">
                                {selectedExercise?.benefits.map((benefit, index) => (
                                  <li key={index}>{benefit}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" className="w-full" onClick={() => setSelectedExercise(exercise)}>
                            Start
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>{selectedExercise?.name}</DialogTitle>
                            <DialogDescription>Follow along with the timer</DialogDescription>
                          </DialogHeader>
                          <div className="relative h-48 w-full mt-2 rounded-md overflow-hidden">
                            <Image
                              src={selectedExercise?.image || "/placeholder.svg"}
                              alt={selectedExercise?.name || "Exercise"}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <WorkoutTimer
                            duration={selectedExercise?.durationInSeconds || 60}
                            exerciseName={selectedExercise?.name || "Exercise"}
                          />
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

