import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Timeline from '../../components/organisms/Timeline'
import WeekContainer from '../../components/organisms/WeeklyPill'

const Home = () => {
  const pills = useSelector((state) => state.pills.pills)

  return (
    <Container>
      <WeekContainer />
      <Timeline />
    </Container>
  )
}

const Container = styled.div``

export default Home
