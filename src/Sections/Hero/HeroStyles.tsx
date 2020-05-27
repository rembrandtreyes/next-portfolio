import styled from "styled-components"

import breakpoints from "config/breakpoints"

export const HeroWrapper = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledHeadingOne = styled.h1`
  font-size: 2.25em;
  margin-bottom: 8px;

  @media (min-width: ${breakpoints.MEDIUM}) {
    font-size: 3.375em;
  }

  @media (min-width: ${breakpoints.LARGE}) {
    font-size: 5.063em;
  }
`

export const StyledHeadingTwo = styled.h2`
  margin: 0;
  font-weight: 300;
  font-size: 1em;

  @media (min-width: ${breakpoints.MEDIUM}) {
    font-size: 1.5em;
  }

  @media (min-width: ${breakpoints.LARGE}) {
    font-size: 2.25em;
  }
`

export const HeadingParagraph = styled.p`
  margin-bottom: 16px;
  font-size: 1em;

  @media screen and (min-width: ${breakpoints.MEDIUM}) {
    font-size: 1.5em;
  }
`
