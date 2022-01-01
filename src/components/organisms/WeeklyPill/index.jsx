import React from 'react'
import styled from 'styled-components'
import Cross from '../../atoms/Cross'
import Title from '../../molecules/Title'

const dayOfWeek = ['월', '화', '수', '목', '금', '토', '일']

const WeeklyPill = () => {
  return (
    <>
      <Title title="Weekly" infoText="" toggle={false} />
      <WeekContainer>
        {dayOfWeek.map((day) => (
          <Weekday key={day}>
            <h4>{day}</h4>
            <ThumbPill>종합 비타민 외 2종</ThumbPill>
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
