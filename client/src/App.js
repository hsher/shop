import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import SiteNavBar from './components/SiteNavBar';

const App = () => {
  return (
    <BrowserRouter>
      <SiteNavBar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;
