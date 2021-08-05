import React from 'react';
import './App.css';
import Map from './components/Map';
import Logo from './components/Logo';
import Frame from './components/Frame';
import Footer from './components/Footer';

import { Maps } from './config/Maps';

function App() {
  const mapRef = React.useRef();

  return (
    <div className="App">
      <Logo />
      <div className="Game">
        <Frame>
          <Map ref={mapRef} mapImage={Maps['map-1'].image}>
            Character
          </Map>
        </Frame>
      </div>
      <Footer />
    </div>
  );
}

export default App;
