import React from 'react'
import PropTypes from 'prop-types'
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

const WeeklyPill = ({ pills }) => {
  return (
    <>
      <Title title="Weekly" infoText="" toggle={false} />
      <WeekContainer>
        {Object.keys(dayOfWeek).map((day, index) => (
          <Weekday key={day}>
            <h4>{day}</h4>
            <ThumbPill>
              {pills.length > 0
                ? `${pills[index][0]?.name ?? '없음'} ${
                    pills[index].length > 1 ? `외 ${pills[index].length - 1} 종` : ''
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

WeeklyPill.propTypes = {
  pills: PropTypes.array.isRequired,
}

export default WeeklyPill
