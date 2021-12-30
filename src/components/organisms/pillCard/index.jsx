import React from 'react'
import PropTypes from 'prop-types'
import Title from '../../molecules/Title'
import ContentList from '../../molecules/ContentList'
import styled from 'styled-components'
import Button from '../../atoms/Button'

const PillCard = ({ sectionTitle, pills, button }) => {
  return (
    <Card>
      <Title
        title={sectionTitle}
        infoText={`${pills[0]} 외 ${pills.length - 1} 종 `}
        toggle={true}
      />
      <ContentList lists={pills} />
      {button && <Button label="추가하기" />}
    </Card>
  )
}

const Card = styled.div`
  background-color: beige;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
`

PillCard.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  pills: PropTypes.array.isRequired,
  button: PropTypes.bool.isRequired,
}

export default PillCard
