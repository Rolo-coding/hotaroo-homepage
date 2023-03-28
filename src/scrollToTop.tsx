import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const scrollRestoration = 'scrollRestoration' in window.history
    if (scrollRestoration) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
