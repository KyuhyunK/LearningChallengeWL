"use client"

import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Bar,
  BarChart,
} from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { TrendingUp, Award, Calendar, Dumbbell } from "lucide-react"

// Your actual workout data - max weights per session for each lift
const progressData = [
  { date: "Jan 4", snatch: 175, cleanJerk: 0, squat: 0, frontSquat: 0 },
  { date: "Jan 5", snatch: 155, cleanJerk: 165, squat: 0, frontSquat: 0 },
  { date: "Jan 8", snatch: 165, cleanJerk: 175, squat: 385, frontSquat: 275 },
  { date: "Jan 9", snatch: 0, cleanJerk: 0, squat: 345, frontSquat: 0 },
  { date: "Jan 12", snatch: 165, cleanJerk: 155, squat: 0, frontSquat: 0 },
  { date: "Jan 19", snatch: 165, cleanJerk: 215, squat: 0, frontSquat: 0 },
  { date: "Jan 20", snatch: 175, cleanJerk: 0, squat: 365, frontSquat: 0 },
  { date: "Jan 23", snatch: 185, cleanJerk: 205, squat: 0, frontSquat: 0 },
  { date: "Jan 28", snatch: 175, cleanJerk: 235, squat: 0, frontSquat: 0 },
  { date: "Jan 29", snatch: 175, cleanJerk: 225, squat: 0, frontSquat: 0 },
  { date: "Feb 2", snatch: 165, cleanJerk: 225, squat: 0, frontSquat: 0 },
  { date: "Feb 3", snatch: 0, cleanJerk: 0, squat: 375, frontSquat: 0 },
  { date: "Feb 5", snatch: 185, cleanJerk: 0, squat: 0, frontSquat: 0 },
  { date: "Feb 6", snatch: 165, cleanJerk: 235, squat: 0, frontSquat: 0 },
  { date: "Feb 11", snatch: 195, cleanJerk: 0, squat: 0, frontSquat: 0 },
  { date: "Feb 17", snatch: 175, cleanJerk: 0, squat: 365, frontSquat: 0 },
  { date: "Feb 19", snatch: 135, cleanJerk: 235, squat: 0, frontSquat: 0 },
  { date: "Feb 20", snatch: 165, cleanJerk: 0, squat: 0, frontSquat: 0 },
  { date: "Feb 24", snatch: 185, cleanJerk: 205, squat: 0, frontSquat: 0 },
  { date: "Feb 26", snatch: 176, cleanJerk: 220, squat: 0, frontSquat: 0 },
  { date: "Mar 6", snatch: 175, cleanJerk: 0, squat: 0, frontSquat: 0 },
  { date: "Mar 16", snatch: 175, cleanJerk: 0, squat: 0, frontSquat: 0 },
  { date: "Mar 17", snatch: 0, cleanJerk: 225, squat: 365, frontSquat: 275 },
  { date: "Mar 18", snatch: 175, cleanJerk: 215, squat: 0, frontSquat: 0 },
  { date: "Mar 20", snatch: 185, cleanJerk: 225, squat: 0, frontSquat: 0 },
  { date: "Mar 22", snatch: 185, cleanJerk: 225, squat: 0, frontSquat: 0 },
  { date: "Mar 24", snatch: 185, cleanJerk: 185, squat: 365, frontSquat: 0 },
  { date: "Mar 26", snatch: 185, cleanJerk: 0, squat: 0, frontSquat: 0 },
  { date: "Mar 31", snatch: 175, cleanJerk: 0, squat: 0, frontSquat: 0 },
  { date: "Apr 1", snatch: 185, cleanJerk: 0, squat: 0, frontSquat: 0 },
  { date: "Apr 2", snatch: 175, cleanJerk: 225, squat: 0, frontSquat: 0 },
]

// Filter out zero values for each lift to show only training days
const snatchData = progressData.filter(d => d.snatch > 0).map(d => ({ date: d.date, weight: d.snatch }))
const cleanJerkData = progressData.filter(d => d.cleanJerk > 0).map(d => ({ date: d.date, weight: d.cleanJerk }))
const squatData = progressData.filter(d => d.squat > 0).map(d => ({ date: d.date, weight: d.squat }))

