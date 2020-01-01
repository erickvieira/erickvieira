import React from "react"
import { Link } from "gatsby"
import { anim } from "../../services/animations/animation.service"
import { Power2 } from "gsap"
import "./navbar.scss"

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    anim.to("#nav-logo > #path1", 0.5, {
      strokeDashoffset: 0,
      ease: Power2.easeIn,
    })
  }
  render() {
    return (
      <section className="nav-menu-container">
        <nav className="nav-home">
          <Link className="not-evident" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="nav-logo"
              viewBox="0 0 99.144351 134.36723"
              version="1.1"
              width="42px"
            >
              <path
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                strokeWidth="3"
                strokeDasharray="458.72"
                strokeDashoffset="458.72"
                id="path1"
                d="m 58.674149,26.271876 c -0.182002,4.592002 3.247,9.635001 7.309999,15.212001 -3.135999,-3.691 -11.225998,-5.072 -11.288001,1.110001 -2.075999,-12.900001 -32.019999,32.33099 -18.755999,42.999997 13.216001,10.63299 29.223001,-9.48301 54.741,-59.492999 C 95.245149,17.157877 100.59415,3.3838768 96.161149,1.3228768 61.271148,64.297877 27.324147,113.02987 12.810148,129.30987 c -3.6069997,4.04599 -6.9700001,5.385 -9.1050001,1.09999 -5.495,-11.032 -2.85200003,-47.627995 24.7040001,-84.452983"
              />
            </svg>
          </Link>
        </nav>
      </section>
    )
  }
}

export default NavBar
