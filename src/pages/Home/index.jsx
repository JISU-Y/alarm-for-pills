import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import PillCard from '../../components/organisms/PillCard'
import Timeline from '../../components/organisms/Timeline'

const Home = () => {
  const pills = useSelector((state) => state.pills.pills)

  return (
    <ContainerWrap>
      <Container>
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
