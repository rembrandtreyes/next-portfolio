import styled from "styled-components"
import colors from "config/colors"
import breakpoints, { maxWidth } from "config/breakpoints"

export const ProjectFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`

export const ImageContainer = styled.div<{ bgUrl: string }>`
  background-image: ${({ bgUrl }) => `url(${bgUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 4px 4px 0 0;
  height: 300px;

  @media (min-width: ${breakpoints.SMALL}) {
    height: 400px;
  }
`

export const WorkWrapper = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: ${maxWidth.container};

  h3 {
    margin: 24px 16px;
    text-align: center;
    font-size: 1.618em;

    @media (min-width: ${breakpoints.MEDIUM}) {
      margin: 24px 48px;
      font-size: 2.618em;
    }
  }
`

export const TextContainer = styled.div`
  padding: 24px;
  color: ${colors.dark};

  hr {
    margin: 8px 0 24px;
    width: 25%;
    border: 4px solid ${colors.brandSecondary};
  }

  p {
    margin-bottom: 8px;
  }
`

export const SkillPills = styled.span`
  display: inline-block;
  background-color: ${colors.brandSecondary};
  color: ${colors.white};
  font-family: "Lato", sans-serif;
  border-radius: 24px;
  padding: 8px 16px;
  margin: 8px 8px 0px 0;
  font-weight: 600;

  &:first-child {
    margin-left: 0;
  }
`

export const ProjectWrapper = styled.a`
  width: 400px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 2px 3px ${colors.medium};
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.25s ease;
  border-radius: 4px;
  margin: 16px;

  &:hover {
    box-shadow: 0px 6px 12px ${colors.medium};
    cursor: pointer;
  }

  @media (min-width: ${breakpoints.MEDIUM}) {
    margin: 24px;
  }
`
