import React from "react"
import { Link } from "gatsby"
import "./navbar.scss"
import Logo from "./logo/logo"

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  get pages() {
    return [{
      icon: 'home',
      path: '/'
    }, {
      icon: 'projects',
      path: '/projects'
    }, {
      icon: 'skills',
      path: '/skills'
    }, {
      icon: 'contact',
      path: '/contact'
    }]
  }
  get social() {
    return [{
      icon: 'github',
      path: 'https://github.com/erickvieira'
    }, {
      icon: 'linkedin',
      path: 'https://github.com/erickvieira'
    }, {
      icon: 'twitter',
      path: 'https://github.com/erickvieira'
    }]
  }
  render() {
    return (
      <section className="nav-menu-container">
        <nav className="nav-home">
          <Link className="not-evident" to="/">
            <Logo />
          </Link>
          <hr />
        </nav>
        <section className="nav-pages">
          { this.pages.map(p => (
            <>
              <Link className="not-evident" to={ p.path }>
                <nav className="page" key={`page-${p.icon}`}>
                  { p.icon }
                </nav>
              </Link>
            </>
          )) }
        </section>
        <section className="nav-footer">
          { this.social.map(s => (
            <>
              <Link className="not-evident" to={ s.path }>
                <nav className="social" key={`social-${s.icon}`}>
                  { s.icon }
                </nav>
              </Link>
            </>
          )) }
        </section>
      </section>
    )
  }
}

export default NavBar
