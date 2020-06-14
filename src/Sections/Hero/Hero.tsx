import SocialNav from "components/SocialNav"
import { HeroWrapper, HeadingParagraph, SubheadingParagraph, ImageWrapper, TextWrapper } from "./HeroStyles"

const Hero: React.FC = () => (
  <HeroWrapper>
    <TextWrapper>
      <HeadingParagraph>
        Front-end engineer developing websites with beautiful <span>UX/UI</span>
      </HeadingParagraph>
      <SubheadingParagraph>You can find me in San Francisco, CA</SubheadingParagraph>
      <SocialNav />
    </TextWrapper>
    <ImageWrapper>
      <img
        src="https://res.cloudinary.com/rreyes/image/upload/v1586232024/download_bueqvj.png"
        alt="A profile of Rembrandt"
      />
    </ImageWrapper>
  </HeroWrapper>
)

export default Hero
