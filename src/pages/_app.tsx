import { ApolloProvider } from "@apollo/react-hooks"

import withData from "utils/apollo"
import Footer from "components/Footer"
import Header from "components/Header"
import SocialNav from "components/SocialNav"

import "./styles.css"
import Nav from "components/nav"

const App = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
      <Header />
      <Nav />
      <SocialNav />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  )
}

export default withData(App)
