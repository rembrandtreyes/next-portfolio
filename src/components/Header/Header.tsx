import { useState } from "react"

import Link from "next/link"
import paths from "config/urls"

import { Navbar, Container, LogoWrapper, LinkWrapper, StyledLink, NavBurgerMenu, OffCanvasMenu } from "./HeaderStyles"

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  // We use prevState to prevent race conditions
  const toggle = () => setIsOpen(prevIsOpen => !prevIsOpen)
  return (
    <Navbar>
      <Container>
        <LogoWrapper>
          <a target="_blank" rel="noopener noreferrer" href={paths.github}>
            <img
              src="https://res.cloudinary.com/rreyes/image/upload/v1581378529/Logo_eig6t8.png"
              alt="Rembrandt's Logo"
            />
          </a>
        </LogoWrapper>
        <LinkWrapper>
          <Link href="#about">
            <StyledLink>About</StyledLink>
          </Link>
          <Link href="#experience">
            <StyledLink>Experience</StyledLink>
          </Link>
          <Link href="#contact">
            <StyledLink>Contact</StyledLink>
          </Link>
        </LinkWrapper>
        {/* Mobile Menu */}
        <NavBurgerMenu open={isOpen} onClick={toggle}>
          <span />
          <span />
          <span />
        </NavBurgerMenu>
        <OffCanvasMenu open={isOpen}>
          <Link href="#about">
            <StyledLink onClick={toggle}>About</StyledLink>
          </Link>
          <Link href="#experience">
            <StyledLink onClick={toggle}>Experience</StyledLink>
          </Link>
          <Link href="#contact">
            <StyledLink onClick={toggle}>Contact</StyledLink>
          </Link>
        </OffCanvasMenu>
      </Container>
    </Navbar>
  )
}

export default Header
