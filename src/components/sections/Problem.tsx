import { AlertTriangle, Globe, FileX, Clock } from "lucide-react"

const painPoints = [
  {
    icon: FileX,
    title: "Stalled Import Permits",
    description: "Documentation bottlenecks that keep your products sitting in warehouses instead of reaching shelves.",
  },
  {
    icon: Globe,
    title: "Language Barriers",
    description: "Critical regulatory documents lost in translation, leading to costly rejections and resubmissions.",
  },
  {
    icon: Clock,
    title: "Confusing Registration Updates",
    description: "Constantly shifting local requirements that catch foreign companies off guard mid-process.",
  },
  {
    icon: AlertTriangle,
    title: "Local Quality Audits",
    description: "Unexpected compliance inspections with standards you weren't prepared to meet.",
  },
]

export default function Problem() {
  return (
    <section className="py-24 lg:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/70 mb-4">
            The Challenge
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight text-foreground">
            Don&rsquo;t let local bureaucracy
            <br />
            <span className="text-muted-foreground">stall your global growth.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Expanding your product line into a new market is a massive opportunity, but navigating foreign health ministries, language barriers, and endless documentation can bring your launch to a grinding halt.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="group relative p-6 rounded-xl bg-card border border-border/60 transition-all duration-300 hover:-translate-y-0.5"
              style={{ boxShadow: "var(--shadow-3d-card)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-card-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-card)")}
            >
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <point.icon className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-muted/50 border border-border/40">
          <p className="text-muted-foreground leading-relaxed">
            Whether you&rsquo;re dealing with stalled import permits, confusing product registration updates, or local quality audits, <strong className="text-foreground font-medium">DC Pharma acts as your boots-on-the-ground regulatory partner.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
