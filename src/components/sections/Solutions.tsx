import { ClipboardCheck, Ship, FlaskConical, ArrowRight } from "lucide-react"

const solutions = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Product Registration & Local Approvals",
    tagline: "Get Authorized to Sell, Faster.",
    description:
      "We manage the entire lifecycle of your product's registration. From translating complex scientific dossiers to submitting new national registrations, modifications, and renewals before local authorities, we ensure your products are legally cleared for the market.",
    features: [
      "Scientific dossier translation & adaptation",
      "New product registrations",
      "Modifications & renewals",
      "Regulatory strategy consulting",
    ],
  },
  {
    icon: Ship,
    number: "02",
    title: "Import Setup & Representation",
    tagline: "Seamless Cross-Border Operations.",
    description:
      "Stuck at customs? We handle all import authorizations, Free Sale Certificates, and file management. Don't have a local entity? We have an authorized importing company that can legally represent your products locally so you can start distributing immediately.",
    features: [
      "Import authorization management",
      "Free Sale Certificates",
      "Local entity representation",
      "Customs documentation & clearance",
    ],
  },
  {
    icon: FlaskConical,
    number: "03",
    title: "Audits, Compliance & Laboratory Services",
    tagline: "Maintain Bulletproof Quality Standards.",
    description:
      "Staying compliant doesn't stop after the first approval. We provide ongoing Pharmacovigilance, GMP Audits, and complete analytical/microbiological laboratory validations to ensure your products never face regulatory blowback.",
    features: [
      "Pharmacovigilance monitoring",
      "GMP audit preparation & support",
      "Analytical laboratory validations",
      "Microbiological testing compliance",
    ],
  },
]

export default function Solutions() {
  return (
    <section id="services" className="py-24 lg:py-32 relative bg-grainy overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 20% 50%, oklch(0.96 0.008 250 / 0.4), transparent),
            radial-gradient(ellipse 50% 60% at 80% 50%, oklch(0.97 0.005 200 / 0.3), transparent),
            linear-gradient(180deg, var(--color-background) 0%, oklch(0.975 0.003 260) 50%, var(--color-background) 100%)
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/70 mb-4">
            Our Solutions
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight text-foreground">
            How We Help You
            <br />
            <span className="text-muted-foreground">Enter the Market</span>
          </h2>
        </div>

        <div className="space-y-8">
          {solutions.map((solution, idx) => (
            <div
              key={solution.number}
              className="group relative rounded-2xl bg-card/80 backdrop-blur-sm border border-border/60 overflow-hidden transition-all duration-300 hover:-translate-y-px active:translate-y-0"
              style={{ boxShadow: "var(--shadow-3d-card)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-card-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-card)")}
            >
              <div className={`grid lg:grid-cols-[1fr_1.2fr] gap-8 p-8 lg:p-10 ${idx % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                <div className={`space-y-5 ${idx % 2 === 1 ? "lg:order-2 lg:direction-ltr" : ""}`}>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center"
                    >
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-mono text-muted-foreground/50 font-medium">
                      {solution.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-1">
                      {solution.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {solution.tagline}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group/link"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>

                <div className={`${idx % 2 === 1 ? "lg:order-1 lg:direction-ltr" : ""}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {solution.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 p-4 rounded-xl bg-background/60 border border-border/40"
                        style={{ boxShadow: "var(--shadow-3d-xs)" }}
                      >
                        <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product categories banner */}
        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-4">
            We cover all regulated product categories
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Pharmaceuticals", "Cosmetics", "Food Products", "Medical Devices", "Dietary Supplements", "Veterinary Products"].map(
              (category) => (
                <span
                  key={category}
                  className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-background/80 border border-border/50 text-muted-foreground backdrop-blur-sm"
                  style={{ boxShadow: "var(--shadow-3d-xs)" }}
                >
                  {category}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
