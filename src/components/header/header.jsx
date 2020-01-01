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
    // getInVer(this.headerRef)
	}

  render() {
    return (
      <header>
        <pre className="header-pre">
          <code className="html">
            {`<html>\n  <body>`}
          </code>
        </pre>
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
