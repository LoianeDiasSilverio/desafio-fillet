import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './routes';
import Global from './styles/global';

const App = () => {
  return (
      <BrowserRouter>
          <Global />
          <Routes />
      </BrowserRouter>
  );
};

export default App;
