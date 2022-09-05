import "@fontsource/adamina"

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, location }) => {
  return (
    <>
      <div className="background">
        <div className="nebula"></div>
      </div>
      <a className="skip-nav" href="#main-content">
        Skip Navigation
      </a>
      <div className="page">
        <Header location={location} />
        <main id="main-content" tabIndex="-1">
          {children}
        </main>
        <footer>
          <p>&#169; {new Date().getFullYear()} Nova Larkin Schrage</p>
          <p>statements not approved by NASA</p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout
