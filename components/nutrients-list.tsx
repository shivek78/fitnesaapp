import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function NutrientsList() {
  // Sample data - in a real app, this would come from an API or database
  const nutrients = [
    {
      name: "Vitamin D",
      description: "Supports bone health and immune function",
      sources: ["Fatty fish", "Egg yolks", "Sunlight exposure", "Fortified foods"],
      dailyValue: 70,
    },
    {
      name: "Magnesium",
      description: "Important for muscle and nerve function",
      sources: ["Nuts", "Seeds", "Whole grains", "Leafy greens"],
      dailyValue: 65,
    },
    {
      name: "Omega-3 Fatty Acids",
      description: "Reduces inflammation and supports heart health",
      sources: ["Fatty fish", "Flaxseeds", "Walnuts", "Chia seeds"],
      dailyValue: 45,
    },
    {
      name: "Iron",
      description: "Essential for oxygen transport in the blood",
      sources: ["Red meat", "Spinach", "Lentils", "Fortified cereals"],
      dailyValue: 80,
    },
    {
      name: "Calcium",
      description: "Critical for bone health and muscle function",
      sources: ["Dairy products", "Fortified plant milks", "Tofu", "Leafy greens"],
      dailyValue: 60,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Nutrients for Fitness</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {nutrients.map((nutrient, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <h3 className="font-medium">{nutrient.name}</h3>
                <span className="text-sm text-muted-foreground">{nutrient.dailyValue}% of daily value</span>
              </div>
              <Progress value={nutrient.dailyValue} className="h-2" />
              <p className="text-sm text-muted-foreground">{nutrient.description}</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {nutrient.sources.map((source, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                  >
                    {source}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

