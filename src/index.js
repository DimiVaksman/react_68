import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from "styled-components";
import { DogsApps } from 'components/Dogs/Components/DogsApp/DogsApp';

const theme = {
  colors:{
    black: "#212121",
    white: '#fff',
    accent: 'orange',
  },
  radii:{
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    
  }
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    {/* <DogsApps /> */}
    </ThemeProvider>
  </React.StrictMode>
);
