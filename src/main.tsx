import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import './index.sass'
import { ThemeProvider, createTheme } from '@mui/material';

const custom = createTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={custom}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
