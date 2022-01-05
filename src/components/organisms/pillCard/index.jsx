import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TitleText from '../../atoms/TitleText'
import { useDispatch } from 'react-redux'
import { deletePill, openModal } from '../../../redux'

const PillCard = ({ pill, isFromHome }) => {
  const dispatch = useDispatch()
  const pillDetails = pill.freqDetails
  const totalMany = pillDetails.reduce((acc, cur) => (acc += parseInt(cur.freqMany)), 0)

  const deleteCard = () => {
    dispatch(deletePill(pill.id))
  }

  const showPillData = (e) => {
    if (isFromHome) return
    if (e.target !== e.currentTarget) return // event bubbling 방지
    console.log(pill)
    dispatch(openModal(pill))
  }

  return (
    <Card isFromHome={isFromHome} onClick={showPillData}>
      {isFromHome ? (
        <>
          <TimeTag>{pill.freqDetails[0].freqTime}시</TimeTag>
          <MainInfo isFromHome={isFromHome}>
            <div>
              <TitleText title={pill.name} marginBottom="0" />
              <PillType>{pill.type}</PillType>
            </div>
            <p>{totalMany}알</p>
          </MainInfo>
        </>
      ) : (
        <>
          <MainInfo isFromHome={isFromHome}>
            <div>
              <TitleText title={pill.name} marginBottom="0" />
              <PillType>{pill.type}</PillType>
            </div>
            <TimeInfo>
              <p>
                {pill.freq === 'N일마다'
                  ? `${pill.freqDay}일마다 `
                  : `${[...pill.freqWeekdays]}요일마다 `}
                {pillDetails.length}번
              </p>
              <p>총 {totalMany}알</p>
            </TimeInfo>
          </MainInfo>
          <DeleteBtn onClick={deleteCard}>X</DeleteBtn>
          <PillLeft>잔여량: {pill.left}알</PillLeft>
        </>
      )}
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
  height: ${(props) => (props.isFromHome ? '80px' : 'auto')};
`

const TimeTag = styled.p`
  font-size: 14px;
  width: 20%;
  margin: 0;
  line-height: 80px;
`

const MainInfo = styled.div`
  display: ${(props) => (props.isFromHome ? 'flex' : 'block')};
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
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
  isFromHome: PropTypes.bool,
}

export default PillCard
