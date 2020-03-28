import styled from "styled-components"

export const HeroWrapper = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledHeadingOne = styled.h1`
  font-size: 5.063em;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 3.375em;
  }

  @media screen and (max-width: 425px) {
    font-size: 2.25em;
  }
`

export const StyledHeadingTwo = styled.h2`
  font-size: 2.25em;
  margin: 0;
  font-family: "Roboto Slab", serif;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 1.5em;
  }

  @media screen and (max-width: 425px) {
    font-size: 1em;
  }
`

export const HeadingParagraph = styled.p`
  font-size: 1.5em;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 1.5em;
  }

  @media screen and (max-width: 425px) {
    font-size: 1em;
  }
`

export const SubHeadingParagraph = styled.p`
  line-height: 1.5;
  width: 410px;
  margin-bottom: 48px;
`

export const StyledLink = styled.a`
  padding: 16px 24px;
  text-decoration: none;
  color: #222222;
  border: 2px solid #222222;
  border-radius: 4px;
`

export const TextWrapper = styled.div`
  max-width: 700px;

  @media screen and (max-width: 600px) {
    padding: 0 24px;
  }
`
