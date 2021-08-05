import React from 'react';
import styles from './Info.module.css';

function Info() {
  return (
    <div className={styles.Info}>
      <span className={styles.mtTitle}>Gameplay Info</span>
      <span className={styles.InfoTip}>Tip: It&apos;s not even a game!</span>
      <span className={styles.InfoShortcut2}>Esc - Open Settings</span>
      <span className={styles.InfoShortcut}>Arrow Keys - Movement</span>
      <span className={styles.InfoShortcut}>Spacebar(Toggle) Speed x1-2-4 </span>
    </div>
  );
}

export default React.memo(Info);
