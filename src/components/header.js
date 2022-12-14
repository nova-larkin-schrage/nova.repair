import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const links = [
  {
    text: "who?",
    url: "/who",
  },
  {
    text: "published work",
    url: "/published",
  },
  {
    text: "connect",
    url: "/connect",
  },
]

const Header = ({ location }) => {
  var { pathname } = location
  if (pathname.endsWith("/") && pathname.length > 1) {
    pathname = pathname.substring(0, pathname.length - 1)
  }
  return (
    <header>
      {pathname !== "/" && (
        <div className="home">
          <Link to="/">Nova Larkin Schrage</Link>
        </div>
      )}
      <nav>
        {links.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link
              to={link.url}
              className="nav-link"
              ariaCurrent={pathname === location ? "page" : false}
            >
              <div className="nav-link-wrapper">{link.text}</div>
            </Link>
            <span className="nav-dots">
              {i !== links.length - 1 && <> · </>}
            </span>
          </React.Fragment>
        ))}
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.object.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
