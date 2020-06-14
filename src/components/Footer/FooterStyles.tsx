import styled from "styled-components"
import breakpoints, { maxWidth } from "config/breakpoints"

export const FooterWrapper = styled.div`
  margin: 0 16px;
  padding-bottom: 16px;
  @media (min-width: ${breakpoints.MEDIUM}) {
    height: 75px;
    padding: 0;
  }
`

export const FooterContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  div:first-child {
    padding-bottom: 16px;
  }

  @media (min-width: ${breakpoints.MEDIUM}) {
    flex-direction: row;
    justify-content: space-between;
    max-width: ${maxWidth.container};
    align-items: flex-end;
  }
`
