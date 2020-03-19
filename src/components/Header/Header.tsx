import Link from "next/link"
import styled from "styled-components"

const Header: React.FC = () => (
  <NavbarWrapper>
    <div>
      <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/rembrandtreyes">
        logo
      </a>
    </div>
    <div>
      <Link href="#">
        <StyledLink>About</StyledLink>
      </Link>
      <Link href="#experience">
        <StyledLink>Experience</StyledLink>
      </Link>
      <Link href="#about">
        <StyledLink>Work</StyledLink>
      </Link>
      <Link href="/about">
        <StyledLink>Contact</StyledLink>
      </Link>
      <Link href="/about">
        <StyledLink>Resume</StyledLink>
      </Link>
    </div>
  </NavbarWrapper>
)

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledLink = styled.a`
  margin: 0 8px;
  padding: 16px 8px;
`

export default Header
