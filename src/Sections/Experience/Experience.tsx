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
      "Design, code and QA site pages, landing pages, emails, and components that we use on a hotel booking website",
      "Launching a new travel website that utilizes Next.JS and a headless CMS Strapi",
      "Convert JavaScript files to TypeScript to utilize its powerful type system and to make files easier to read and debug",
      "Worked closely with hotel analysts to understand user experience on our hotel booking site to design, code and A/B test better funnels for our user flows that lead to increased bookings.",
      "Designed and created HTML & CSS email templates for first-party and third-party users",
      "Refactored React code base from Class based components to Functional components to utilize React Hooks",
      "Promoted from Junior Developer to UX/UI Engineer",
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
