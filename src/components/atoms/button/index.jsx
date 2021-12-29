import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Button = ({ label }) => {
  return <StyledButton>{label}</StyledButton>
}

const StyledButton = styled.button`
  font-size: 16px;
  padding: 0.5rem 1rem;
  background-color: aqua;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
`

Button.propTypes = {
  label: PropTypes.string.isRequired,
}

export default Button
