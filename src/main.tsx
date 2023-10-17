import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import './index.sass'
import { ThemeProvider, Typography, createTheme } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Block, TextSpan } from './components/index.tsx';
import { onLCP } from 'web-vitals';

const custom = createTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});

onLCP(console.log);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={custom}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Home />} />
          <Route path="*" element={
            <Typography sx={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
              <Block className="text-center">
                <Typography variant='h3' sx={{ display: 'flex', alignItems: 'end', gap: '10px' }} className="w-100 text-center">
                  <TextSpan style={{ fontSize: '80px' }} className="material-symbols-outlined">
                    signal_wifi_statusbar_not_connected
                  </TextSpan>
                  <TextSpan>Are you lost ?</TextSpan>
                </Typography>
                <Block className='pointer' sx={{ mt: 1 }} onClick={() => window.location.replace('/')}>
                  <Typography sx={{ textAlign: 'center', textDecoration: 'none', color: 'black' }}>Back to Home</Typography>
                </Block>
              </Block>
            </Typography>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
