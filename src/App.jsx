import React from 'react';
import './App.css';
import Frame from './components/Frame';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="Game">
        <Frame>Map</Frame>
      </div>
      <Footer />
    </div>
  );
}

export default App;
