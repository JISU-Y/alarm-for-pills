import React from 'react'
import styled from 'styled-components'
import Timeline from '../../components/organisms/Timeline'
import WeekContainer from '../../components/organisms/WeeklyPill'

const Home = () => {
  return (
    <Container>
      <WeekContainer />
      <Timeline />
    </Container>
  )
}

const Container = styled.div``

export default Home
