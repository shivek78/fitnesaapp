import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Dumbbell, Heart, Trophy } from "lucide-react"

export default function Home() {
  // Sample data - in a real app, this would come from a database or API
  const goals = [
    { id: 1, title: "Run 5km", progress: 60, target: "3 times a week" },
    { id: 2, title: "Strength training", progress: 40, target: "2 times a week" },
    { id: 3, title: "Drink water", progress: 80, target: "2L daily" },
  ]

  const quotes = [
    "The only bad workout is the one that didn't happen.",
    "Fitness is not about being better than someone else. It's about being better than you used to be.",
    "Take care of your body. It's the only place you have to live.",
  ]

  // Get a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <main className="container px-4 py-6 md:py-10">
      <section className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Welcome back, Alex!</h1>
          <Button variant="outline" size="sm">
            Edit Profile
          </Button>
        </div>

        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-none mb-8">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <Trophy className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-lg font-medium">{randomQuote}</p>
                <p className="text-sm text-muted-foreground mt-1">Your daily motivation</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Link href="/progress" className="group">
            <Card className="h-full transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  Progress
                </CardTitle>
                <CardDescription>Track your fitness journey</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                  View <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/workouts" className="group">
            <Card className="h-full transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-orange-500" />
                  Workouts
                </CardTitle>
                <CardDescription>Exercise library and routines</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                  View <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/nutrients" className="group">
            <Card className="h-full transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v8"></path>
                    <path d="M4.93 10.93 12 18l7.07-7.07"></path>
                    <path d="M2 18h20"></path>
                  </svg>
                  Nutrients
                </CardTitle>
                <CardDescription>Dietary recommendations</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                  View <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/gyms" className="group">
            <Card className="h-full transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-purple-500" />
                  Nearby Gyms
                </CardTitle>
                <CardDescription>Find fitness centers near you</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                  View <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </Link>
        </div>

        <h2 className="text-2xl font-bold mb-4">Your Goals</h2>
        <div className="space-y-4">
          {goals.map((goal) => (
            <Card key={goal.id}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{goal.title}</h3>
                  <span className="text-sm text-muted-foreground">{goal.target}</span>
                </div>
                <Progress value={goal.progress} className="h-2" />
                <p className="text-sm text-right mt-1">{goal.progress}%</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

