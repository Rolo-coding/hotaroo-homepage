import React, { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './theme'
import GlobalStyle from './reset'
import Header from './components/header'
import Router from './router'
import useToggleState from './useToggleState'

const getTheme = () =>
  localStorage.getItem('theme') === 'false' ? false : true

const App: React.FC = () => {
  const [isDark, toggleTheme] = useToggleState(getTheme())

  useEffect(() => {
    localStorage.setItem('theme', String(isDark))
  }, [isDark])

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
