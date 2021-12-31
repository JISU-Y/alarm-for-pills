import React from 'react'
import PropTypes from 'prop-types'
import Title from '../../molecules/Title'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import PillContent from '../../molecules/PillContent'

const PillCard = ({ sectionTitle, pills, button, withTag }) => {
  return (
    <Card>
      <Title
        title={sectionTitle}
        infoText={pills.length > 1 ? `${pills[0].name} 외 ${pills.length - 1} 종` : ''}
        toggle={true}
      />
      {pills.map((pill) => (
        <PillContent key={pill.name} list={pill.name} withTag={withTag} />
      ))}
      {button && <Button label="추가하기" float={false} />}
    </Card>
  )
}

const Card = styled.div`
  background-color: beige;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 10px;
  height: fit-content;
  overflow: hidden;
`

PillCard.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  pills: PropTypes.array.isRequired,
  button: PropTypes.bool.isRequired,
  withTag: PropTypes.bool.isRequired,
}

export default PillCard
