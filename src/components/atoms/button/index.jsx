import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Button = ({ label, float, onClick }) => {
  return (
    <StyledButton float={float} onClick={onClick}>
      {label}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  font-size: ${(props) => (props.float ? '30px' : '16px')};
  padding: 0.5rem 1rem;
  background-color: aqua;
  border: none;
  width: ${(props) => (props.float ? '50px' : 'fit-content')};
  height: ${(props) => (props.float ? '50px' : 'fit-content')};
  border-radius: ${(props) => (props.float ? '50%' : '5px')};
  text-transform: uppercase;
  cursor: pointer;
  position: ${(props) => (props.float ? 'absolute' : 'static')};
  bottom: ${(props) => (props.float ? '20px' : 'none')};
  right: ${(props) => (props.float ? '20px' : 'none')};
`

Button.propTypes = {
  label: PropTypes.string.isRequired,
  float: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
}

export default Button
