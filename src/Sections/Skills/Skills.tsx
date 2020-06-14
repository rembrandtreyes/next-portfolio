import { useEffect, useRef } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import colors from "config/colors"
import breakpoints, { maxWidth } from "config/breakpoints"
import Code from "svg/Code"
import Design from "svg/Design"
import Tools from "svg/Tools"
import Communication from "svg/Communication"

const Skills = () => {
  return (
    <SkillsWrapper>
      <h3>Things I have picked up along the way...</h3>
      <SkillContainer>
        {/* <SkillsOverflowIndicator style={{ display: "block" }} /> */}
        <SkillOverflowContainer>
          <SkillCards>
            <Code />
            <h4>Code</h4>
            <p>
              I have been on a never ending journey learning the intricacies of each programming language I use on a
              daily basis.
            </p>
            <span>
              <img
                width="32px"
                src="https://res.cloudinary.com/rreyes/image/upload/v1592023040/javascript_kjop7j.png"
                alt="JavaScript Logo"
              />
            </span>
            <span>
              <img
                width="32px"
                src="https://res.cloudinary.com/rreyes/image/upload/v1592023039/react_agte16.png"
                alt="React Logo"
              />
            </span>
            <span>
              <img
                width="32px"
                src="https://res.cloudinary.com/rreyes/image/upload/v1592023039/typescript_h1xuhc.png"
                alt="TypeScript Logo"
              />
            </span>
            <span>
              <img
                width="32px"
                src="https://res.cloudinary.com/rreyes/image/upload/v1592023039/next_p2alvp.png"
                alt="NextJS Logo"
              />
            </span>
            <span>
              <img
                width="32px"
                src="https://res.cloudinary.com/rreyes/image/upload/v1592023039/ruby_huhflo.png"
                alt="Ruby Logo"
              />
            </span>
            <span>
              <img
                width="32px"
                src="https://res.cloudinary.com/rreyes/image/upload/v1592023039/html_g4lxoj.png"
                alt="HTML5 Logo"
              />
            </span>
            <span>
              <img
                width="32px"
                src="https://res.cloudinary.com/rreyes/image/upload/v1592023039/css_vchngo.png"
                alt="CSS3 Logo"
              />
            </span>
          </SkillCards>
          <SkillCards>
            <Design />
            <h4>Design</h4>
            <p>
              My admiration for design has greatly deepen. I am constantly learning new things that I can do with UX/UI
              design.
            </p>
            <span>
              <img
                width="32px"
                src="https://res.cloudinary.com/rreyes/image/upload/v1591932209/ps_o8htum.png"
                alt="PhotoShop Logo"
              />
            </span>
            <span>
              <img
                width="32px"
                src="https://res.cloudinary.com/rreyes/image/upload/v1591932423/ai_zhzhgk.png"
                alt="PhotoShop Logo"
              />
            </span>
          </SkillCards>
          <SkillCards>
            <Tools />
            <h4>Tools</h4>
            <p>
              Just like Batman&apos;s belt, I have collected my fair share of tools that improve my productivity and
              efficiency as a developer.
            </p>
            <span>
              <img
                width="32px"
                src="https://res.cloudinary.com/rreyes/image/upload/v1592023040/git_xjty3k.png"
                alt="PhotoShop Logo"
              />
            </span>
            <span>
              <img
                width="32px"
                src="https://res.cloudinary.com/rreyes/image/upload/v1592023880/vscode-1_mpveue.png"
                alt="PhotoShop Logo"
              />
            </span>
            <span>
              <img
                width="32px"
                src="https://res.cloudinary.com/rreyes/image/upload/v1592023039/jira_ae4v4k.png"
                alt="PhotoShop Logo"
              />
            </span>
            <span>
              <img
                width="32px"
                src="https://res.cloudinary.com/rreyes/image/upload/v1592023039/confluence_hrhzkg.png"
                alt="PhotoShop Logo"
              />
            </span>
          </SkillCards>
          <SkillCards>
            <Communication />
            <h4>Comms</h4>
            <p>
              No nifty icons here, but communication is still very important in my career. Stakeholder management, good
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

export const SkillsWrapper = styled.div`
  max-height: 700px;
  margin: 100px 0;
  background-color: ${colors.light}70;
  padding: 40px 0;

  h3 {
    @media (min-width: ${breakpoints.MEDIUM}) {
      max-width: ${maxWidth.container};
      margin: 0 auto;
    }
  }
`

export const SkillContainer = styled.div`
  margin: 0 auto;
  position: relative;

  @media (min-width: ${breakpoints.MEDIUM}) {
    max-width: ${maxWidth.container};
  }
`

export const SkillCards = styled.div`
  height: 400px;
  min-width: 300px;
  padding: 24px;
  margin: 0 16px 0 0;
  border-radius: 4px;
  background-color: ${colors.white};
  box-shadow: 0px 3px 6px ${colors.medium};

  h4 {
    margin-bottom: 16px;
  }

  img {
    margin: 16px 8px 8px 0;
  }
`

export const SkillOverflowContainer = styled.div`
  display: flex;
  position: relative;
  overflow-x: scroll;
  padding: 24px 0;
  padding-left: 8px;
  margin-left: -8px;
`

export const SkillsOverflowIndicator = styled.div`
  position: absolute;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 1) 100%
  );
  width: 48px;
  height: 448px;
  right: 0;
  top: 24px;
  z-index: 1;
`

export const SkillArrow = styled.div`
  text-align: right;
  position: relative;

  svg {
    position: relative;
    animation-timing-function: linear;
    animation: 1000ms infinite alternate move;
    color: ${colors.brandSecondary};
    height: 24px !important;
    width: 24px !important;
  }

  @keyframes move {
    0% {
      left: 0;
    }
    100% {
      left: 8px;
    }
  }
`

export default Skills
