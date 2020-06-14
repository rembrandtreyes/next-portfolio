import styled from "styled-components"
import breakpoints, { maxWidth } from "config/breakpoints"

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 800px;
  padding: 0 24px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.MEDIUM}) {
    max-width: ${maxWidth.container};
  }
`

export const ContentWrapper = styled.div`
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
    width: 63%;

    h3 {
      font-size: 2.618em;
    }

    ul {
      grid-template-columns: repeat(2, minmax(200px, 250px));
    }
  }
`
