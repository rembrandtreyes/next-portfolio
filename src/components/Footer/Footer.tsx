import urls from "config/urls"

import { FooterWrapper } from "./FooterStyles"

const Footer: React.FC = () => {
  const date = new Date()
  const thisYear = date.getFullYear()
  return (
    <FooterWrapper>
      <p>
        &copy; {thisYear} Created by <a href={urls.portfolioRepo}>Rembrandt Reyes</a>
      </p>
      <p>
        <a href="https://ko-fi.com/S6S41KEHF" target="_blank" rel="noopener noreferrer">
          <img
            height="36"
            style={{ border: "0px", height: "36px" }}
            src="https://cdn.ko-fi.com/cdn/kofi2.png?v=2"
            alt="Buy Me a Coffee at ko-fi.com"
          />
        </a>
      </p>
    </FooterWrapper>
  )
}

export default Footer
