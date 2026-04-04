import { Play, Clock, Film } from "lucide-react"

export function Documentary() {
  return (
    <section id="documentary" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Watch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Documentary
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A 5 minute documentary showcasing my learning challenge journey, featuring clips, reflections, and key moments.
          </p>
        </div>

        {/* Video Embed Placeholder */}
        <div className="relative aspect-video bg-foreground/5 rounded-2xl overflow-hidden border border-border mb-8">
          {/* Replace the placeholder with your YouTube embed */}
          {
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/FFeyHvDYbCY"
              title="Learning Challenge Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          }
        </div>
      </div>
    </section>
  )
}
