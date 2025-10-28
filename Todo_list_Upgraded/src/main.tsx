import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@emotion/react'
import { Theme } from './Theme.ts'
import { CssBaseline } from '@mui/material'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline/>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
