import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import Navbar from './components/navbar'
import Home from './components/home'
import Works from './components/works'
import Posts from './components/posts'

const Main = styled.main`
  height: 150vh;
  padding-bottom: 2rem;
`

const App: React.FC = () => {
  const location = useLocation()

  return (
    <Main>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </AnimatePresence>
    </Main>
  )
}

export default App
