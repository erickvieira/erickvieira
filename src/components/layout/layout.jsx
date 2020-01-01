/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header"
import Navbar from "components/navbar"
import "global.scss"
import "./layout.scss"
import { StorageContext } from "contexts/storage/storage.context"

function Layout({ children }) {
  const aws = useContext(StorageContext)
  const [navStatus, setNavStatus] = useState()
  const [navCount, setNavCount] = useState()
  
  useEffect(() => {
    (async () => {
      await aws.set('navigating', false);
      const navigating = await aws.find('navigating')
      const navCount = await aws.find('navCount')
      setTimeout(async () => {
        setNavStatus(navigating || false)
        console.log(await aws.find('navigating'))
      }, 2000);
      setNavCount(navCount)
    })()
  }, [])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          float: "right",
          width: `calc(100vw - var(--nav-size) - 60px)`,
          height: `calc(100vh - 68px - 86px)`,
          paddingTop: 0,
        }}
      >
        <main>
          {children}
        </main>
        <footer>
          <pre>
            <code className="html">
              {`  </body>\n</html>`}
            </code>
            <code className="html comment">
              {`\n<!-- confira mais no meu `}
              <a href="https://github.com/erickvieira">GitHub</a> | &copy; {(new Date()).getFullYear()}
              {` -->`}
            </code>
          </pre>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
