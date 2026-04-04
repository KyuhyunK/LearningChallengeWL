"use client"

import { Dumbbell, ChevronDown } from "lucide-react"

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8">
          <Dumbbell className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-primary">Learning Challenge 2026</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
          Weightlifting
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto text-pretty">
          A semester-long journey of building strength, discipline, and self-awareness through weightlifting.
        </p>
        
        <p className="text-lg text-muted-foreground mb-12">
          By <span className="text-foreground font-medium">Kyuhyun Kim</span> | HOD Capstone
        </p>

        <button
          onClick={scrollToAbout}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          Explore My Journey
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
