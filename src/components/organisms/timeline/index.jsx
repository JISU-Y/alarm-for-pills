import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Title from '../../molecules/Title'
import PillCard from '../PillCard'

const Timeline = () => {
  const pills = useSelector((state) => state.pills.pills)

  return (
    <TLContainer>
      <Title title="Today" infoText="" toggle={false} />
      {pills.map((pill, index) => (
        <PillCard key={index} pill={pill} isFromHome={true} id={index} />
      ))}
    </TLContainer>
  )
}

const TLContainer = styled.div`
  grid-column: 1 / -1;
`

export default Timeline
