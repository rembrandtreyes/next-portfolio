import styled from "styled-components"

import colors from "config/colors"

import { ExperienceWrapper, CompanyWrapper } from "./ExperienceStyles"
import breakpoints from "config/breakpoints"

const jobs = [
  {
    company: "Hopjump",
    dates: "January 2019 - Present",
    positions: ["UX/UI Engineer", "Junior Developer"],
    city: "Boston",
  },
  {
    company: "SAS Retail Services",
    dates: "October 2017 - January 2019",
    positions: ["Lead Space Planning Analyst", "Space Planning Analyst", "Space Planning Support Analyst"],
    city: "Boston",
  },
]

const Experience: React.FC = () => {
  return (
    <ExperienceWrapper>
      <h3>
        <span role="img" aria-label="man-technologist">
          👨‍💻
        </span>
        Where I did my time
      </h3>
      <JobsContainer>
        {jobs.map(({ company, dates, positions, city }) => (
          <WorkWrapper key={company}>
            <CompanyWrapper>
              <h4>{company}</h4>
              <h4>{city}</h4>
            </CompanyWrapper>
            <JobWrapper>
              <p>{dates}</p>
              {positions.map(position => (
                <p key={position}>{position}</p>
              ))}
            </JobWrapper>
          </WorkWrapper>
        ))}
      </JobsContainer>
    </ExperienceWrapper>
  )
}

export const JobsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.MEDIUM}) {
    flex-direction: row;
  }
  justify-content: space-between;
`

export const JobWrapper = styled.div`
  p:nth-child(n + 2) {
    margin: 8px 0;
  }
`

export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  max-width: 500px;
  border-radius: 4px;
`

export default Experience
