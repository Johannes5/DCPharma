export default function Footer() {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center">
                <span className="font-display font-bold text-xs text-primary-foreground">DC</span>
              </div>
              <span className="font-display font-semibold text-lg tracking-tight">
                DC Pharma
              </span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              Your trusted regulatory consulting partner for pharmaceutical, cosmetic, and food market entry in Paraguay and Argentina.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Product Registration
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Import & Representation
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Audits & Compliance
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Laboratory Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#authority" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} DC Pharma. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Asuncion, Paraguay
          </p>
        </div>
      </div>
    </footer>
  )
}
