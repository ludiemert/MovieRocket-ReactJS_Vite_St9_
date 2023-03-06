import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';

import { ThemeProvider } from 'styled-components';


import theme from './styles/theme';

//import { Details } from './pages/Details'
//import { Home } from './pages/Home'
//import { Home_two } from './pages/Home_two'
//import { SignIn } from './pages/SignIn'
//import { SignOut } from './pages/SignOut'
//import { Profile } from './pages/Profile'
//import { New_Movie } from './pages/New_Movie'


import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
