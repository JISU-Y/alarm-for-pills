import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Content = ({ text, underline }) => {
  return <TextContent underline={underline}>{text}</TextContent>
}

const TextContent = styled.p`
  width: 100%;
  padding: 0.5rem 1rem;
  border-bottom: ${(props) => (props.underline ? '1px solid black' : 'none')};
`

Content.propTypes = {
  text: PropTypes.string.isRequired,
  underline: PropTypes.bool.isRequired,
}

export default Content
