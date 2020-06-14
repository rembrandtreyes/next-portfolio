import styled from "styled-components"

import breakpoints, { maxWidth } from "config/breakpoints"
import colors from "config/colors"

export const HeroWrapper = styled.div`
  margin: 64px auto 0;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 600px;

  @media (min-width: ${breakpoints.MEDIUM}) {
    flex-direction: row;
    max-width: ${maxWidth.container};
  }
`

export const SubheadingParagraph = styled.h1`
  font-size: 1.618em;
  font-weight: 300;
  margin: 16px 0;
`

export const HeadingParagraph = styled.h2`
  font-size: 2.618em;
  font-weight: 700;

  span {
    color: ${colors.brandSecondary};
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;

  img {
    height: 300px;
    width: 300px;
    object-fit: cover;
    border-radius: 50%;
  }
`

export const TextWrapper = styled.div`
  width: 50%;
`