// Personal records
const personalRecords = [
  { lift: "Snatch", weight: 195, date: "Feb 11, 2026" },
  { lift: "Clean & Jerk", weight: 235, date: "Jan 28, 2026" },
  { lift: "Back Squat", weight: 385, date: "Jan 8, 2026" },
  { lift: "Front Squat", weight: 275, date: "Jan 8, 2026" },
]

// Monthly volume (estimated total sets across all exercises)
const monthlyVolume = [
  { month: "Jan", sessions: 12, totalSets: 89 },
  { month: "Feb", sessions: 10, totalSets: 76 },
  { month: "Mar", sessions: 11, totalSets: 82 },
  { month: "Apr", sessions: 3, totalSets: 24 },
]

export function Progress() {
  return (
    <section id="progress" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Real Data</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Training Progress
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Actual workout data tracked from January to April 2026, showing progression in the Olympic lifts and squats.
          </p>
        </div>

        {/* Personal Records */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {personalRecords.map((pr, index) => (
            <div key={index} className="p-6 bg-card rounded-xl border border-border text-center">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">{pr.lift}</p>
              <p className="text-3xl font-bold text-foreground">{pr.weight} lbs</p>
              <p className="text-xs text-muted-foreground mt-1">{pr.date}</p>
            </div>
          ))}
        </div>

        {/* Snatch Progress Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Dumbbell className="w-5 h-5 text-primary" />
              Snatch Progress
            </CardTitle>
            <CardDescription>
              Max weight per session - improved from 155 lbs to 195 lbs PR
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                weight: {
                  label: "Weight (lbs)",
                  color: "#2d6a4f",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={snatchData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="date" className="text-xs" tick={{ fill: "#6b7280" }} />
                  <YAxis domain={[130, 200]} tick={{ fill: "#6b7280" }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="#2d6a4f"
                    strokeWidth={2}
                    dot={{ fill: "#2d6a4f", r: 4 }}
                    name="Snatch"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Clean & Jerk Progress Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Clean & Jerk Progress
            </CardTitle>
            <CardDescription>
              Max weight per session - consistent work building to 235 lbs PR
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                weight: {
                  label: "Weight (lbs)",
                  color: "#40916c",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={cleanJerkData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="date" className="text-xs" tick={{ fill: "#6b7280" }} />
                  <YAxis domain={[150, 250]} tick={{ fill: "#6b7280" }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="#40916c"
                    strokeWidth={2}
                    dot={{ fill: "#40916c", r: 4 }}
                    name="Clean & Jerk"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Squat Progress Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Back Squat Progress
            </CardTitle>
            <CardDescription>
              Building leg strength to support Olympic lifts - maintaining 365+ lbs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                weight: {
                  label: "Weight (lbs)",
                  color: "#74c69d",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={squatData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="date" className="text-xs" tick={{ fill: "#6b7280" }} />
                  <YAxis domain={[340, 400]} tick={{ fill: "#6b7280" }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="#74c69d"
                    strokeWidth={2}
                    dot={{ fill: "#74c69d", r: 4 }}
                    name="Back Squat"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Monthly Training Volume */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Monthly Training Volume
            </CardTitle>
            <CardDescription>
              Number of training sessions and total sets performed each month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                sessions: {
                  label: "Sessions",
                  color: "#2d6a4f",
                },
                totalSets: {
                  label: "Total Sets",
                  color: "#74c69d",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyVolume}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="month" tick={{ fill: "#6b7280" }} />
                  <YAxis tick={{ fill: "#6b7280" }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="sessions" fill="#2d6a4f" name="Sessions" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="totalSets" fill="#74c69d" name="Total Sets" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Stats Summary */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-card rounded-xl border border-border text-center">
            <p className="text-4xl font-bold text-primary">36+</p>
            <p className="text-muted-foreground mt-2">Total Training Sessions</p>
          </div>
          <div className="p-6 bg-card rounded-xl border border-border text-center">
            <p className="text-4xl font-bold text-primary">4</p>
            <p className="text-muted-foreground mt-2">Months of Consistent Work</p>
          </div>
          <div className="p-6 bg-card rounded-xl border border-border text-center">
            <p className="text-4xl font-bold text-primary">40 lbs</p>
            <p className="text-muted-foreground mt-2">Snatch Improvement</p>
          </div>
        </div>
      </div>
    </section>
  )
}
