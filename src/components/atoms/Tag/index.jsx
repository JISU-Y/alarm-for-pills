import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Tag = ({ label, color }) => {
  return <TagDiv color={color}>{label}</TagDiv>
}

const TagDiv = styled.div`
  padding: 0.2rem 0.5rem;
  font-size: 16px;
  background-color: ${(props) => props.color};
`

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default Tag
