import React from 'react'
import PropTypes from 'prop-types'
import Content from '../../atoms/Content'
import Tag from '../../atoms/Tag'
import styled from 'styled-components'

const PillContent = ({ list, withTag }) => {
  return (
    <Container>
      <Content text={list} underline={true} />
      {withTag && <Tag label="매일" color="red" />}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

PillContent.propTypes = {
  list: PropTypes.string.isRequired,
  withTag: PropTypes.bool.isRequired,
}

export default PillContent
