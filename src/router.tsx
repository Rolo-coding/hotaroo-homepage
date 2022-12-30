import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './routes/home'
import Posts from './routes/posts'
import Works from './routes/works'

const Router: React.FC = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/works" element={<Works />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
      </Routes>
    </AnimatePresence>
  )
}

export default Router
