import React from 'react'
import { GlobalStyle } from './styedApp'
import Router from './routes/Router'
import theme from './constants/theme'
import { ThemeProvider } from '@material-ui/core/styles'

const App = () => {

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InlXZVk5YnJSQllRenIwSWpZaUZtIiwibmFtZSI6ImJyeWFuIiwiZW1haWwiOiJicnlhbkBnbWFpbC5jb20iLCJjcGYiOiIxMTEuMTExLjIxMS0xMSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NTg2MDU2NTd9.792x1Voj4QwXTIi2SlT6e2VEa2y6tMGexX7kRajACB8'

  localStorage.setItem('token', token)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

export default App
