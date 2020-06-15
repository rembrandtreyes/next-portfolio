import { ExperienceWrapper, CompanyWrapper, JobsContainer, WorkWrapper, JobWrapper } from "./ExperienceStyles"

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

export default Experience
