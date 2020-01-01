import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import Signature from "components/signature"
import { Link } from "gatsby"
import { StorageContext, appStorage } from "contexts/storage/storage.context"

class IndexPage extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StorageContext.Provider value={ appStorage }>
        <Layout>
          <SEO title="Home" />
          <div className="container">
            <div className="col left">
              <h4 className="title">Erick Vieira</h4>
              <p className="subtitle">
              {`Sou um Engenheiro de Software apaixonado pela web e focado em me tornar 
              uma referência em tecnoligias baseadas em JavaScript.`}
              </p>
              <p className="title">
              Desenvolvedor Web e Mobile desde 2017.
              </p>
              <p>
              Confira alguns dos meus 
              <Link to="/projects" onClick={async () => {
                let count = await appStorage.find('navCount') || 0
                appStorage.set('navigating', true)
                appStorage.set('navCount', count++)
              }}>
              projetos
              </Link>
              </p>
            </div>
            <div className="col right">
              <Signature />
            </div>
          </div>
        </Layout>
      </StorageContext.Provider>
    )
  }

}

export default IndexPage
