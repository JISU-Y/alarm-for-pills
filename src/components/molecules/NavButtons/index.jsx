import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavIcon from '../../atoms/Icon'

const NavButtons = () => {
  return (
    <NavContainer>
      <Link to="/">
        <NavIcon navIcon="홈" />
      </Link>
      <Link to="/pill">
        <NavIcon navIcon="약" />
      </Link>
      <Link to="/myinfo">
        <NavIcon navIcon="내 정보" />
      </Link>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`

export default NavButtons
