import { HeroWrapper, TextWrapper, HeadingParagraph, StyledHeadingOne, StyledHeadingTwo } from "./HeroStyles"

const Hero: React.FC = () => (
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

export default Hero
