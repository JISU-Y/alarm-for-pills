import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Timeline from '../../components/organisms/Timeline'
import WeekContainer from '../../components/organisms/WeeklyPill'
import { fetchPillsWeek } from '../../redux'

const Home = () => {
  const dispatch = useDispatch()
  const pills = useSelector((state) => state.pills.pills)
  const loading = useSelector((state) => state.pills.loading)
  const weeklyPills = useSelector((state) => state.pills.weeklyPills)
  const [weekdayPills, setWeekdayPills] = useState([...weeklyPills])
  const [dayPills, setDayPills] = useState(null)

  useEffect(() => {
    dispatch(fetchPillsWeek())
  }, [])

  console.log(loading)

  useEffect(() => {
    const filteredPills = pills.filter((pill) => pill.freqDay !== 0)
    filteredPills.forEach((pill) => {
      if (pill.freqDay === '1' || pill.freqDay === 1) {
        setWeekdayPills((prev) => prev.map((el) => [...el, pill]))
      } else {
        // 생성 날짜로부터 오늘날짜 기준 월~일에 어느 때 먹어야 하는지 계산
        const today = new Date()
        const pillDayArr = pill.created?.toDate().toLocaleDateString('ko-KO').split('. ')

        const [year, month, day] = [today.getFullYear(), today.getMonth() + 1, today.getDate()]
        const dayOffset = today.getDay() === 0 ? 6 : today.getDay() - 1 // 일요일 7로 바꿈

        const thenDate = new Date(...pillDayArr)
        const monDate = new Date(year, month, day - dayOffset) // 그 주의 월요일만 구함

        const btMs = monDate.getTime() - thenDate.getTime()
        const btDay = btMs / (1000 * 60 * 60 * 24)

        setWeekdayPills((prev) =>
          prev.map((el, index) =>
            (btDay + index) % Number(pill.freqDay) === 0 ? [...el, pill] : el,
          ),
        )
      }
    })
  }, []) // 바로 업데이트가 되지 않음

  useEffect(() => {
    const today = new Date()
    const dayOffset = today.getDay() === 0 ? 6 : today.getDay() - 1 // 일요일 7로 바꿈

    console.log(weekdayPills[dayOffset])
    setDayPills(weekdayPills[dayOffset])
  }, [weekdayPills])

  return (
    <Container>
      <WeekContainer pills={weekdayPills} />
      <Timeline pills={dayPills ?? []} />
    </Container>
  )
}

const Container = styled.div``

export default Home
