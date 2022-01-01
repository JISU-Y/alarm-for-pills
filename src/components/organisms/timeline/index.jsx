import React from 'react'
import styled from 'styled-components'
import Title from '../../molecules/Title'
import PillCard from '../PillCard'

const pills = [
  {
    type: '약',
    name: '소염제',
    freq: '하루에 n번',
    freqDetail: '1',
    many: 1,
    time: '20:00',
    left: 20,
  },
  {
    type: '영양제',
    name: '종합 비타민',
    freq: '하루에 n번',
    freqDetail: '2',
    many: 1,
    time: '20:00',
    left: 200,
  },
  {
    type: '영양제',
    name: '오메가 3',
    freq: '하루에 n번',
    freqDetail: '1',
    many: 1,
    time: '19:00',
    left: 50,
  },
]

const Timeline = () => {
  return (
    <TLContainer>
      <Title title="Timeline" infoText="" toggle={false} />
      {pills.map((pill) => (
        <PillCard key={pill.name} pill={pill} timeInfo={true} shortInfo={true} />
      ))}
    </TLContainer>
  )
}

const TLContainer = styled.div`
  grid-column: 1 / -1;
`

export default Timeline
