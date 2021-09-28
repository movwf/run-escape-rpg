import React from 'react';
import styles from './Map.module.css';

const Map = React.forwardRef(({ children, mapImage }, ref) => (
  <div
    ref={ref}
    id="game-map"
    className={styles.map}
    style={{
      backgroundImage: `url('${mapImage}')`,
    }}
  >
    {children}
  </div>
));

export default Map;
