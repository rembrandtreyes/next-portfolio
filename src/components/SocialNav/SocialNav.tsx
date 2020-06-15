import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

import urls from "config/urls"

import { SocialNavWrapper, SocialLinks } from "./SocialNavStyles"

const socials = [
  { name: "GitHub", icon: faGithub, link: urls.github },
  { name: "LinkedIn", icon: faLinkedinIn, link: urls.linkedIn },
  { name: "Twitter", icon: faTwitter, link: urls.twitter },
  { name: "Instagram", icon: faInstagram, link: urls.instagram },
]

const SocialNav: React.FC = () => (
  <SocialNavWrapper>
    {socials.map(({ name, link, icon }) => {
      return (
        <SocialLinks target="_blank" key={name} href={link}>
          <FontAwesomeIcon icon={icon} />
        </SocialLinks>
      )
    })}
  </SocialNavWrapper>
)

export default SocialNav
