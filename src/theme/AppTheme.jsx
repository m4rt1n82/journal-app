

import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { purpleTheme } from './purpleTheme'


export const AppTheme = () => {
  return (
    <ThemeProvider theme={ purpleTheme}>
        <CssBaseline />
    </ThemeProvider>
  )
}
