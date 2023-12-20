import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, MemoryRouter as Router } from 'react-router-dom';
import React from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5E35B1',
    },
    secondary: {
      main: '#3F2376',
      dark: '#221835',
    },
    // gray: {
    //   main: '#B0A8B9'
    // }
  },
});

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('location', (arg) => {
  // eslint-disable-next-line no-console
  console.log("user location:", arg); 
});
window.electron.ipcRenderer.sendMessage('location');
