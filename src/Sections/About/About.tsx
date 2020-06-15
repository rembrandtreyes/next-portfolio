import { AboutWrapper, ContentWrapper } from "./AboutStyles"

const About: React.FC = () => (
  <AboutWrapper>
    <ContentWrapper>
      <h3>
        <span role="img" aria-label="nerd-face">
          👋
        </span>
        Hi there, I&apos;m Rembrandt
      </h3>
      <p>
        A front-end engineer crafting websites to be responsive and pixel-perfect. My career has given me the skills to
        design and develop digital masterpieces. I have been focused on what it means to give users the experience they
        deserve when surfing the web.
      </p>
      <br />
      <p>
        I live in sunny San Francisco with my wife and dog. We enjoy hiking, biking, and rock climbing. Whenever I have
        free time you can find me working on open-source projects or personal projects.
      </p>
      <br />
      <p>Check out what I have been playing with recently:</p>
      <ul>
        <li>React</li>
        <li>Next</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Ruby on Rails</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SwiftUI</li>
      </ul>
    </ContentWrapper>
  </AboutWrapper>
)

export default About
