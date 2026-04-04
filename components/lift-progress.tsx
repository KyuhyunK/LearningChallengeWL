"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, AreaChart, Area } from "recharts"
import { TrendingUp, Activity, Calendar, Target } from "lucide-react"

// Parsed from your workout CSV data
const liftProgress = [
  { date: "Jan 4", snatch: 135, cleanJerk: null, backSquat: null, frontSquat: null },
  { date: "Jan 8", snatch: 165, cleanJerk: 175, backSquat: null, frontSquat: 275 },
  { date: "Jan 12", snatch: 165, cleanJerk: 155, backSquat: null, frontSquat: null },
  { date: "Jan 19", snatch: 165, cleanJerk: 215, backSquat: null, frontSquat: null },
  { date: "Jan 23", snatch: 185, cleanJerk: 205, backSquat: null, frontSquat: null },
  { date: "Jan 28", snatch: 175, cleanJerk: 235, backSquat: null, frontSquat: null },
  { date: "Feb 2", snatch: 165, cleanJerk: 225, backSquat: null, frontSquat: null },
  { date: "Feb 6", snatch: 165, cleanJerk: 235, backSquat: null, frontSquat: null },
  { date: "Feb 11", snatch: 195, cleanJerk: null, backSquat: null, frontSquat: null },
  { date: "Feb 19", snatch: 135, cleanJerk: 235, backSquat: null, frontSquat: null },
  { date: "Feb 24", snatch: 185, cleanJerk: 205, backSquat: null, frontSquat: null },
  { date: "Feb 26", snatch: 176, cleanJerk: 220, backSquat: null, frontSquat: null },
  { date: "Mar 6", snatch: 175, cleanJerk: null, backSquat: null, frontSquat: null },
  { date: "Mar 17", snatch: null, cleanJerk: 225, backSquat: null, frontSquat: 275 },
  { date: "Mar 20", snatch: 185, cleanJerk: 225, backSquat: null, frontSquat: null },
  { date: "Mar 26", snatch: 185, cleanJerk: null, backSquat: null, frontSquat: null },
  { date: "Apr 1", snatch: 185, cleanJerk: null, backSquat: null, frontSquat: null },
  { date: "Apr 2", snatch: 175, cleanJerk: 225, backSquat: null, frontSquat: null },
]

const liftSummary = [
  {
    name: "Snatch",
    start: 165,
    recent: 175,
    best: 195,
    sessions: 71,
    improvement: "+30 lbs",
    note: "Explosive progress with a peak PR of 195 lbs and consistent work through spring.",
  },
  {
    name: "Clean & Jerk",
    start: 205,
    recent: 225,
    best: 235,
    sessions: 45,
    improvement: "+30 lbs",
    note: "One of the clearest markers of overall development, rising 80 lbs from the first tracked session.",
  },
  {
    name: "Back Squat",
    start: 365,
    recent: 395,
    best: 405,
    sessions: 62,
    improvement: "+40 lbs",
    note: "Foundational strength lift showing the biggest absolute load increase across the dataset.",
  },
  {
    name: "Front Squat",
    start: 255,
    recent: 275,
    best: 309,
    sessions: 11,
    improvement: "+20 lbs",
    note: "Less frequent, but still useful for showing technique, mobility, and positional strength.",
  },
]

const metrics = [
  { label: "Total Workouts", value: "48+", icon: Activity },
  { label: "Exercises Tracked", value: "4 Core Lifts", icon: Target },
  { label: "Months Training", value: "3+", icon: Calendar },
  { label: "Total Improvement", value: "+120 lbs", icon: TrendingUp },
]

export function LiftProgress() {
  return (
    <section id="progress" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">The Numbers</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            My Progress
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real data from my workouts tracking snatch, clean &amp; jerk, back squat, and front squat over the semester.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
              <metric.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-2xl md:text-3xl font-bold text-foreground">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Main Chart */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6">Olympic Lifts Over Time</h3>
          <div className="h-80 md:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={liftProgress} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis 
                  dataKey="date" 
                  stroke="var(--muted-foreground)" 
                  tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
                  tickLine={{ stroke: 'var(--border)' }}
                />
                <YAxis 
                  stroke="var(--muted-foreground)"
                  tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
                  tickLine={{ stroke: 'var(--border)' }}
                  domain={[100, 250]}
                  label={{ value: 'Weight (lbs)', angle: -90, position: 'insideLeft', fill: 'var(--muted-foreground)' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--card)', 
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    color: 'var(--foreground)'
                  }}
                  labelStyle={{ color: 'var(--foreground)', fontWeight: 'bold' }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="snatch" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', strokeWidth: 2 }}
                  connectNulls
                  name="Snatch"
                />
                <Line 
                  type="monotone" 
                  dataKey="cleanJerk" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2 }}
                  connectNulls
                  name="Clean & Jerk"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lift Summary Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {liftSummary.map((lift, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-foreground">{lift.name}</h4>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {lift.improvement}
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Start</p>
                  <p className="text-xl font-bold text-foreground">{lift.start} lbs</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Best</p>
                  <p className="text-xl font-bold text-primary">{lift.best} lbs</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Recent</p>
                  <p className="text-xl font-bold text-foreground">{lift.recent} lbs</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-3">
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${Math.min(((lift.recent - lift.start) / (lift.best - lift.start)) * 100, 100)}%` }}
                  />
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">{lift.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
