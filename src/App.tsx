import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './components/navbar'
import Home from './components/home'
import Works from './components/works'

const Main = styled.main`
  padding-bottom: 2rem;
`

const App: React.FC = () => {
  const location = useLocation()

  return (
    <Main>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </Main>
  )
}

export default App
