import React, { useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './theme'
import GlobalStyle from './reset'
import Header from './components/header'
import Router from './router'

const checkLocalTheme = () => {
  if (localStorage.getItem('theme') === 'false') return false
  return true
}

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(checkLocalTheme())
  const toggleTheme = () => {
    setIsDark(prev => !prev)
    localStorage.setItem('theme', String(!isDark))
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <HelmetProvider>
          <Header isDark={isDark} toggleTheme={toggleTheme} />
          <Router />
        </HelmetProvider>
      </Container>
    </ThemeProvider>
  )
}

const Container = ({ children }: { children: JSX.Element }) => {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return children
}

export default App
