/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from './StartScreen.module.css';
import { Maps } from '../../config/Maps';
import { Characters } from '../../config/CharacterModels';

const CharacterOptions = React.memo(({ setSelectedChar }) => (
  <div className={styles.characterOptionContainer}>
    {Object.keys(Characters).map((char) => (
      <div
        key={char}
        id={char}
        className={styles.characterOption}
        style={{
          backgroundImage: `url('${Characters[char].avatar}')`,
        }}
        onClick={(e) => {
          setSelectedChar(e.target.id);
        }}
      />
    ))}
  </div>
));

const MapOptions = React.memo(({ setSelectedMap }) => (
  <div className={styles.mapOptionContainer}>
    {Object.keys(Maps).map((map) => (
      <div
        key={map}
        id={map}
        className={styles.mapOption}
        style={{
          backgroundImage: `url('${Maps[map].image}')`,
        }}
        onClick={(e) => {
          setSelectedMap(e.target.id);
        }}
      />
    ))}
  </div>
));

function StartScreen({
  selectedChar,
  setSelectedChar,
  selectedMap,
  setSelectedMap,
  setOpenSettings,
}) {
  const [toggleCharMenu, setToggleCharMenu] = React.useState(false);
  const [toggleMapMenu, setToggleMapMenu] = React.useState(false);

  return (
    <div className={styles.startScreen}>
      <span className={styles.characterSelectLabel}>Select Character</span>
      <div
        id="Characters"
        tabIndex="0"
        className={styles.characterSelect}
        onClick={() => {
          setToggleCharMenu(!toggleCharMenu);
        }}
      >
        <img src={Characters[selectedChar].avatar} alt={selectedChar} />
        <FaChevronDown className={styles.chevron} />
        {toggleCharMenu && <CharacterOptions {...{ setSelectedChar }} />}
      </div>
      <br />
      <span className={styles.mapSelectLabel}>Select Map</span>
      <div
        id="Maps"
        tabIndex="0"
        className={styles.mapSelect}
        onClick={() => {
          setToggleMapMenu(!toggleMapMenu);
        }}
      >
        <img className={styles.selectedMapImage} src={Maps[selectedMap].image} alt={selectedMap} />
        <FaChevronDown className={styles.chevron} />
        {toggleMapMenu && <MapOptions {...{ setSelectedMap }} />}
      </div>
      <br />
      <button
        type="button"
        className={styles.startButton}
        onClick={() => {
          setOpenSettings(false);
        }}
      >
        Start
      </button>
    </div>
  );
}

export default StartScreen;
