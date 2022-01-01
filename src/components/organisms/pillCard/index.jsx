import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TitleText from '../../atoms/TitleText'

const PillCard = ({ pill, timeInfo, shortInfo }) => {
  return (
    <Card>
      {timeInfo && <TimeTag>{pill.time}시</TimeTag>}
      <MainInfo shortInfo={shortInfo}>
        <TitleText title={pill.name} />
        {shortInfo ? (
          <p>{pill.many}알</p>
        ) : (
          <TimeInfo>
            <p>
              {pill.freq} {pill.freqDetail}번
            </p>
            <p>{pill.time}시</p>
            <p>{pill.many}알</p>
          </TimeInfo>
        )}
      </MainInfo>
      {!shortInfo && (
        <>
          <PillType>{pill.type}</PillType>
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
`

const TimeTag = styled.p`
  font-size: 14px;
  width: 20%;
`

const MainInfo = styled.div`
  display: ${(props) => (props.shortInfo ? 'flex' : 'block')};
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`

const TimeInfo = styled.div`
  display: flex;
  width: 100%;
  ${TimeInfo} p {
    margin-right: 20px;
  }
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

const PillAmount = styled.p``

PillCard.propTypes = {
  pill: PropTypes.object.isRequired,
  timeInfo: PropTypes.bool,
  shortInfo: PropTypes.bool,
}

export default PillCard
