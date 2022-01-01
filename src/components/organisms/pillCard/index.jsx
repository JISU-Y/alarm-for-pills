import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TitleText from '../../atoms/TitleText'

const PillCard = ({ pill }) => {
  return (
    <Card>
      {/* <p>{pill.time}</p> */}
      <MainInfo>
        <TitleText title={pill.name} />
        <TimeInfo>
          <p>
            {pill.freq} {pill.freqDetail}번
          </p>
          <p>{pill.time}시</p>
          <p>{pill.many}알</p>
        </TimeInfo>
      </MainInfo>
      <PillType>{pill.type}</PillType>
      <PillLeft>잔여량: {pill.left}알</PillLeft>
    </Card>
  )
}

const Card = styled.div`
  width: auto;
  background-color: beige;
  padding: 0.5rem 1rem;
  display: flex;
  border-radius: 30px;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
`

const MainInfo = styled.div`
  width: 60%;
`

const TimeInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const PillType = styled.p`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  font-size: 14px;
`

const PillLeft = styled.p`
  position: absolute;
  bottom: 0.5rem;
  right: 1rem;
  font-size: 14px;
`

PillCard.propTypes = {
  pill: PropTypes.object.isRequired,
}

export default PillCard
