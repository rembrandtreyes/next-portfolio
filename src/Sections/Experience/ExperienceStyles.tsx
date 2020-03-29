import styled from "styled-components"

export const ExperienceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  transition: 250ms ease-in;

  h2 {
    display: flex;
    font-size: 2.25em;

    span {
      margin-right: 16px;
    }
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 1.5em;
    }
  }

  @media screen and (max-width: 320px) {
    height: fit-content;
    padding-top: 100px;
  }
`

export const CompanyWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media screen and (max-width: 768px) {
    width: fit-content;
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding: 0 16px;
  }

  @media screen and (max-width: 320px) {
    padding: 0;
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
