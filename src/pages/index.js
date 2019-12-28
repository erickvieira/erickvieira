import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h4>Seja bem-vindo</h4>
    <p>
      {`Sou um Engenheiro de Software apaixonado pela web e focado em me tornar 
      uma referência em tecnoligias baseadas em JavaScript.`}
    </p>
    <p>
      Desenvolvedor Web e Mobile desde 2017.
    </p>
    <p>
      Confira alguns dos meus <Link to="/projects">projetos</Link>
    </p>
  </Layout>
)

export default IndexPage
