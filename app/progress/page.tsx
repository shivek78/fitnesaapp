import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProgressCharts } from "@/components/progress-charts"
import { ActivityList } from "@/components/activity-list"

export default function ProgressPage() {
  return (
    <main className="container px-4 py-6 md:py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Progress Tracking</h1>
          <p className="text-muted-foreground">Monitor your fitness journey over time</p>
        </div>
        <Tabs defaultValue="week" className="w-full md:w-auto">
          <TabsList>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="year">Year</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Workout Duration</CardTitle>
            <CardDescription>Hours spent exercising</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ProgressCharts type="duration" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Calories Burned</CardTitle>
            <CardDescription>Estimated energy expenditure</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ProgressCharts type="calories" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>Your workout history</CardDescription>
        </CardHeader>
        <CardContent>
          <ActivityList />
        </CardContent>
      </Card>
    </main>
  )
}

