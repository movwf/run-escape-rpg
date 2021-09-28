import React from 'react';

/**
 * Adds event listeners to window object
 * @param {Function} cb Handler function
 */
export default function useKeyPress(cb) {
  React.useEffect(() => {
    window.addEventListener('keydown', cb);
    return () => {
      window.removeEventListener('keydown', cb);
    };
  }, [cb]);
}
