import {
  ExperienceWrapper,
  CompanyWrapper,
  JobsContainer,
  WorkWrapper,
  JobWrapper,
  Company,
  City,
} from "./ExperienceStyles"

const jobs = [
  {
    company: "Hopjump",
    city: "Boston, MA",
    positions: [
      { job: "UX/UI Engineer", date: "Jan 2020 - Present" },
      { job: "Junior Developer", date: "Jan 2019 - Jan 2020" },
    ],
  },
  {
    company: "SAS Retail Services",
    city: "Boston, MA",
    positions: [
      { job: "Lead Analyst", date: "Feb 2018 - Jan 2019" },
      { job: "Analyst II", date: "Dec 2017 - Feb 2018" },
      { job: "Analyst I", date: "Oct 2017 - Dec 2017" },
    ],
  },
]

const Experience: React.FC = () => {
  return (
    <ExperienceWrapper>
      <h3>
        <span role="img" aria-label="man-technologist">
          👨‍💻
        </span>
        Work experience
      </h3>
      <JobsContainer>
        {jobs.map(({ company, positions, city }) => (
          <WorkWrapper key={company}>
            <CompanyWrapper>
              <Company>{company}</Company>
              <City>{city}</City>
            </CompanyWrapper>
            <JobWrapper>
              {positions.map(({ job, date }) => (
                <div key={job}>
                  <span>
                    <strong>{job}</strong>
                  </span>{" "}
                  | <span>{date}</span>
                </div>
              ))}
            </JobWrapper>
          </WorkWrapper>
        ))}
      </JobsContainer>
    </ExperienceWrapper>
  )
}

export default Experience
