import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Hero from './components/hero/Hero';
import Intro from './components/intro/Intro';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Intro/>
    </div>
  );
}

export default App;
