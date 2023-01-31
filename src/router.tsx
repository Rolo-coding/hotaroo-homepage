import React, { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Loading from './components/loading'
const Home = lazy(() => import('./routes/home'))
const Posts = lazy(() => import('./routes/posts'))
const Works = lazy(() => import('./routes/works'))

const Router: React.FC = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loading />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/works" element={<Works />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

export default Router
