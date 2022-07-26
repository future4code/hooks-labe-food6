import React from 'react'
import { GlobalStyle } from './styedApp'
import Router from './routes/Router'
import theme from './constants/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import GlobalState from "./global/GlobalState"

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <GlobalStyle />
        <Router />
      </GlobalState>
    </ThemeProvider>
  )
}

export default App
