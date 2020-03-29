import styled from "styled-components"

export const SocialNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 32px;
  left: 32px;

  @media screen and (max-width: 600px) {
    bottom: 20px;
    left: 20px;
    transition: all cubic-bezier(0.4, 0, 0.2, 1) 500ms;
    background-color: ${({ open }) => open && "rgba(255, 255, 255, 0.97)"};
    transform: ${({ open }) => open && "translate(-45px, 45px)"};
    border-radius: ${({ open }) => open && "50%"};
    width: ${({ open }) => (open ? "150px" : "50px")};
    height: ${({ open }) => (open ? "150px" : "50px")};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    width: 24px !important;
  }
`

export const SocialLinks = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 38px;
  color: #222222;
  font-size: 1.5em;
  margin: 8px 8px;
  border-radius: 50%;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 500ms;

  &:hover {
    box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 2px 2px 5px rgba(0, 0, 0, 0.5),
      -4px -4px 10px rgba(255, 255, 255, 1), 4px 4px 10px rgba(0, 0, 0, 0.25);
  }

  @media screen and (max-width: 600px) {
    position: absolute;
    opacity: ${({ open }) => (open ? "1" : "0")};
    margin: 0;
    z-index: -10;

    &:nth-child(1) {
      transform: ${({ open }) => open && "translate(-20px, -50px)"};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open && "translate(23px, -47px)"};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open && "translate(50px, -18px)"};
    }
    &:nth-child(4) {
      transform: ${({ open }) => open && "translate(50px, 20px)"};
    }
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
