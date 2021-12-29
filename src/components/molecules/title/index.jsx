import React from 'react'
import PropTypes from 'prop-types'
import TitleText from '../../atoms/TitleText'
import InfoText from '../../atoms/Textbox'
import ToggleButton from '../../atoms/ToggleButton'
import styled from 'styled-components'

const Title = ({ title, infoText }) => {
  return (
    <TitleBox>
      <TitleText title={title} />
      <InfoText size="small" text={infoText} />
      <ToggleButton />
    </TitleBox>
  )
}

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

Title.propTypes = {
  title: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
}

export default Title
