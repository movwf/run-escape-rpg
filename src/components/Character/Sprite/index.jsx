import React from 'react';

function Sprite({ spriteUrl, height, width, direction, step }) {
  return (
    <div
      id="character-sprite"
      style={{
        height: `${height}px`,
        width: `${width}px`,
        backgroundImage: `url('${spriteUrl}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `-${step * width}px -${direction * height}px`,
      }}
    />
  );
}

export default Sprite;
