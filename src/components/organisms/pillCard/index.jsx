import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TitleText from '../../atoms/TitleText'

const PillCard = ({ pill, timeInfo, shortInfo }) => {
  return (
    <Card isFromHome={timeInfo}>
      {timeInfo && <TimeTag>{pill.time}시</TimeTag>}
      <MainInfo shortInfo={shortInfo}>
        <div>
          <TitleText title={pill.name} />
          <PillType>{pill.type}</PillType>
        </div>
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
          <DeleteBtn>X</DeleteBtn>
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
  display: ${(props) => (props.shortInfo ? 'flex' : 'block')};
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
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
`

PillCard.propTypes = {
  pill: PropTypes.object.isRequired,
  timeInfo: PropTypes.bool,
  shortInfo: PropTypes.bool,
}

export default PillCard
