import { AppProps } from "next/app"
import Footer from "components/Footer"
import Header from "components/Header"

import "./styles.css"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
