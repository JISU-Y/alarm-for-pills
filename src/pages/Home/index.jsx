import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import PillCard from '../../components/organisms/PillCard'
import Timeline from '../../components/organisms/Timeline'

const Home = () => {
  const pills = useSelector((state) => state.pills.pills)
  const drugs = pills.filter((pill) => pill.type === '약')
  const supps = pills.filter((pill) => pill.type === '영양제')

  return (
    <Container>
      <PillCard sectionTitle="약" pills={drugs} button={false} withTag={false} />
      <PillCard sectionTitle="영양제" pills={supps} button={false} withTag={false} />
      <Timeline />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 300px 550px;
  grid-gap: 10px;
`

export default Home
