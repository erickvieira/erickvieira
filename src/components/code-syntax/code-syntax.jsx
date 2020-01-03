import React from 'react'
import PropTypes from 'prop-types'

const CodeSyntax = ({ children, lang }) => (
  <>
    <span className={ `code-syntax ${ lang || '' }` }>
      { children }
    </span>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string
}

export default CodeSyntax