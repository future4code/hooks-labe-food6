import React from 'react'
import { GlobalStyle } from './styedApp'
import Router from './routes/Router'
import theme from './constants/theme'
import { ThemeProvider } from '@material-ui/core/styles'

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

export default App
