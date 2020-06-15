import styled from "styled-components"
import colors from "config/colors"
import breakpoints, { maxWidth } from "config/breakpoints"

export const SkillsWrapper = styled.div`
  max-height: 700px;
  margin: 100px 0;
  background-color: ${colors.light}70;
  padding: 40px 16px;

  h4 {
    text-align: center;

    @media (min-width: ${breakpoints.MEDIUM}) {
      text-align: left;
      max-width: ${maxWidth.container};
      margin: 0 auto;
      font-size: 2.618em;
    }
  }
`

export const SkillContainer = styled.div`
  margin: 0 auto;
  position: relative;

  @media (min-width: ${breakpoints.MEDIUM}) {
    max-width: ${maxWidth.container};
  }
`

export const SkillCards = styled.div`
  height: 400px;
  padding: 24px;
  margin: 0 16px 0 0;
  border-radius: 4px;
  background-color: ${colors.white};
  box-shadow: 0px 3px 6px ${colors.medium};
  min-width: calc(100vw - 85px);

  @media (min-width: ${breakpoints.SMALL}) {
    min-width: 300px;
  }

  h5 {
    font-family: "Lato", sans-serif;
    font-size: 1.618em;
    margin-bottom: 16px;
  }

  p {
    line-height: 1.6;
  }
`

export const SkillOverflowContainer = styled.div`
  display: flex;
  position: relative;
  overflow-x: scroll;
  padding: 24px 0;
  padding-left: 8px;
  margin-left: -8px;
`

export const SkillArrow = styled.div`
  text-align: right;
  position: relative;

  svg {
    position: relative;
    animation-timing-function: linear;
    animation: 1000ms infinite alternate move;
    color: ${colors.brandSecondary};
    height: 24px !important;
    width: 24px !important;
  }

  @keyframes move {
    0% {
      left: 0;
    }
    100% {
      left: -8px;
    }
  }
`
