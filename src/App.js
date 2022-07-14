import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Particle from './components/Particles/Particle';
import NasaPic from './components/NasaPhoto/NasaPhoto.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Particle/>
      <NasaPic/>
    </div>
  );
}

export default App;
