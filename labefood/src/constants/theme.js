import { createTheme } from '@material-ui/core/styles'
import { primaryColor, secondaryColor, NeutralColor } from './colors'

const theme = createTheme({

   palette: {
      primary: {
         main: primaryColor,
         contrastText: '#000000'
      },

      secondary: {
         main: secondaryColor,
         contrastText: '#000000'
      },
      text: {
         primary: NeutralColor
      }
   },
})

export default theme