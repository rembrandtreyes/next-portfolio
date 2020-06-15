import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Code from "svg/Code"
import Design from "svg/Design"
import Tools from "svg/Tools"
import Communication from "svg/Communication"

import { SkillsWrapper, SkillContainer, SkillOverflowContainer, SkillCards, SkillArrow } from "./SkillsStyles"

const Skills = () => {
  return (
    <SkillsWrapper>
      <h4>Things I have picked up along the way...</h4>
      <SkillContainer>
        <SkillOverflowContainer>
          <SkillCards>
            <Code />
            <h5>Code</h5>
            <p>
              I have been on a never ending journey learning the intricacies of each programming language I use on a
              daily basis.
            </p>
          </SkillCards>
          <SkillCards>
            <Design />
            <h5>Design</h5>
            <p>
              My admiration for design has greatly deepen. I am constantly learning new things that I can do with UX/UI
              design.
            </p>
          </SkillCards>
          <SkillCards>
            <Tools />
            <h5>Tools</h5>
            <p>
              Just like Batman&apos;s belt, I have collected my fair share of tools that improve my productivity and
              efficiency as a developer.
            </p>
          </SkillCards>
          <SkillCards>
            <Communication />
            <h5>Comms</h5>
            <p>
              No hard skills here, but communication is still very important in my career. Stakeholder management, good
              communication, teamwork and problem-solving all play a crucial role in my success as a developer.
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
