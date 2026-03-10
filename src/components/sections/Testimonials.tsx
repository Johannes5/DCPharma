import TestimonialsEditorial from "@/components/ui/editorial-testimonial"

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-muted/30 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/70 mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-foreground">
            Trusted by Industry Leaders
          </h2>
        </div>
        <TestimonialsEditorial />
      </div>
    </section>
  )
}
