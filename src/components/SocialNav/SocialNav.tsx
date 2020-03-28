import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faUserAstronaut, faTimes } from "@fortawesome/free-solid-svg-icons"

import urls from "config/urls"

import { SocialNavWrapper, SocialLinks, SocialMenu } from "./SocialNavStyles"

const socials = [
  { name: "GitHub", icon: faGithub, link: urls.github },
  { name: "LinkedIn", icon: faLinkedinIn, link: urls.linkedIn },
  { name: "Twitter", icon: faTwitter, link: urls.twitter },
  { name: "Instagram", icon: faInstagram, link: urls.instagram },
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
        <FontAwesomeIcon icon={isOpen ? faTimes : faUserAstronaut} />
        <span />
        <span />
        <span />
      </SocialMenu>
    </>
  )
}

export default SocialNav
