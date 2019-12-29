import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { getInVer } from 'services/animations/prebuilt-individual-animations.service'

class Header extends React.Component {

  headerRef = React.createRef()

  constructor(props) {
    super(props)
  }

	componentDidMount() {
    getInVer(this.headerRef)
	}

  render() {
    return (
      <header
        ref={ element => { this.headerRef = element } }
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 className="title" style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {this.props.siteTitle}
            </Link>
          </h1>
        </div>
      </header>
    )
  }

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
