import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"

const socials = [
  { name: "GitHub", icon: faGithub, link: "https://github.com/rembrandtreyes" },
  { name: "LinkedIn", icon: faLinkedinIn, link: "https://www.linkedin.com/in/rembrandtreyes/" },
  { name: "Twitter", icon: faTwitter, link: "https://twitter.com/rembrandtreyes" },
  { name: "Instagram", icon: faInstagram, link: "https://www.instagram.com/rembrandtreyes/" },
]

const SocialNav = () => (
  <SocialNavWrapper>
    {socials.map(social => {
      return (
        <a key={social.name} href={social.link}>
          <FontAwesomeIcon icon={social.icon} />
        </a>
      )
    })}
  </SocialNavWrapper>
)

export const SocialNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 32px;
  left: 32px;

  svg {
    width: 24px !important;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    width: 38px;
    color: #222222;
    font-size: 1.5em;
    margin: 8px 8px;
    border-radius: 50%;
    transition: all cubic-bezier(0.4, 0, 0.2, 1) 500ms;

    &:hover {
      box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 2px 2px 5px rgba(0, 0, 0, 0.5),
        -4px -4px 10px rgba(255, 255, 255, 1), 4px 4px 10px rgba(0, 0, 0, 0.25);
    }
  }
`

export default SocialNav
