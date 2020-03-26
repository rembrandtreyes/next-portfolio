import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css" // Import the CSS

import Footer from "components/Footer"
import Header from "components/Header"
import SocialNav from "components/SocialNav"

import "./styles.css"

config.autoAddCss = false
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <SocialNav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
