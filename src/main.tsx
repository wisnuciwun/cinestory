import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import './index.sass'
import { Button, ThemeProvider, Typography, createTheme } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import routes from "./routes";

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
      <Router>
        <Routes>
          {
            routes.length != 0 ?
              routes.map((route, id) => {
                return (
                  <Route key={id} path={route.path} element={<route.element />} />
                )
              })
              :
              <Route path="/" element={<Home />} />
          }
          <Route path="/" element={<Home />} />
          <Route path="*" element={
            <Typography sx={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
              <div className="text-center">
                <h1 style={{ display: 'flex', alignItems: 'end', gap: '10px' }} className="w-100 text-center">
                  <span style={{ fontSize: '80px' }} className="material-symbols-outlined">
                    signal_wifi_statusbar_not_connected
                  </span>
                  <span>Are you lost ?</span>
                </h1>
                <div className='pointer' onClick={() => window.location.replace('/')}>
                  <Typography sx={{ textAlign: 'center', textDecoration: 'none', color: 'black' }}>Back to Home</Typography>
                </div>
              </div>
            </Typography>
          } />
        </Routes>
      </Router>
      {/* <Home /> */}
    </ThemeProvider>
  </React.StrictMode>,
)
