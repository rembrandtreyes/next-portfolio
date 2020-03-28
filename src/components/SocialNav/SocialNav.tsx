import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faUser, faTimes } from "@fortawesome/free-solid-svg-icons"

import { SocialNavWrapper, SocialLinks, SocialMenu } from "./SocialNavStyles"

const socials = [
  { name: "GitHub", icon: faGithub, link: "https://github.com/rembrandtreyes" },
  { name: "LinkedIn", icon: faLinkedinIn, link: "https://www.linkedin.com/in/rembrandtreyes/" },
  { name: "Twitter", icon: faTwitter, link: "https://twitter.com/rembrandtreyes" },
  { name: "Instagram", icon: faInstagram, link: "https://www.instagram.com/rembrandtreyes/" },
]

const SocialNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(prevIsOpen => !prevIsOpen)
  return (
    <>
      <SocialNavWrapper open={isOpen}>
        {socials.map(social => {
          return (
            <SocialLinks target="_blank" open={isOpen} key={social.name} href={social.link}>
              <FontAwesomeIcon icon={social.icon} />
            </SocialLinks>
          )
        })}
      </SocialNavWrapper>
      <SocialMenu onClick={toggle}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faUser} />
        <span />
        <span />
        <span />
      </SocialMenu>
    </>
  )
}

export default SocialNav
