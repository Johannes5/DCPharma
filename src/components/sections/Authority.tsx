import { Users, Eye, Handshake } from "lucide-react"

const pillars = [
  {
    icon: Users,
    title: "Industry Insiders",
    description:
      "Decades of collective experience working directly with major worldwide pharmaceutical, food, and medical device companies.",
  },
  {
    icon: Eye,
    title: "Always Up-to-Date",
    description:
      "Regulatory legislation changes constantly. We monitor the local authorities daily so you never get caught off guard by a new compliance rule.",
  },
  {
    icon: Handshake,
    title: "End-to-End Support",
    description:
      "From the first scientific translation to the final import certificate, we offer a personalized, fully transparent approach to your product's lifecycle.",
  },
]

export default function Authority() {
  return (
    <section id="authority" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-start">
          {/* Left column */}
          <div className="lg:sticky lg:top-32">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/70 mb-4">
              Why DC Pharma
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-foreground">
              Your Local Guides
              <br />
              <span className="text-muted-foreground">to Regulatory Success</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Build trust in your expansion with a team that knows the regulatory terrain inside and out.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl text-sm font-semibold bg-primary [background-image:linear-gradient(to_bottom,hsl(0_0%_100%/10%),hsl(0_0%_0%/6%))] text-primary-foreground transition-all duration-150 hover:-translate-y-px active:translate-y-0"
                style={{ boxShadow: "var(--shadow-3d-btn)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-btn-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-btn)")}
                onMouseDown={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-btn-active)")}
                onMouseUp={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-btn-hover)")}
              >
                Work With Us
              </a>
            </div>
          </div>

          {/* Right column - pillar cards */}
          <div className="space-y-4 lg:space-y-6">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="group relative overflow-hidden p-5 lg:p-8 rounded-2xl bg-card border border-border/60 transition-all duration-300 hover:-translate-y-px active:translate-y-0"
                style={{ boxShadow: "var(--shadow-3d-card)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-card-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-card)")}
              >
                {/* Watermark number */}
                <div className="absolute -bottom-4 right-4 text-[7rem] sm:text-[9rem] font-bold font-mono text-foreground/[0.04] select-none pointer-events-none leading-none">
                  0{idx + 1}
                </div>
                <div className="relative flex items-start gap-5 lg:gap-6">
                  <div className="shrink-0">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center">
                      <pillar.icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
