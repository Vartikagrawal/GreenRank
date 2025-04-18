import React from 'react';
import './App.css';
import CardComponent from './CardComponent';  // Import CardComponent
import SustainabilityExplorer from './SustainabilityExplorer';
import ParticlesComponent from './ParticlesComponents';


function App() {
  return (
    <div className="App">
      <ParticlesComponent/>
      <CardComponent />
      <SustainabilityExplorer />
    </div>
  );
}

export default App;
