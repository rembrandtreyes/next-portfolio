import urls from "config/urls"
import SocialNav from "components/SocialNav"

import { FooterWrapper, FooterContainer } from "./FooterStyles"

const Footer: React.FC = () => {
  const date = new Date()
  const thisYear = date.getFullYear()

  return (
    <FooterWrapper>
      <FooterContainer>
        <div>
          &copy; {thisYear} Created by <a href={urls.portfolioRepo}>Rembrandt Reyes</a>
        </div>
        <div>
          <p>Follow me on my socials:</p>
          <SocialNav />
        </div>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
