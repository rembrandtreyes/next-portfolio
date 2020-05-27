import { HeroWrapper, HeadingParagraph, StyledHeadingOne, StyledHeadingTwo } from "./HeroStyles"

const Hero: React.FC = () => (
  <HeroWrapper>
    <div>
      <HeadingParagraph>Hello, my name is</HeadingParagraph>
      <StyledHeadingOne>Rembrandt</StyledHeadingOne>
      <StyledHeadingTwo>
        <em>Building digital masterpieces</em>
      </StyledHeadingTwo>
    </div>
  </HeroWrapper>
)

export default Hero
