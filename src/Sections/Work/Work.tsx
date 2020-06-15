import { WorkWrapper, ProjectFlex, ProjectWrapper, ImageContainer, TextContainer, SkillPills } from "./WorkStyles"

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

export default Work
