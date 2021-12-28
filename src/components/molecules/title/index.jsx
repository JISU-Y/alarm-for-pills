import React from 'react'
import TitleText from './atoms/TitleText'
import InfoText from './atoms/Textbox'
import ToggleButton from './atoms/ToggleButton'

const Title = () => {
  return (
    <div>
      <TitleText title="약" />
      <InfoText />
      <ToggleButton />
    </div>
  )
}

export default Title
