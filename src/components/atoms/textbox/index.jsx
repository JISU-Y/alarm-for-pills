import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Textbox = ({ size, text }) => {
  return <StyledText size={size}>{text}</StyledText>
}

const StyledText = styled.p`
  font-size: ${(props) => {
    if (props.size === 'big') return '20px'
    if (props.size === 'mid') return '16px'
    if (props.size === 'small') return '12px'
  }};
  color: ${(props) => props.color};
`

Textbox.propTypes = {
  size: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Textbox
