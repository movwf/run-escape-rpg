import React from 'react';
import Sprite from './Sprite';

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
      <Sprite
        spriteUrl="https://i.ibb.co/ry9mJ9f/char-1.png"
        height={32}
        width={32}
        direction={0}
        step={1}
      />
    </div>
  );
});

export default Character;
