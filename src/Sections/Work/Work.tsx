import styled from "styled-components"
import colors from "config/colors"
import breakpoints, { maxWidth } from "config/breakpoints"

const projects = [
  {
    link: "https://www.tourtailor.com/",
    bgUrl: "https://res.cloudinary.com/rreyes/image/upload/v1592023039/tourtailor-1_qosluv.png",
    name: "TourTailor",
    tech: ["Next", "TypeScript", "Strapi", "Docker"],
  },
  {
    link: "https://hopjump.com/",
    bgUrl: "https://res.cloudinary.com/rreyes/image/upload/v1592023039/hopjump-1_vqz1wy.png",
    name: "Hopjump",
    tech: ["React", "TypeScript", "Ruby", "Docker"],
  },
  {
    link: "http://penta-logics.com/",
    bgUrl: "https://res.cloudinary.com/rreyes/image/upload/v1592023039/pentalogics-1_sfflqo.png",
    name: "Penta-Logics",
    tech: ["Haml", "SCSS", "Ruby"],
  },
  {
    link: "https://wwww.pokervault.com",
    bgUrl: "https://res.cloudinary.com/rreyes/image/upload/v1592023039/pokervault-1_oxyc91.png",
    name: "PokerVault",
    tech: ["SwiftUI", "CoreData"],
  },
]

const Work: React.FC = () => (
  <WorkWrapper>
    <h3>Curated list of projects I have worked on</h3>
    <ProjectFlex>
      {projects.map(({ link, bgUrl, name, tech }) => (
        <ProjectWrapper key={name} href={link} target="_blank">
          <ImageContainer bgUrl={bgUrl} />
          <TextContainer>
            <h4>{name}</h4>
            <hr />
            <p>Tech Stack</p>
            <div>
              {tech.map(skill => (
                <SkillPills key={skill}>{skill}</SkillPills>
              ))}
            </div>
          </TextContainer>
        </ProjectWrapper>
      ))}
    </ProjectFlex>
  </WorkWrapper>
)

export const ProjectFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`

export const ImageContainer = styled.div<{ bgUrl: string }>`
  background-image: ${({ bgUrl }) => `url(${bgUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  position: relative;
  border-radius: 4px 4px 0 0;
`

export const WorkWrapper = styled.div`
  margin: 200px auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: ${maxWidth.container};

  h3 {
    margin: 24px 0;
    text-align: center;
  }
`

export const TextContainer = styled.div`
  padding: 24px;
  color: ${colors.dark};

  hr {
    margin: 8px 0 24px;
    width: 25%;
    border: 4px solid ${colors.brandSecondary};
  }

  h4 {
    // margin-bottom: 16px;
  }

  p {
    margin-bottom: 8px;
  }
`

export const SkillPills = styled.span`
  display: inline-block;
  background-color: ${colors.brandSecondary};
  color: ${colors.white};
  font-family: "Lato", sans-serif;
  border-radius: 24px;
  padding: 8px 16px;
  margin: 8px 8px 0px 0;
  font-weight: 600;

  &:first-child {
    margin-left: 0;
  }
`

export const ProjectWrapper = styled.a`
  width: 400px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 2px 3px ${colors.medium};
  border-radius: 8px;
  margin: 24px;
  text-decoration: none;
  transition: all 0.25s ease;
  border-radius: 4px;

  &:hover {
    box-shadow: 0px 6px 12px ${colors.medium};
    cursor: pointer;
  }
`

export default Work
