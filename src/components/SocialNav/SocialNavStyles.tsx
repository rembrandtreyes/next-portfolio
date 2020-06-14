import styled from "styled-components"
import colors from "config/colors"

export const SocialNavWrapper = styled.div<{ open: boolean }>`
  display: flex;
  max-width: 250px;
  justify-content: space-between;
  svg {
    width: 24px !important;
  }
`

export const SocialLinks = styled.a<{ open: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 38px;
  color: ${colors.dark};
  font-size: 1.5em;
  border-radius: 50%;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 500ms;

  &:hover {
    transform: translatey(-4px);
    color: #3a3a3a;
  }
`

export const SocialMenu = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 2px 6px rgba(10, 10, 10, 0.24);
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 24px !important;
  }

  @media screen and (min-width: 601px) {
    display: none;
  }
`
