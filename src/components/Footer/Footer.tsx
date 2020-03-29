import styled from "styled-components"
import urls from "config/urls"

const Footer = () => {
  const date = new Date()
  const thisYear = date.getFullYear()
  return (
    <FooterWrapper>
      <p>
        &copy; {thisYear} Created by <a href={urls.portfolioRepo}>Rembrandt Reyes</a>
      </p>
    </FooterWrapper>
  )
}

export const FooterWrapper = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Footer
