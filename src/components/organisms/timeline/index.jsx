import React from 'react'
import styled from 'styled-components'
import Title from '../../molecules/Title'

const Timeline = () => {
  return (
    <TLContainer>
      <Title title="Timeline" infoText="" toggle={false} />
    </TLContainer>
  )
}

const TLContainer = styled.div`
  grid-column: 1 / -1;
`

export default Timeline
