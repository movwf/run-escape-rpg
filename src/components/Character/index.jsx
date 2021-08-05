import React from 'react';

const Character = React.forwardRef(({ startPos }, ref) => {
  const charRef = ref;

  return (
    <div
      id="character"
      ref={charRef}
      style={{
        display: 'inline-block',
        position: 'relative',
        top: `${startPos.x}px`,
        left: `${startPos.y}px`,
      }}
    >
      Sprite
    </div>
  );
});

export default Character;
