import React from 'react';
import Router from "./router";
import Header from './component/header';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Router/>
    </div>
  );
}

export default App;
