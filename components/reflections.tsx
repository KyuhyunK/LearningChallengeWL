import { Quote } from "lucide-react"

const reflections = [
  {
    quote: "Knowing your strengths, how you work and learn best, and using that self-awareness to choose work and habits that help you perform well and grow.",
    context: "On Managing Oneself - Module 1"
  },
  {
    quote: "Being comfortable not knowing helps you learn faster and ask better questions. Embracing the discomfort will avoid assumptions and gain deeper insight.",
    context: "On Learning - Module 1"
  },
  {
    quote: "I shifted the project from just lifting more weight to understanding how habits, data, recovery, and mindset shape long-term progress.",
    context: "Week 11+ Reflection"
  }
]

const insights = [
  {
    title: "Discipline Over Motivation",
    description: "Motivation fades, but discipline keeps you going. I showed up even when I didn&apos;t feel like it - that&apos;s what pushed my snatch from 165 to 195 lbs."
  },
  {
    title: "Progress Isn't Linear",
    description: "Some days I hit 195 lbs snatch, other days I worked at 165 lbs. The overall trajectory mattered more than individual sessions."
  },
  {
    title: "Track Everything",
    description: "What gets measured gets managed. My 48+ logged workouts became a mirror of my self-management journey - data tells the story."
  }
]

export function Reflections() {
  return (
    <section id="reflections" className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Personal Growth</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Reflections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key insights and lessons learned throughout my weightlifting journey.
          </p>
        </div>

        {/* Quotes Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {reflections.map((item, index) => (
            <div key={index} className="p-6 bg-background rounded-xl border border-border relative">
              <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
              <p className="text-foreground italic mb-4 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              <span className="text-sm text-muted-foreground">{item.context}</span>
            </div>
          ))}
        </div>

        {/* Key Insights */}
        <div className="bg-background rounded-2xl border border-border p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Key Insights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {insights.map((insight, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">{insight.title}</h4>
                  <p className="text-muted-foreground">{insight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
