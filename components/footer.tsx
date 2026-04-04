import { Dumbbell, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-foreground">
            <Dumbbell className="w-6 h-6 text-primary" />
            <span className="font-bold">Olympic Weightlifting</span>
          </div>

          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">Kyuhyun Kim</span> | HOD Capstone 2026
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            A Learning Challenge Website documenting personal growth through weightlifting.
          </p>
        </div>
      </div>
    </footer>
  )
}
