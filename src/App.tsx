import Navbar from "./components/sections/Navbar"
import Hero from "./components/sections/Hero"
import Testimonials from "./components/sections/Testimonials"
import Problem from "./components/sections/Problem"
import Solutions from "./components/sections/Solutions"
import Authority from "./components/sections/Authority"
import CTA from "./components/sections/CTA"
import Footer from "./components/sections/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Testimonials />
      <Problem />
      <Solutions />
      <Authority />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
