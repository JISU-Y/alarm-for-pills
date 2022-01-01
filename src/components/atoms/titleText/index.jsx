import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TitleText = ({ title, marginBottom }) => {
  return <StyledH2 marginBottom={marginBottom}>{title}</StyledH2>
}

const StyledH2 = styled.h2`
  margin: 0;
  margin-bottom: ${(props) => props.marginBottom ?? '20px'};
`

TitleText.propTypes = {
  title: PropTypes.string.isRequired,
  marginBottom: PropTypes.string,
}

export default TitleText
