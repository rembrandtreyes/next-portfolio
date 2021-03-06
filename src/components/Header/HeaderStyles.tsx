import styled from "styled-components"
import colors from "config/colors"
import breakpoints, { maxWidth } from "config/breakpoints"

export const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${colors.medium};
  height: 80px;
  padding: 0 24px;
  background-color: ${colors.white};
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${maxWidth.container};
  width: 100%;

  @media (min-width: ${breakpoints.MEDIUM}) {
    justify-content: space-between;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    margin-left: 8px;
  }

  img {
    width: 25px;
  }
`

export const LinkWrapper = styled.div`
  display: none;

  @media (min-width: ${breakpoints.MEDIUM}) {
    display: flex;
  }
`

export const StyledLink = styled.a`
  font-family: "Lato", sans-serif;
  padding: 16px 48px;
  font-size: 18px;
  font-weight: 600;
  background-color: ${colors.brandSecondary};
  color: ${colors.white};
`
