import React from 'react'
import PropTypes from 'prop-types'

const CodeSyntax = ({ children, lang }) => (
  <>
    <span className={ `code-syntax ${lang}` }>
      { children }
    </span>
  </>
)

CodeSyntax.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string
}

export default CodeSyntax

export const Code = ({ children, c }) => (
  <>
    <span className={ `code ${c}` }>
      { children }
    </span>
  </>
)

Code.propTypes = {
  children: PropTypes.node.isRequired,
  c: PropTypes.string.isRequired
}