// eslint-disable react-hooks/exhaustive-deps
import React from 'react';
import './App.css';
import Map from './components/Map';
import Info from './components/Info';
import Logo from './components/Logo';
import Frame from './components/Frame';
import Footer from './components/Footer';
import Character from './components/Character';
import StartScreen from './components/StartScreen';

import { Maps } from './config/Maps';
import { createMapData, getStartPosition } from './@core/utils/mapUtils';

function App() {
  const mapRef = React.useRef();
  const charRef = React.useRef();
  const [startPos, setStartPos] = React.useState({ x: 0, y: 0 });
  const [openSettings, setOpenSettings] = React.useState(true);
  const [selectedChar, setSelectedChar] = React.useState('char-1');
  const [selectedMap, setSelectedMap] = React.useState('map-1');
  const [mapData, setMapData] = React.useState(
    createMapData(Maps[selectedMap].data, Maps[selectedMap].pathLayerName)
  );

  React.useEffect(() => {
    // Starting position of character
    setStartPos(getStartPosition(mapData));
  }, [mapData]);

  React.useEffect(() => {
    setMapData(createMapData(Maps[selectedMap].data, Maps[selectedMap].pathLayerName));
  }, [selectedMap]);

  return (
    <div className="App">
      <Logo />
      <div className="Game">
        <Frame>
          {openSettings && (
            <StartScreen
              {...{
                selectedMap,
                setSelectedMap,
                selectedChar,
                setSelectedChar,
                setOpenSettings,
              }}
            />
          )}
          <Map ref={mapRef} mapImage={Maps[selectedMap].image}>
            <Character
              ref={charRef}
              startPos={startPos}
              pathLayerData={mapData}
              char={selectedChar}
              data={{ mapRef }}
            />
          </Map>
        </Frame>
        <Info />
      </div>
      <Footer />
    </div>
  );
}

export default App;
