import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import Signature from "components/signature"
import { Link } from "gatsby"
import { StorageContext, appStorage } from "contexts/storage/storage.context"

import '../styles/pages.scss'

class IndexPage extends React.Component {

  constructor(props) {
    super(props)
  }

  get age() {
    const age = new Date(Date.now() - (new Date('1998-10-03')).getTime());
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  render() {
    return (
      <StorageContext.Provider value={ appStorage }>
        <Layout>
          <SEO title="Home" />
          <div className="container">
            <div className="col description">
              <pre className="brush: json">
                <code>
{`const softwareEngineer = { 
  "name": "Erick", 
  "age": ${this.age}, 
  "from": "Goiânia, Brazil",
  "devSkills": [
    "JavaScript ES6",
    "Angular 2+",
    "Ionic 3 & 4",
    "StencilJS",
    "React",
    "Gatsby",
    "NodeJS"
  ]
}`}
                </code>
              </pre>
            </div>
            <div className="col figure">
              <Signature />
            </div>
          </div>
        </Layout>
      </StorageContext.Provider>
    )
  }

}

export default IndexPage
