import styled from "styled-components"
import colors from "config/colors"
import breakpoints from "config/breakpoints"

export const SocialNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
  margin: 0 auto;

  svg {
    width: 24px !important;
    height: 24px !important;
  }

  @media (min-width: ${breakpoints.MEDIUM}) {
    margin: 0;
  }
`

export const SocialLinks = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  color: ${colors.dark};
  font-size: 1.5em;
  border-radius: 50%;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 500ms;

  &:hover {
    transform: translatey(-4px);
  }
`
