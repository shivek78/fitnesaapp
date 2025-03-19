import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NutrientsList } from "@/components/nutrients-list"
import { MealPlan } from "@/components/meal-plan"

export default function NutrientsPage() {
  return (
    <main className="container px-4 py-6 md:py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Nutrition Guide</h1>
        <p className="text-muted-foreground">Dietary recommendations for optimal fitness</p>
      </div>

      <Tabs defaultValue="recommendations" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="meal-plan">Meal Plan</TabsTrigger>
        </TabsList>
        <TabsContent value="recommendations" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-green-50 dark:bg-green-950 border-green-100 dark:border-green-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🥦</span>
                  Protein
                </CardTitle>
                <CardDescription>Essential for muscle repair</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Aim for 1.6-2.2g per kg of body weight daily if you're actively training. Focus on lean sources like
                  chicken, fish, tofu, and legumes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 dark:bg-amber-950 border-amber-100 dark:border-amber-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🍚</span>
                  Carbohydrates
                </CardTitle>
                <CardDescription>Primary energy source</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  3-5g per kg of body weight for moderate activity. Choose complex carbs like whole grains, fruits, and
                  vegetables for sustained energy.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 dark:bg-blue-950 border-blue-100 dark:border-blue-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🥑</span>
                  Healthy Fats
                </CardTitle>
                <CardDescription>Essential for hormones</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  0.5-1g per kg of body weight. Include sources like avocados, nuts, seeds, and olive oil for optimal
                  hormone production.
                </p>
              </CardContent>
            </Card>
          </div>

          <NutrientsList />
        </TabsContent>
        <TabsContent value="meal-plan" className="mt-6">
          <MealPlan />
        </TabsContent>
      </Tabs>
    </main>
  )
}

