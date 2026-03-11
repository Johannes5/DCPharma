import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#authority" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center" style={{ boxShadow: "var(--shadow-3d-btn)" }}>
              <span className="text-primary-foreground font-display font-bold text-xs">DC</span>
            </div>
            <span className="font-display font-semibold text-lg tracking-tight text-foreground">
              DC Pharma
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-9 px-5 rounded-lg text-sm font-medium bg-primary [background-image:linear-gradient(to_bottom,hsl(0_0%_100%/10%),hsl(0_0%_0%/6%))] text-primary-foreground transition-all duration-150 hover:-translate-y-px active:translate-y-0"
              style={{ boxShadow: "var(--shadow-3d-btn)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-btn-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-btn)")}
              onMouseDown={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-btn-active)")}
              onMouseUp={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-3d-btn-hover)")}
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-accent transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full text-center py-2.5 px-5 rounded-lg text-sm font-medium bg-primary text-primary-foreground mt-3"
              style={{ boxShadow: "var(--shadow-3d-btn)" }}
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
