import styled from "styled-components"

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

  @media screen and (max-width: 600px) {
    height: 60px;
  }
`

export const NavBurgerMenu = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 32px;
  height: 32px;

  span {
    background: ${({ open }) => (open ? "#222222" : "#222222")};
    height: 3px;
    width: 100%;
    border-radius: 4px;
    transition: all 150ms ease-in;
    &:first-of-type {
      transform: ${({ open }) => open && "translatey(10px) rotate(45deg)"};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    &:last-of-type {
      margin-bottom: 0;
      transform: ${({ open }) => open && "translatey(-11px) rotate(-45deg)"};
    }
  }

  @media screen and (min-width: 601px) {
    display: none;
  }
`

export const OffCanvasMenu = styled.div`
  display: block;
  transition: right 250ms ease-out;
  height: calc(100vh - 100px);
  width: 100vw;
  position: fixed;
  top: 100px;
  right: ${({ open }) => (open ? "0px" : "-100vw")};
  background-color: rgba(255, 255, 255, 0.97);
  z-index: 2;
  padding-top: 60px;

  @media screen and (min-width: 601px) {
    display: none;
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

  @media screen and (max-width: 600px) {
    img {
      width: 15px;
    }
  }
`

export const LinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
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

  @media screen and (max-width: 600px) {
    margin: 16px 24px;

    padding: 8px 0px;
    font-size: 22px;
    justify-content: start;

    &:last-of-type {
      border-bottom: none;
    }
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
