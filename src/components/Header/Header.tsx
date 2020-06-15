import Link from "next/link"

import paths from "config/urls"

import { Navbar, Container, LogoWrapper, LinkWrapper, StyledLink } from "./HeaderStyles"

const Header: React.FC = () => {
  return (
    <Navbar>
      <Container>
        <LogoWrapper>
          <a target="_blank" rel="noopener noreferrer" href={paths.github}>
            <img
              src="https://res.cloudinary.com/rreyes/image/upload/v1591394292/logo2_nu0do9.png"
              alt="Rembrandt's Logo"
            />
          </a>
          <h4>Rembrandt</h4>
        </LogoWrapper>
        <LinkWrapper>
          <Link href="#contact">
            <StyledLink>Contact</StyledLink>
          </Link>
        </LinkWrapper>
      </Container>
    </Navbar>
  )
}

export default Header
