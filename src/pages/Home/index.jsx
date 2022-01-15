import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Timeline from '../../components/organisms/Timeline'
import WeekContainer from '../../components/organisms/WeeklyPill'

const Home = () => {
  const loading = useSelector((state) => state.pills.loading)
  const weeklyPills = useSelector((state) => state.pills.weeklyPills)
  const [dayPills, setDayPills] = useState(null)

  useEffect(() => {
    const today = new Date()
    const dayOffset = today.getDay() === 0 ? 6 : today.getDay() - 1 // 일요일 6로 바꿈

    // 시간 순 sorting
    setDayPills(
      weeklyPills[dayOffset]?.sort(
        (a, b) =>
          parseInt(a.freqTime.split(':').join('')) - parseInt(b.freqTime.split(':').join('')),
      ),
    )
  }, [weeklyPills])

  return (
    <Container>
      <WeekContainer pills={weeklyPills ?? []} />
      <Timeline pills={dayPills ?? []} />
    </Container>
  )
}

const Container = styled.div``

export default Home
