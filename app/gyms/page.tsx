import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GymMap } from "@/components/gym-map"
import { GymList } from "@/components/gym-list"

export default function GymsPage() {
  return (
    <main className="container px-4 py-6 md:py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Nearby Gyms</h1>
        <p className="text-muted-foreground">Find fitness centers in your area</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Map View</CardTitle>
            <CardDescription>Gyms and fitness centers near your location</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[500px] w-full rounded-md overflow-hidden border">
              <GymMap />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Nearby Locations</CardTitle>
            <CardDescription>Sorted by distance</CardDescription>
          </CardHeader>
          <CardContent>
            <GymList />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

