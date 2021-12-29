import React from 'react'
import PropTypes from 'prop-types'
import Title from '../../molecules/Title'
import ContentList from '../../molecules/ContentList'
import styled from 'styled-components'
import Button from '../../atoms/Button'

const PillCard = ({ sectionTitle, pills, button }) => {
  return (
    <Card>
      <Title title={sectionTitle} infoText={`${pills[0]} 외 ${pills.length - 1} 종 `} />
      <ContentList lists={pills} />
      {button && <Button label="추가하기" />}
    </Card>
  )
}

const Card = styled.div`
  width: 200px;
  background-color: beige;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`

PillCard.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  pills: PropTypes.array.isRequired,
  button: PropTypes.bool.isRequired,
}

export default PillCard
