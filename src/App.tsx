import Hero from "./components/Hero"
import { About } from "./components/About"
import Expertise from "./components/Expertise"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity"

const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <ScrollVelocityContainer className="px-4 py-12 pb-10 text-xl font-bold sm:px-8 sm:py-14 sm:text-3xl md:text-5xl lg:px-14 lg:py-16 lg:text-6xl xl:px-16 xl:py-18 xl:text-6xl 2xl:px-20 2xl:py-20 2xl:text-7xl">
        <ScrollVelocityRow baseVelocity={20} direction={1}>
          <span className="scroll-text-gradient">* CODE * DESIGN * OPTIMIZE * AUTOMATE</span>
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={20} direction={-1}>
          <span className="scroll-text-gradient">* BUILD * INNOVATE * DEPLOY * SCALE * REPEAT</span>
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <Projects />
      <Testimonials />
      <Contact />
    </>
  )
}

export default App
