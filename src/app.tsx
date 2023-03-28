import React, { useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './theme'
import GlobalStyle from './reset'
import Header from './components/header'
import Router from './router'

const getTheme = () =>
  localStorage.getItem('theme') === 'false' ? false : true

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(getTheme())
  const toggleTheme = () => {
    setIsDark(prev => !prev)
    localStorage.setItem('theme', String(!isDark))
  }

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
