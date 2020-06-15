import styled from "styled-components"
import breakpoints, { maxWidth } from "config/breakpoints"

export const ExperienceWrapper = styled.div`
  max-width: ${maxWidth.container};
  min-height: 600px;
  margin: 0 auto;
  padding: 0 16px;

  h3 {
    display: flex;
    margin-bottom: 24px;
    flex-direction: row;

    @media (max-width: ${breakpoints.SMALL}) {
      flex-direction: row-reverse;
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
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;

  @media (min-width: ${breakpoints.MEDIUM}) {
    justify-content: flex-start;
    align-items: center;
  }

  h4:nth-child(2) {
    margin-left: 16px;
    font-weight: 300;
  }
`

export const Company = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;

  @media screen and (max-width: 768px) {
    display: block;
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

export const WorkContent = styled.div`
  display: flex;
  min-height: 600px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 425px) {
    align-items: center;
  }
`

export const JobDuties = styled.div`
  width: 500px;
  margin-left: 16px;

  h4 {
    margin-top: 16px;
  }

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

  @media screen and (max-width: 600px) {
    width: fit-content;
    padding: 0 16px;
    margin-left: 0;
  }
`

export const StyledButton = styled.button<{ active: boolean }>`
  background: transparent;
  padding: 16px 0;
  width: 150px;
  border-style: hidden;
  font-size: 16px;
  opacity: ${({ active }) => (active ? "1" : "0.5")};
  transition: all 250ms ease-in;
  &:focus {
    outline: none;
  }

  &:active {
    border-style: hidden;
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
