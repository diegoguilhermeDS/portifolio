import { About } from "../components/sections/About"
import { Contact } from "../components/sections/Contact"
import { Freelancer } from "../components/sections/Freelancer"
import { Hero } from "../components/sections/Hero"
import { ProjectList } from "../components/sections/ProjectList"
import { Skills } from "../components/sections/Skills"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Freelancer />
      <ProjectList />
      <Contact />
    </>
  )
}
