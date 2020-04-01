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
        <span role="img" aria-label="love-you-gesture">
          🤟
        </span>{" "}
        <a target="_blank" rel="noopener noreferrer" href={urls.kofi}>
          ko-fi
        </a>{" "}
        <span role="img" aria-label="writing-hand">
          ✍
        </span>{" "}
        <a target="_blank" rel="noopener noreferrer" href={urls.patreon}>
          Patreon
        </a>
      </p>
    </FooterWrapper>
  )
}

export default Footer
