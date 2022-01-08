import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Timeline from '../../components/organisms/Timeline'
import WeekContainer from '../../components/organisms/WeeklyPill'
import { fetchPillsWeek } from '../../redux'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPillsWeek())
  }, [])

  return (
    <Container>
      <WeekContainer />
      <Timeline />
    </Container>
  )
}

const Container = styled.div``

export default Home
