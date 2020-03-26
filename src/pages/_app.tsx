import Footer from "components/Footer"
import Header from "components/Header"
import SocialNav from "components/SocialNav"

import "./styles.css"

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
