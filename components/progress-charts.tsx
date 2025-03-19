"use client"
import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartGrid,
  ChartLine,
  ChartXAxis,
  ChartYAxis,
  ChartArea,
} from "@/components/ui/chart"

interface ProgressChartsProps {
  type: "duration" | "calories"
}

export function ProgressCharts({ type }: ProgressChartsProps) {
  // Sample data - in a real app, this would come from an API or database
  const durationData = [
    { day: "Mon", hours: 1.2 },
    { day: "Tue", hours: 0.8 },
    { day: "Wed", hours: 1.5 },
    { day: "Thu", hours: 0.5 },
    { day: "Fri", hours: 1.0 },
    { day: "Sat", hours: 2.0 },
    { day: "Sun", hours: 0.7 },
  ]

  const caloriesData = [
    { day: "Mon", calories: 350 },
    { day: "Tue", calories: 280 },
    { day: "Wed", calories: 420 },
    { day: "Thu", calories: 180 },
    { day: "Fri", calories: 300 },
    { day: "Sat", calories: 550 },
    { day: "Sun", calories: 220 },
  ]

  const data = type === "duration" ? durationData : caloriesData
  const dataKey = type === "duration" ? "hours" : "calories"
  const color = type === "duration" ? "hsl(215, 100%, 50%)" : "hsl(10, 100%, 60%)"

  return (
    <ChartContainer data={data} xAxisKey="day" yAxisKey={dataKey} className="h-full">
      <Chart className="h-full">
        <ChartArea />
        <ChartGrid horizontal vertical />
        <ChartXAxis />
        <ChartYAxis />
        <ChartLine dataKey={dataKey} strokeWidth={2} stroke={color} fill={`${color}20`} />
        <ChartTooltip>
          <ChartTooltipContent />
        </ChartTooltip>
      </Chart>
    </ChartContainer>
  )
}

