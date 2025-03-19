import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WorkoutCategory } from "@/components/workout-category"
import {
  strengthExercises,
  cardioExercises,
  flexibilityExercises,
  coreExercises,
  mindBodyExercises,
} from "@/lib/workout-data"

export default function WorkoutsPage() {
  return (
    <main className="container px-4 py-6 md:py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Workout Library</h1>
        <p className="text-muted-foreground">Find the perfect exercises for your fitness goals</p>
      </div>

      <Tabs defaultValue="strength" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
          <TabsTrigger
            value="strength"
            className="data-[state=active]:bg-red-100 data-[state=active]:text-red-900 dark:data-[state=active]:bg-red-900 dark:data-[state=active]:text-red-100"
          >
            Strength
          </TabsTrigger>
          <TabsTrigger
            value="cardio"
            className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900 dark:data-[state=active]:bg-blue-900 dark:data-[state=active]:text-blue-100"
          >
            Cardio
          </TabsTrigger>
          <TabsTrigger
            value="flexibility"
            className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-900 dark:data-[state=active]:bg-purple-900 dark:data-[state=active]:text-purple-100"
          >
            Flexibility
          </TabsTrigger>
          <TabsTrigger
            value="core"
            className="data-[state=active]:bg-yellow-100 data-[state=active]:text-yellow-900 dark:data-[state=active]:bg-yellow-900 dark:data-[state=active]:text-yellow-100"
          >
            Core
          </TabsTrigger>
          <TabsTrigger
            value="mindbody"
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-900 dark:data-[state=active]:bg-green-900 dark:data-[state=active]:text-green-100"
          >
            Mind-Body
          </TabsTrigger>
        </TabsList>

        <TabsContent value="strength">
          <Card>
            <CardHeader>
              <CardTitle>Strength Training</CardTitle>
              <CardDescription>Exercises for muscle building and toning</CardDescription>
            </CardHeader>
            <CardContent>
              <WorkoutCategory exercises={strengthExercises} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cardio">
          <Card>
            <CardHeader>
              <CardTitle>Cardio</CardTitle>
              <CardDescription>Exercises for endurance and fat loss</CardDescription>
            </CardHeader>
            <CardContent>
              <WorkoutCategory exercises={cardioExercises} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="flexibility">
          <Card>
            <CardHeader>
              <CardTitle>Flexibility & Mobility</CardTitle>
              <CardDescription>Exercises for recovery and posture</CardDescription>
            </CardHeader>
            <CardContent>
              <WorkoutCategory exercises={flexibilityExercises} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="core">
          <Card>
            <CardHeader>
              <CardTitle>Core & Stability</CardTitle>
              <CardDescription>Exercises for abs and balance</CardDescription>
            </CardHeader>
            <CardContent>
              <WorkoutCategory exercises={coreExercises} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mindbody">
          <Card>
            <CardHeader>
              <CardTitle>Mind-Body Exercises</CardTitle>
              <CardDescription>Exercises for relaxation and focus</CardDescription>
            </CardHeader>
            <CardContent>
              <WorkoutCategory exercises={mindBodyExercises} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}

