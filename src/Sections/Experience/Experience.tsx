import React, { useState } from "react"
import styled from "styled-components"

const jobs = [
  {
    position: "UX/UI Engineer",
    dates: "January 2019 - Present",
    duties: [
      "Design and code site pages, landing pages, emails, and components that are to be used for Hopjump",
      "Helped solidify a brand direction for Hopjump to span across print, web, and social media",
      "Communicate and collaborate with multi-disciplinary teams of engineers, designers, product managers, analysts and stakeholders on a daily basis",
      "Worked closely with engineers and analysts to understand user experience on Hopjump to create user flows that lead to sales",
      "Design and code email templates for first-party and third-party users",
    ],
  },
  {
    position: "Lead Planogram Analyst",
    dates: "January 2019 - Present",
    duties: [
      "Lead a team of 7 analysts who supported the category analysts for dry foods",
      "Created automation scripts that helped reduce repetitive tasks for analysts",
      "Helped drive item analysis in a $1.5 million remodel for 10 stores across New England",
      "Provided item statistics to category analysts based on key sales metrics",
      "Creating training documents to assist department on using excel and JDA Space Planning",
    ],
  },
]

const TABS = ["Hopjump", "Stop & Shop"]

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <ExperienceWrapper id="experience">
      <h2>
        <span role="img" aria-label="man-technologist">
          👷
        </span>
        Where I did my time
      </h2>
      <WorkContent>
        <CompanyContent>
          {TABS.map((company, index) => (
            <StyledButton key={company} active={activeTab === index} type="button" onClick={() => setActiveTab(index)}>
              {company}
            </StyledButton>
          ))}
        </CompanyContent>
        <JobDuties>
          <h4>{jobs[activeTab].position}</h4>
          <p>{jobs[activeTab].dates}</p>
          <ul>
            {jobs[activeTab].duties.map(duty => (
              <li key={duty}>
                <p>{duty}</p>
              </li>
            ))}
          </ul>
        </JobDuties>
      </WorkContent>
    </ExperienceWrapper>
  )
}

export const ExperienceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  flex-direction: column;
  transition: 250ms ease-in;

  span {
    margin-right: 16px;
  }
  h2 {
    display: flex;
    font-size: 2.25em;

    &:after {
      content: "";
      display: block;
      height: 1px;
      width: 150px;
      background-color: rgb(45, 57, 82);
      position: relative;
      top: 25px;
      margin-left: 16px;
    }
  }
`

export const WorkContent = styled.div`
  display: flex;
  min-height: 500px;
`

export const JobDuties = styled.div`
  width: 500px;
  margin-left: 16px;
  transition: 0.2s ease-in;
  ul {
    list-style: none;
    padding-inline-start: 24px;
  }

  li {
    display: flex;
    line-height: 1.5;
    margin-bottom: 8px;

    p {
      margin: 0;
    }

    &:before {
      content: "▷";
      padding-top: 2px;
      margin-right: 8px;
    }
  }
`

export const CompanyContent = styled.span`
  display: flex;
  flex-direction: column;
`

export const StyledButton = styled.button<{ active: boolean }>`
  background-color: transparent;
  padding: 16px 0;
  width: 150px;
  border-style: hidden;
  font-size: 16px;
  border-left: ${({ active }) => (active ? "3px solid black" : "")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  opacity: ${({ active }) => (active ? "1" : "0.6")};
  transition: 250ms ease-in;
  &:focus {
    outline: none;
  }

  &:active {
    border-style: hidden;
  }
`

export default Experience
