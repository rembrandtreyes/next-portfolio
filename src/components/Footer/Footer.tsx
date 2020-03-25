import styled from "styled-components"

const Footer = () => {
  const date = new Date()
  const thisYear = date.getFullYear()
  return (
    <FooterWrapper>
      <p>&copy; {thisYear} Created by Rembrandt</p>
    </FooterWrapper>
  )
}

export const FooterWrapper = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Footer
