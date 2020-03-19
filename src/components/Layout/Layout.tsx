import styled from "styled-components"

import Header from "../Header"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: lightgray;
  margin: 0px;
  padding: 20px;
  border: 1px solid #ddd;
`

export default Layout
