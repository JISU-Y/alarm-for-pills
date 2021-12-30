import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/organisms/Navigation'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import MyInfo from './pages/MyInfo'
import PillSetting from './pages/PillSetting'
import styled from 'styled-components'

const App = () => {
  return (
    <MobileBox>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pill" element={<PillSetting />} />
          <Route path="/myinfo" element={<MyInfo />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Navigation />
      </BrowserRouter>
    </MobileBox>
  )
}

const MobileBox = styled.div`
  max-width: 480px;
  min-height: 850px;
  background-color: gray;
  overflow: hidden;
  position: relative;
  border-radius: 30px;
  padding: 1rem 1.5rem;
  padding-bottom: 70px;
`

export default App
