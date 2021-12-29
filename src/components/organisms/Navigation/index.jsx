import React from 'react'
import styled from 'styled-components'
import NavButtons from '../../molecules/NavButtons'

const Navigation = () => {
  return (
    <NavContainer>
      <NavButtons />
    </NavContainer>
  )
}

const NavContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`

export default Navigation
