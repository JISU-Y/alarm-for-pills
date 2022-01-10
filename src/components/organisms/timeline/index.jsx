import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Title from '../../molecules/Title'
import PillCardSmall from '../PillCardSmall'

const Timeline = ({ pills }) => {
  return (
    <TLContainer>
      <Title title="Today" infoText="" toggle={false} />
      {pills.map((pill) => (
        <PillCardSmall key={pill.id} pill={pill} isFromHome={true} />
      ))}
    </TLContainer>
  )
}

const TLContainer = styled.div`
  grid-column: 1 / -1;
`

Timeline.propTypes = {
  pills: PropTypes.array.isRequired,
}

export default Timeline
