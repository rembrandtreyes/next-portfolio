/* eslint-disable import/prefer-default-export */
import styled from "styled-components"
import { maxWidth } from "config/breakpoints"

export const FooterWrapper = styled.div`
  height: 100px;
`

export const FooterContainer = styled.div`
  max-width: ${maxWidth.container};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
