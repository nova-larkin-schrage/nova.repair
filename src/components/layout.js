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
      <div className="main">
        <Header location={location} />
        {children}
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
