import "./styles.css"
import Footer from "components/Footer"
import Header from "components/Header"
import SocialNav from "components/SocialNav"
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
