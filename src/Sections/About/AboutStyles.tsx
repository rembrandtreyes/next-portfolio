import styled from "styled-components"
import breakpoints from "config/breakpoints"
import colors from "config/colors"

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  flex-direction: column-reverse;
  padding: 24px 0px;
`

export const ContentWrapper = styled.div`
  margin: 0 16px;

  h3 {
    font-size: 1.5em;
    margin-bottom: 16px;

    span {
      margin-right: 16px;
    }
  }

  p {
    line-height: 1.5;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 250px));
    padding: 0;
    margin: 8px 0px 0px;
    list-style: none;
    overflow: hidden;
  }

  li {
    margin: 4px 0;
    &:before {
      content: "";
      margin-right: 8px;
    }
  }

  @media (min-width: ${breakpoints.MEDIUM}) {
    width: 475px;

    h3 {
      font-size: 2.618em;
    }

    ul {
      grid-template-columns: repeat(2, minmax(200px, 250px));
    }
  }
`

export const ImageWrapper = styled.div`
  img {
    border-radius: 50%;
    border: 8px solid ${colors.brandPrimary};
    box-shadow: -9px -9px 16px ${colors.light}, 9px 9px 16px ${colors.brandSecondary};
    height: 200px;
    width: 200px;
    object-fit: cover;
    margin: 48px;
  }
`
