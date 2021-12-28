import React from 'react'
import TitleText from './atoms/titleText'
import InfoText from './atoms/textbox'
import ToggleButton from './atoms/toggleButton'

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
