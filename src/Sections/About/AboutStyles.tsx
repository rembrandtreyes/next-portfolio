import styled from "styled-components"
import breakpoints, { maxWidth } from "config/breakpoints"

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 800px;
  padding: 0 16px;
  margin: 100px auto;

  @media (min-width: ${breakpoints.MEDIUM}) {
    padding: 0 24px;
    max-width: ${maxWidth.container};
  }
`

export const ContentWrapper = styled.div`
  h3 {
    margin-bottom: 16px;
    display: flex;

    @media (max-width: ${breakpoints.SMALL}) {
      flex-direction: row-reverse;
    }

    span {
      @media (max-width: ${breakpoints.SMALL}) {
        margin-left: 16px;
      }
      @media (min-width: ${breakpoints.SMALL}) {
        margin-right: 16px;
      }
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
    width: 505px;
    margin: 0 auto;

    ul {
      grid-template-columns: repeat(2, minmax(200px, 250px));
    }
  }

  @media (min-width: ${breakpoints.XLARGE}) {
    margin: 0;
  }
`
