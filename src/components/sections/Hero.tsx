import { ArrowRight, ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grainy">
      {/* Background gradient matching the hero image style */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 50%, oklch(0.92 0.01 240 / 0.5), transparent),
            radial-gradient(ellipse 50% 80% at 30% 60%, oklch(0.95 0.005 260 / 0.3), transparent),
            linear-gradient(180deg, oklch(0.98 0.002 270) 0%, oklch(0.96 0.004 250) 50%, oklch(0.97 0.002 280) 100%)
          `,
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content - left side */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 border border-border/60 text-xs font-medium text-muted-foreground backdrop-blur-sm"
                style={{ boxShadow: "var(--shadow-3d-xs)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Trusted by International Pharma Companies
              </div>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-foreground">
              Fast-Track Your{" "}
              <span className="relative">
                Market Entry.
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8.5C50 3 100 2 148 5.5C196 9 250 6 298 3.5" stroke="oklch(0.55 0.15 250)" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
                </svg>
              </span>
              <br />
              <span className="text-muted-foreground font-medium">
                Leave the Regulatory Red&nbsp;Tape&nbsp;to&nbsp;Us.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              We help international pharmaceutical, cosmetic, and food companies navigate complex local regulations, secure approvals, and launch their products in Paraguay and Argentina without costly delays.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl text-sm font-semibold bg-primary text-primary-foreground transition-all duration-200"
                style={{ boxShadow: "var(--shadow-3d-btn)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-btn-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-btn)")}
              >
                Request Your Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl text-sm font-semibold bg-background/80 text-foreground border border-border/60 backdrop-blur-sm transition-all duration-200 hover:bg-background"
                style={{ boxShadow: "var(--shadow-3d-sm)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-md)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-sm)")}
              >
                Explore Our Services
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Paraguay & Argentina
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                End-to-End Service
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Decades of Experience
              </div>
            </div>
          </div>

          {/* Image - right side */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Gradient glow behind image — sits behind the transparent PNG */}
            <div
              className="absolute inset-0 z-0 rounded-3xl"
              style={{
                background: `
                  radial-gradient(ellipse 80% 80% at 50% 50%, oklch(0.92 0.015 230), oklch(0.95 0.008 250 / 0.6) 60%, transparent),
                  radial-gradient(ellipse 60% 50% at 30% 65%, oklch(0.93 0.012 260 / 0.6), transparent),
                  radial-gradient(ellipse 50% 40% at 70% 35%, oklch(0.95 0.008 210 / 0.5), transparent)
                `,
              }}
            />
            <div
              className="relative z-10 w-full max-w-lg xl:max-w-xl"
            >
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="/hero-smartphone.png"
                />
                <img
                  src="/hero-original.png"
                  alt="DC Pharma - Comprehensive LATAM Regulatory Guidance"
                  className="w-full rounded-2xl"
                  style={{
                    boxShadow: "var(--shadow-3d-xl)",
                  }}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
