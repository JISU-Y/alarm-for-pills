import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Cross = ({ top, right, bottom, left }) => {
  return (
    <CrossContainer top={top} right={right} bottom={bottom} left={left}>
      <Horizontal />
      <Vertical />
    </CrossContainer>
  )
}

const CrossContainer = styled.div`
  width: 30px;
  height: 30px;
  background-color: transparent;
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
`

const Horizontal = styled.div`
  width: 30px;
  height: 10px;
  background-color: lightgray;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`

const Vertical = styled.div`
  height: 30px;
  width: 10px;
  background-color: lightgray;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`

Cross.propTypes = {
  top: PropTypes.string,
  bottom: PropTypes.string,
  right: PropTypes.string,
  left: PropTypes.string,
}

export default Cross
