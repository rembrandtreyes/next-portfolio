import { useState } from "react"
import Link from "next/link"
import styled from "styled-components"

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <Navbar>
      <Container>
        <LogoWrapper>
          <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/rembrandtreyes">
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
          {/* <Link href="#work">
          <StyledLink>Work</StyledLink>
        </Link> */}
          <Link href="#contact">
            <StyledLink>Contact</StyledLink>
          </Link>
          {/* <Link href="/resume">
          <ResumeLink>Resume</ResumeLink>
        </Link> */}
        </LinkWrapper>
        <NavMenu onClick={toggle}>
          <span />
          <span />
          <span />
        </NavMenu>
      </Container>
    </Navbar>
  )
}

export const Navbar = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 0 24px;
  background-color: white;

  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
`

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 32px;
  height: 32px;
  span {
    border: 2px solid #222222;
    margin-bottom: 4px;
    border-radius: 2px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
`

export const LogoWrapper = styled.div`
  img {
    width: 25px;
  }
`

export const LinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  cursor: pointer;
  padding: 16px 24px;

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
  }
`

export const ResumeLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;

  padding: 16px 24px;

  border: 2px solid #222;
  border-radius: 4px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 8px 16px;
  }
`

export default Header
