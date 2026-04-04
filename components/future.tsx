import { ArrowRight, Briefcase, Dumbbell, GraduationCap } from "lucide-react"

export function Future() {
  return (
    <section id="future" className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">What Comes Next</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Moving Forward
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How this learning challenge has shaped my approach to self-management and my plans for continued growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Continuing the Challenge */}
          <div className="bg-background rounded-2xl border border-border p-8">
            <Dumbbell className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Continuing the Lifts</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Push snatch past 200 lbs - currently peaked at 195</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Target 250 lb clean &amp; jerk - currently at 235</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Continue tracking every session with data</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Focus more on front squat frequency and technique</span>
              </li>
            </ul>
          </div>

          {/* Professional Development */}
          <div className="bg-background rounded-2xl border border-border p-8">
            <Briefcase className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Professional Growth</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Apply discipline and consistency to career goals</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Embrace failure as a path to growth</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            What I Hope Others Learn From My Journey
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Self-management isn&apos;t just about productivity - it&apos;s about understanding yourself deeply enough to know how you work best. Through weightlifting, I learned that sustainable growth comes from consistency, patience, and the willingness to show up even when it&apos;s hard. But most importantly, you'll make the most progress when having fun so learn things in a way that you enjoy. 
          </p>
        </div>
      </div>
    </section>
  )
}
