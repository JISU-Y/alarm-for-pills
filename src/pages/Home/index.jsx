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
    <ContainerWrap>
      <Container>
        {/* <PillCard sectionTitle="약" pills={drugs} button={false} withTag={false} />
        <PillCard sectionTitle="영양제" pills={supps} button={false} withTag={false} /> */}
        <Timeline />
      </Container>
    </ContainerWrap>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 10px;
`

const ContainerWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  ${ContainerWrap}::-webkit-scrollbar {
    display: none;
  }
`

export default Home
