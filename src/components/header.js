import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef, useEffect } from "react"
import { TweenMax } from "gsap"


const Header = ({ siteTitle }) => {
  let headerRef = useRef(null)

  useEffect(() => {
    TweenMax.to(headerRef, 2, {
      opacity: 1
    })
  }, [])

  return (
    <header
      ref={ element => { headerRef = element } }
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
        opacity: 0
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
