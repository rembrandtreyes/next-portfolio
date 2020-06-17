import Head from "next/head"
import Hero from "Sections/Hero/Hero"
import About from "Sections/About"
import Experience from "Sections/Experience"
import Contact from "Sections/Contact"
import Work from "Sections/Work"
import Skills from "Sections/Skills/Skills"
import Layout from "components/layout"

const Index: React.FC = () => (
  <Layout>
    <Head>
      <title key="home-page">Rembrandt Reyes | ReactJS Nerd | Rock Climber | Living in sunny San Francisco</title>
      <meta name="description" content="JavaScript enthusiast creating great things in React!" />
    </Head>
    <Hero />
    <About />
    <Skills />
    <Work />
    <Experience />
    <Contact />
  </Layout>
)

export default Index
