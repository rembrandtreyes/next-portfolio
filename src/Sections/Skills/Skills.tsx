import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Code from "svg/Code"
import Design from "svg/Design"
import Tools from "svg/Tools"
import Communication from "svg/Communication"

import { SkillsWrapper, SkillContainer, SkillOverflowContainer, SkillCards, SkillArrow } from "./SkillsStyles"

const Skills: React.FC = () => {
  return (
    <SkillsWrapper>
      <h4>Things I have picked up along the way...</h4>
      <SkillContainer>
        <SkillOverflowContainer>
          <SkillCards>
            <Code />
            <h5>Code</h5>
            <p>
              I have been on a journey through many lines of code learning HTML, CSS, and JavaScript. Recently I have
              been using a lot of React in my web applications and really like the problems React solves, DOM
              manipulation!
            </p>
          </SkillCards>
          <SkillCards>
            <Design />
            <h5>Design</h5>
            <p>
              Working as a UX/UI engineer has given me the opportunity do a lot of designing for our products and
              implementing my designs is my favorite part! I use Photoshop, Illustrator, and Xd to build out my designs
              before I turn them into reuseable components.
            </p>
          </SkillCards>
          <SkillCards>
            <Tools />
            <h5>Tools</h5>
            <p>
              I have collected my fair share of tools that improve my productivity and efficiency as a developer to help
              me fend off my greatest villain, Console Errors. I have gone spelunking through the depths of Chrome
              Developer Tools and created ESLint and Prettier files to keep my code in check.
            </p>
          </SkillCards>
          <SkillCards>
            <Communication />
            <h5>Comms</h5>
            <p>
              I posses a strong commitment to team environments with the ability to contribute my expertise. I enjoy
              working as a team member as well as independently. I have well developed skills in prioritizing, decision
              making, time management, stake-holder management, and verbal/written communication
            </p>
          </SkillCards>
          <div style={{ minWidth: "1px" }} />
        </SkillOverflowContainer>
        <SkillArrow>
          <FontAwesomeIcon icon={faArrowRight} />
        </SkillArrow>
      </SkillContainer>
    </SkillsWrapper>
  )
}

export default Skills
