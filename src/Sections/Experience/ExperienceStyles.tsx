import styled from "styled-components"
import breakpoints, { maxWidth } from "config/breakpoints"

export const ExperienceWrapper = styled.div`
  max-width: ${maxWidth.container};
  min-height: 600px;
  margin: 0 auto;
  padding: 0 16px;

  h3 {
    display: flex;
    flex-direction: row;
    font-size: 1.618em;

    @media (min-width: ${breakpoints.MEDIUM}) {
      font-size: 2.618em;
      text-align: left;
    }

    @media (max-width: ${breakpoints.SMALL}) {
      flex-direction: row-reverse;
      justify-content: center;
    }

    span {
      margin: 0 16px 0 0;

      @media (max-width: ${breakpoints.SMALL}) {
        margin: 0 0 0 16px;
      }
    }
  }

  @media (min-width: ${breakpoints.MEDIUM}) {
    padding: 0 24px;
  }
`

export const CompanyWrapper = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  flex-direction: column;

  @media (min-width: ${breakpoints.MEDIUM}) {
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;

    h4:nth-child(2) {
      margin-left: 16px;
    }
  }
`

export const StyledLine = styled.span<{ activeTab: number }>`
  background: black;

  transition: all 150ms ease-in;
  width: 2px;
  height: 50px;
  margin-top: ${({ activeTab }) => `calc(${activeTab} * 50px)`};
  @media screen and (max-width: 768px) {
    margin-top: 0;
    height: 2px;
    width: 50%;
    margin-left: ${({ activeTab }) => `calc(${activeTab} * 50%)`};
  }
`

export const JobsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.MEDIUM}) {
    flex-direction: row;
  }
  justify-content: space-between;
`

export const JobWrapper = styled.div`
  span {
    display: inline-block;
    margin: 2px 0;

    @media (min-width: ${breakpoints.MEDIUM}) {
      font-size: 18px;
    }
  }
`

export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  max-width: 500px;
  border-radius: 4px;
`

export const Company = styled.h4`
  font-weight: 700;
`

export const City = styled.h4`
  font-weight: 300;
  font-size: 1.318em;
`
