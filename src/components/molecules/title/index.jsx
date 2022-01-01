import React from 'react'
import PropTypes from 'prop-types'
import TitleText from '../../atoms/TitleText'
import InfoText from '../../atoms/Textbox'
import ToggleButton from '../../atoms/ToggleButton'
import styled from 'styled-components'

const Title = ({ title, infoText, toggle, marginBottom }) => {
  return (
    <TitleBox>
      <TitleText title={title} marginBottom={marginBottom} />
      <InfoText size="small" text={infoText} />
      {toggle && <ToggleButton />}
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
  toggle: PropTypes.bool.isRequired,
  marginBottom: PropTypes.string,
}

export default Title
