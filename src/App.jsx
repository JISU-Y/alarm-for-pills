import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navigation from './components/organisms/Navigation'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import MyInfo from './pages/MyInfo'
import PillSetting from './pages/PillSetting'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pill" element={<PillSetting />} />
          <Route path="/myinfo" element={<MyInfo />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Navigation />
      </BrowserRouter>
    </>
  )
}

export default App
