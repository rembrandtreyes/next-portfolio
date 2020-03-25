import styled from "styled-components"

const About: React.FC = () => (
  <AboutWrapper id="about">
    <ContentWrapper>
      <h2>
        <span role="img" aria-label="man-technologist">
          👨‍💻
        </span>
        Who is he?
      </h2>
      <p>
        I am a front-end engineer creating things to be pixel-perfect. My career has given me the skills to design and
        develop things for the web. I have been focusing on what it means to give users the experience they deserve when
        they use our products
      </p>
      <p>
        I live in sunny San Francisco with my wife and dog. We enjoy hiking, biking, and rock climbing. Whenever I have
        free time you can find me working on open source projects or working on side projects.
      </p>
      <p>Check out what I have been playing with recently:</p>
      <ul>
        <li>React.JS</li>
        <li>Next.JS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Ruby on Rails</li>
        <li>HTML</li>
        <li>Css-in-JS</li>
        <li>Node.js</li>
      </ul>
    </ContentWrapper>
    <ImageWrapper>
      <img
        src="https://res.cloudinary.com/rreyes/image/upload/v1584589987/bigger-coder_cvkxtd.png"
        alt="Person coding on a computer"
      />
    </ImageWrapper>
  </AboutWrapper>
)

export const AboutWrapper = styled.div`
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentWrapper = styled.div`
  width: 500px;
  margin-right: 60px;

  h2 {
    font-size: 2.25em;
    display: flex;

    span {
      margin-right: 16px;
    }
  }

  p {
    line-height: 1.5;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 250px));
    overflow: hidden;
    padding: 0px;
    margin: 20px 0px 0px;
    list-style: none;
  }

  li {
    margin: 4px 0;
    &:before {
      content: "";
      margin-right: 8px;
    }
  }
`

export const ImageWrapper = styled.div`
  width: 500px;

  img {
    width: 100%;
  }
`

export default About
