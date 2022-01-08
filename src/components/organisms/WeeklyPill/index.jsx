import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Cross from '../../atoms/Cross'
import Title from '../../molecules/Title'

const dayOfWeek = {
  월: 1,
  화: 2,
  수: 3,
  목: 4,
  금: 5,
  토: 6,
  일: 0,
}

const WeeklyPill = () => {
  const pills = useSelector((state) => state.pills.pills)
  const loading = useSelector((state) => state.pills.loading)
  const todayPills = useSelector((state) => state.pills.todayPills) // today가 아니라 week(그것도 day/요일)임
  const [dayPills, setDayPills] = useState([...todayPills])

  console.log(dayPills)
  console.log(todayPills)
  useEffect(() => {
    const filteredPills = pills.filter((pill) => pill.freqDay !== 0)
    filteredPills.forEach((pill) => {
      if (pill.freqDay === '1' || pill.freqDay === 1) {
        setDayPills((prev) => prev.map((el) => [...el, pill]))
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

        setDayPills((prev) =>
          prev.map((el, index) =>
            (btDay + index) % Number(pill.freqDay) === 0 ? [...el, pill] : el,
          ),
        )
      }
    })
  }, []) // 바로 업데이트가 되지 않음

  return (
    <>
      <Title title="Weekly" infoText="" toggle={false} />
      <WeekContainer>
        {Object.keys(dayOfWeek).map((day, index) => (
          <Weekday key={day}>
            <h4>{day}</h4>
            <ThumbPill>
              {dayPills.length > 0
                ? `${dayPills[index][0]?.name ?? '없음'} ${
                    dayPills[index].length > 1 ? `외 ${dayPills[index].length - 1} 종` : ''
                  } `
                : '없음'}
            </ThumbPill>
            <Cross top="10px" right="10px" />
          </Weekday>
        ))}
        <Weekday>
          {/* 이미지를 넣을까 */}
          <Cross top="32.5%" right="32.5%" />
          <ThumbPill>약 추가하기</ThumbPill>
        </Weekday>
      </WeekContainer>
    </>
  )
}

const WeekContainer = styled.div`
  background-color: lightgray;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100px 100px;
  grid-gap: 5px;
  padding: 5px;
  border-radius: 10px;
  margin-bottom: 20px;
  ${WeekContainer} h4 {
    margin: 5px;
  }
`

const Weekday = styled.div`
  background-color: khaki;
  border-radius: 10px;
  position: relative;
`

const ThumbPill = styled.div`
  position: absolute;
  width: 80%;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  word-break: keep-all;
  font-size: 12px;
  text-align: center;
`

export default WeeklyPill
