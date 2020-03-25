import Link from "next/link"
import styled from "styled-components"

const Header: React.FC = () => (
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
        <Link href="/tax 2019.pdf">
          <ResumeLink>Resume</ResumeLink>
        </Link>
      </LinkWrapper>
    </Container>
  </Navbar>
)

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
`

export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  cursor: pointer;
  padding: 16px 24px;
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
`

export default Header
