import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TitleText from '../../atoms/TitleText'
import { useDispatch } from 'react-redux'
import { deletePill, openModal } from '../../../redux'

const PillCard = ({ pill }) => {
  const dispatch = useDispatch()

  const deleteCard = () => {
    dispatch(deletePill(pill.id))
  }

  const showPillData = (e) => {
    if (e.target !== e.currentTarget) return // event bubbling 방지
    console.log(pill)
    dispatch(openModal(pill))
  }

  return (
    <Card onClick={showPillData}>
      <MainInfo>
        <div>
          <TitleText title={pill.name} marginBottom="0" />
          <PillType>{pill.type}</PillType>
        </div>
        <TimeInfo>
          <p>
            {/* weekdays.length 7이고 freqDay 1일 때 "매일"로 표시 */}
            {pill.freq === 'N일마다'
              ? `${pill.freqDay}일마다 `
              : `${[...pill.freqWeekdays]}요일마다 `}
          </p>
          <p>{pill.freqTime}시</p>
          <p>{pill.freqMany}알</p>
        </TimeInfo>
      </MainInfo>
      <DeleteBtn onClick={deleteCard}>X</DeleteBtn>
      <PillLeft>잔여량: {pill.left}알</PillLeft>
    </Card>
  )
}

const Card = styled.div`
  width: auto;
  background-color: beige;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  height: auto;
`

const MainInfo = styled.div`
  display: block;
  width: 100%;
  pointer-events: none;
  ${MainInfo} div {
    display: flex;
    align-items: center;
  }
`

const TimeInfo = styled.div`
  display: flex;
  width: 100%;
  ${TimeInfo} p {
    margin-right: 20px;
  }
`

const PillType = styled.p`
  margin-left: 10px;
`

const PillLeft = styled.p`
  position: absolute;
  bottom: 0.5rem;
  right: 1rem;
  font-size: 14px;
`

const DeleteBtn = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  background-color: tomato;
  width: 20px;
  height: 20px;
  text-align: center;
`

PillCard.propTypes = {
  pill: PropTypes.object.isRequired,
}

export default PillCard
