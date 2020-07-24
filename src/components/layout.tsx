import React, { Component } from "react"

import { initGA, logPageView } from "utils/analytics"

declare global {
  interface Window {
    GA_INITIALIZED: any
  }
}

export default class Layout extends Component {
  componentDidMount(): void {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render(): JSX.Element {
    const { children } = this.props
    return <div>{children}</div>
  }
}
