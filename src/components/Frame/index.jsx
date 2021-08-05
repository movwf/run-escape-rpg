import React from 'react';
import styles from './Frame.module.css';

function Frame({ children }) {
  return <div className={styles.frame}>{children}</div>;
}

export default React.memo(Frame);
