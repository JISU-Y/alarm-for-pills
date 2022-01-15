import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TitleText from '../../atoms/TitleText'
import { useDispatch } from 'react-redux'
import { updatePill } from '../../../redux'

const PillCardSmall = ({ pill }) => {
  const dispatch = useDispatch()

  const completePill = () => {
    dispatch(updatePill({ ...pill, left: pill.left - pill.freqMany }))
  }

  return (
    <Card onClick={completePill}>
      <TimeTag>{pill.freqTime}시</TimeTag>
      <MainInfo>
        <div>
          <TitleText title={pill.name} marginBottom="0" />
          <PillType>{pill.type}</PillType>
        </div>
        <p>{pill.freqMany}알</p>
      </MainInfo>
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
  height: 80px;
`

const TimeTag = styled.p`
  font-size: 14px;
  width: 20%;
  margin: 0;
  line-height: 80px;
  pointer-events: none;
`

const MainInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  pointer-events: none;
  ${MainInfo} div {
    display: flex;
    align-items: center;
  }
`

const PillType = styled.p`
  margin-left: 10px;
`

PillCardSmall.propTypes = {
  pill: PropTypes.object.isRequired,
}

export default PillCardSmall
