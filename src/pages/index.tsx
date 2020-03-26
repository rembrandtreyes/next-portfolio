import Head from "next/head"
import Hero from "Sections/Hero/Hero"
import About from "Sections/About"
import Experience from "Sections/Experience"
import Contact from "Sections/Contact"

const Index = () => (
  <>
    <Head>
      <title key="index">Rembrandt Reyes | ReactJS Nerd | Rock Climber | Living in sunny San Francisco!</title>
      <meta name="description" content="JavaScript enthusiast creating great things in React!" />
    </Head>
    <Hero />
    <About />
    <Experience />
    <Contact />
  </>
)

export default Index
