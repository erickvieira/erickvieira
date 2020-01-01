import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import { StorageContext, appStorage } from "contexts/storage/storage.context"

const NotFoundPage = () => (
  <StorageContext.Provider value={ appStorage }>
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </StorageContext.Provider>
)

export default NotFoundPage
