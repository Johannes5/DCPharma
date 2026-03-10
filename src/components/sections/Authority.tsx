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
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
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
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl text-sm font-semibold bg-primary text-primary-foreground transition-shadow duration-200"
                style={{ boxShadow: "var(--shadow-3d-btn)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-btn-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-btn)")}
              >
                Work With Us
              </a>
            </div>
          </div>

          {/* Right column - pillar cards */}
          <div className="space-y-6">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="group relative p-8 rounded-2xl bg-card border border-border/60 transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: "var(--shadow-3d-card)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-card-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-card)")}
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center">
                      <pillar.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-muted-foreground/40">0{idx + 1}</span>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {pillar.title}
                      </h3>
                    </div>
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
