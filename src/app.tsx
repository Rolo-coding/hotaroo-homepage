import React, { useEffect, useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './theme'
import GlobalStyle from './reset'
import Header from './components/header'
import Router from './router'

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true)
  const toggleTheme = () => {
    setIsDark(prev => !prev)
    localStorage.setItem('theme', String(!isDark))
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme') === 'false' ? false : true
    setIsDark(theme)
  }, [])

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <HelmetProvider>
        <GlobalStyle />
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <Router />
      </HelmetProvider>
    </ThemeProvider>
  )
}

export default App
