import styled from "styled-components"

const Hero = () => (
  <HeroWrapper>
    <TextWrapper>
      <HeadingParagraph>Hello, my name is</HeadingParagraph>
      <StyledHeadingOne>Rembrandt Reyes</StyledHeadingOne>
      <StyledHeadingTwo>
        <em>Building digital masterpieces</em>
      </StyledHeadingTwo>
    </TextWrapper>
  </HeroWrapper>
)

export const HeroWrapper = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledHeadingOne = styled.h1`
  font-size: 5.063em;
  margin: 0;
`

export const StyledHeadingTwo = styled.h2`
  font-size: 2.25em;
  margin: 0;
  font-family: "Roboto Slab", san-serif;
  font-weight: 300;
`

export const HeadingParagraph = styled.p`
  font-size: 1.5em;
  margin: 0;
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
`

export default Hero
