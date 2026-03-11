import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export default function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-grainy overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.93 0.01 240 / 0.4), transparent),
            linear-gradient(180deg, var(--color-background) 0%, oklch(0.97 0.004 260) 50%, var(--color-background) 100%)
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/70 mb-4">
              Get Started
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight text-foreground">
              Ready to Enter
              <br />
              <span className="text-muted-foreground">the Market?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Let&rsquo;s discuss your product, your target market, and how we can fast-track your regulatory approvals. Your first consultation is free.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-lg bg-background border border-border/60 flex items-center justify-center"
                  style={{ boxShadow: "var(--shadow-3d-xs)" }}
                >
                  <Mail className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us at</p>
                  <p className="text-sm font-medium text-foreground">contact@dcpharma.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-lg bg-background border border-border/60 flex items-center justify-center"
                  style={{ boxShadow: "var(--shadow-3d-xs)" }}
                >
                  <Phone className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us</p>
                  <p className="text-sm font-medium text-foreground">+595 21 XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-lg bg-background border border-border/60 flex items-center justify-center"
                  style={{ boxShadow: "var(--shadow-3d-xs)" }}
                >
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Based in</p>
                  <p className="text-sm font-medium text-foreground">Asuncion, Paraguay</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="rounded-2xl bg-card/80 backdrop-blur-sm border border-border/60 p-8 lg:p-10"
            style={{ boxShadow: "var(--shadow-3d-lg)" }}
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Request Your Free Consultation
            </h3>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault()
                alert("Thank you! We will get back to you shortly.")
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full h-10 px-4 rounded-lg text-sm bg-background border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40 transition-shadow"
                    style={{ boxShadow: "var(--shadow-inset-well)" }}
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full h-10 px-4 rounded-lg text-sm bg-background border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40 transition-shadow"
                    style={{ boxShadow: "var(--shadow-inset-well)" }}
                    placeholder="Your Company"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full h-10 px-4 rounded-lg text-sm bg-background border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40 transition-shadow"
                  style={{ boxShadow: "var(--shadow-inset-well)" }}
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Product Category
                </label>
                <select
                  required
                  className="w-full h-10 px-4 rounded-lg text-sm bg-background border border-border/60 text-foreground focus:outline-none focus:ring-2 focus:ring-ring/40 transition-shadow"
                  style={{ boxShadow: "var(--shadow-inset-well)" }}
                >
                  <option value="">Select a category...</option>
                  <option value="pharma">Pharmaceuticals</option>
                  <option value="cosmetics">Cosmetics</option>
                  <option value="food">Food Products</option>
                  <option value="medical-devices">Medical Devices</option>
                  <option value="supplements">Dietary Supplements</option>
                  <option value="veterinary">Veterinary Products</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tell us about your project
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg text-sm bg-background border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40 transition-shadow resize-none"
                  style={{ boxShadow: "var(--shadow-inset-well)" }}
                  placeholder="Which products are you looking to register? What markets are you targeting?"
                />
              </div>
              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl text-sm font-semibold bg-primary [background-image:linear-gradient(to_bottom,hsl(0_0%_100%/10%),hsl(0_0%_0%/6%))] text-primary-foreground transition-all duration-150 hover:-translate-y-px active:translate-y-0"
                style={{ boxShadow: "var(--shadow-3d-btn)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-btn-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-btn)")}
                onMouseDown={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-btn-active)")}
                onMouseUp={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-btn-hover)")}
              >
                Send Request
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
