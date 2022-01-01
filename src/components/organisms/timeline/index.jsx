import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Title from '../../molecules/Title'
import PillCard from '../PillCard'

// const pills = [
//   {
//     type: '약',
//     name: '소염제',
//     freq: '하루에 n번',
//     freqDetail: '1',
//     many: 1,
//     time: '20:00',
//     left: 20,
//   },
//   {
//     type: '영양제',
//     name: '오메가 3',
//     freq: '하루에 n번',
//     freqDetail: '1',
//     many: 1,
//     time: '19:00',
//     left: 50,
//   },
// ]

const Timeline = () => {
  const pills = useSelector((state) => state.pills.pills)

  return (
    <TLContainer>
      <Title title="Today" infoText="" toggle={false} />
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
