import styled from "styled-components"

import breakpoints, { maxWidth } from "config/breakpoints"
import colors from "config/colors"

export const HeroWrapper = styled.div`
  margin: 32px auto 0;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints.MEDIUM}) {
    min-height: 600px;
    justify-content: center;
    margin: 64px auto 0;
    padding: 0 24px;
    flex-direction: row;
    max-width: ${maxWidth.container};
  }
`

export const HeadingParagraph = styled.h1`
  font-size: 1.618em;
  @media (min-width: ${breakpoints.MEDIUM}) {
    font-size: 2.618em;
  }
  font-weight: 700;

  span {
    color: ${colors.brandSecondary};
  }
`

export const SubheadingParagraph = styled.h2`
  font-size: 1em;
  @media (min-width: ${breakpoints.MEDIUM}) {
    font-size: 1.618em;
  }
  font-weight: 300;
  margin: 16px 0;
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;

  @media (min-width: ${breakpoints.MEDIUM}) {
    margin-top: 0;
    width: 50%;
  }

  img {
    width: 200px;
    height: 200px;
    @media (min-width: ${breakpoints.MEDIUM}) {
      height: 300px;
      width: 300px;
    }
    object-fit: cover;
    border-radius: 50%;
  }
`

export const TextWrapper = styled.div`
  text-align: center;
  @media (min-width: ${breakpoints.MEDIUM}) {
    width: 50%;
    text-align: left;
  }
`
