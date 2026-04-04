import { Target, Brain, TrendingUp, Dumbbell } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">About My Challenge</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6 text-balance">
              Why Olympic Weightlifting?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For my learning challenge, I chose to focus on getting better at weightlifting - specifically the Olympic lifts: snatch, clean &amp; jerk, along with squats. 
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I wanted a challenge that would push me outside my comfort zone and teach me skills that transfer to my professional development. This wasn&apos;t just about getting stronger, but about developing consistency, learning to manage myself better, and introducing myself to a new community.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Olympic weightlifting requires patience, proper form, progressive overload, and consistency. I tracked over 48 workouts, documenting every lift to understand how habits, data, recovery, and mindset shape long-term progress. 
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-background rounded-xl border border-border">
              <Target className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Clear Goals</h3>
              <p className="text-muted-foreground">Started with 165 lb snatch, 205 lb clean &amp; jerk. Set measurable targets and tracked every session.</p>
            </div>
            
            <div className="p-6 bg-background rounded-xl border border-border">
              <Brain className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Self-Awareness</h3>
              <p className="text-muted-foreground">Knowing my strengths, how I work and learn best, and using that self-awareness to perform well and grow.</p>
            </div>
            
            <div className="p-6 bg-background rounded-xl border border-border">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Data-Driven Growth</h3>
              <p className="text-muted-foreground">What gets measured gets managed. 3,130+ data points tracked across 4 core lifts over the semester.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
