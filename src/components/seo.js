/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import ogImage from '../images/profile.jpg'

function SEO({ description, lang, meta, title, keywords, isArticle }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            twitterAccount
            siteUrl
            keywords
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaKeywords = `${site.siteMetadata.keywords}, ${keywords || 'erick'}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        { name: `author`, content: site.siteMetadata.author, },
        { name: `description`, content: metaDescription, },
        { name: `keywords`, content: metaKeywords, },
        { name: `twitter:card`, content: `summary`, },
        { name: `twitter:creator`, content: site.siteMetadata.twitterAccount, },
        { name: `twitter:title`, content: title, },
        { name: `twitter:description`, content: metaDescription, },
        { property: `og:title`, content: title, },
        { property: `og:description`, content: metaDescription, },
        { property: `og:type`, content: isArticle ? `article` : `website`, },
        { property: `og:url`, content: site.siteMetadata.siteUrl, },
        { property: `og:image`, content: `${site.siteMetadata.siteUrl}${ogImage}`, },
        { property: `og:image:alt`, content: metaDescription, },
        { property: `og:image:type`, content: 'image/jpg', },
        { property: `og:image:width`, content: '400', },
        { property: `og:image:height`, content: '400', },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `pt-BR`,
  meta: [],
  description: ``,
  keywords: '',
  isArticle: false
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  isArticle: PropTypes.bool
}

export default SEO
