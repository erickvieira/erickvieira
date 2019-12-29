import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import { Link } from "gatsby"

class IndexPage extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h4 class="title">Erick Vieira</h4>
        <p class="subtitle">
          {`Sou um Engenheiro de Software apaixonado pela web e focado em me tornar 
        uma referência em tecnoligias baseadas em JavaScript.`}
        </p>
        <p class="title">
          Desenvolvedor Web e Mobile desde 2017.
        </p>
        <p>
          Confira alguns dos meus <Link to="/projects">projetos</Link>
        </p>
      </Layout>
    )
  }

}

export default IndexPage
