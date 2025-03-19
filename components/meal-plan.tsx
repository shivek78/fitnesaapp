import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MealPlan() {
  // Sample data - in a real app, this would come from an API or database
  const mealPlans = {
    weightLoss: [
      {
        meal: "Breakfast",
        options: [
          "Greek yogurt with berries and a tablespoon of honey",
          "Vegetable omelet with whole grain toast",
          "Overnight oats with almond milk and fruit",
        ],
      },
      {
        meal: "Lunch",
        options: [
          "Grilled chicken salad with olive oil dressing",
          "Quinoa bowl with roasted vegetables and chickpeas",
          "Turkey and avocado wrap with side salad",
        ],
      },
      {
        meal: "Dinner",
        options: [
          "Baked salmon with steamed broccoli and sweet potato",
          "Stir-fried tofu with vegetables and brown rice",
          "Lean beef stew with plenty of vegetables",
        ],
      },
      {
        meal: "Snacks",
        options: ["Apple slices with almond butter", "Carrot sticks with hummus", "Small handful of mixed nuts"],
      },
    ],
    muscleGain: [
      {
        meal: "Breakfast",
        options: [
          "Protein smoothie with banana, protein powder, and peanut butter",
          "Scrambled eggs with cheese, vegetables, and whole grain toast",
          "Protein pancakes with Greek yogurt and berries",
        ],
      },
      {
        meal: "Lunch",
        options: [
          "Chicken breast with brown rice and roasted vegetables",
          "Tuna sandwich on whole grain bread with side salad",
          "Beef and vegetable stir-fry with quinoa",
        ],
      },
      {
        meal: "Dinner",
        options: [
          "Salmon with sweet potato and asparagus",
          "Lean steak with baked potato and steamed vegetables",
          "Turkey meatballs with whole wheat pasta and tomato sauce",
        ],
      },
      {
        meal: "Snacks",
        options: ["Protein shake with banana", "Greek yogurt with honey and nuts", "Cottage cheese with pineapple"],
      },
    ],
    maintenance: [
      {
        meal: "Breakfast",
        options: [
          "Oatmeal with fruit and nuts",
          "Whole grain toast with avocado and poached egg",
          "Smoothie bowl with granola and seeds",
        ],
      },
      {
        meal: "Lunch",
        options: [
          "Mediterranean salad with grilled chicken",
          "Vegetable soup with whole grain roll",
          "Burrito bowl with beans, rice, and vegetables",
        ],
      },
      {
        meal: "Dinner",
        options: [
          "Grilled fish with roasted vegetables",
          "Stir-fried tempeh with vegetables and rice noodles",
          "Chicken and vegetable curry with brown rice",
        ],
      },
      {
        meal: "Snacks",
        options: [
          "Fresh fruit with a small handful of nuts",
          "Vegetable sticks with guacamole",
          "Whole grain crackers with cheese",
        ],
      },
    ],
  }

  return (
    <Tabs defaultValue="weightLoss">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="weightLoss">Weight Loss</TabsTrigger>
        <TabsTrigger value="muscleGain">Muscle Gain</TabsTrigger>
        <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
      </TabsList>

      {Object.entries(mealPlans).map(([key, meals]) => (
        <TabsContent key={key} value={key} className="mt-6 space-y-6">
          {meals.map((mealTime, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{mealTime.meal}</CardTitle>
                <CardDescription>Choose one of the following options</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {mealTime.options.map((option, idx) => (
                    <li key={idx} className="text-sm">
                      {option}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}

