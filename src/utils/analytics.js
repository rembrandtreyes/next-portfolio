/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import ReactGA from "react-ga"

export const initGA = () => {
  ReactGA.initialize(process.env.GOOGLE_ANALYTICS)
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
