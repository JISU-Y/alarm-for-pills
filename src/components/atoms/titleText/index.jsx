import React from 'react'
import PropTypes from 'prop-types'

const TitleText = ({ title }) => {
  return <h2>{title}</h2>
}

TitleText.propTypes = {
  title: PropTypes.string.isRequired,
}

export default TitleText
