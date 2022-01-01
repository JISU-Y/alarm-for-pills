import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TitleText = ({ title }) => {
  return <NoMarginH2>{title}</NoMarginH2>
}

const NoMarginH2 = styled.h2`
  margin: 0;
  margin-bottom: 20px;
`

TitleText.propTypes = {
  title: PropTypes.string.isRequired,
}

export default TitleText
