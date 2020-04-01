import React, { useState } from "react"

import {
  ExperienceWrapper,
  WorkContent,
  CompanyWrapper,
  Company,
  StyledButton,
  StyledLine,
  JobDuties,
} from "./ExperienceStyles"

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
    dates: "October 2017 - January 2019",
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

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <ExperienceWrapper id="experience">
      <h2>
        <span role="img" aria-label="man-technologist">
          👨‍💻
        </span>
        Where I did my time
      </h2>
      <WorkContent>
        <CompanyWrapper>
          <Company>
            {TABS.map((company, index) => (
              <StyledButton
                key={company}
                active={activeTab === index}
                type="button"
                onClick={() => setActiveTab(index)}
              >
                {company}
              </StyledButton>
            ))}
          </Company>
          <StyledLine activeTab={activeTab} />
        </CompanyWrapper>
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

export default Experience
