import React from 'react';
import './App.css';
import Router_s from './components/Router_s';

export const dataContext = React.createContext()

function App() {
  return (
    <>
      <Router_s />
    </>
  );
}

export default App;
