import React from 'react';
import Sprite from './Sprite';
import { Characters } from '../../config/CharacterModels';

const Character = React.forwardRef(({ startPos, pathLayerData, char }, ref) => {
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
      <Sprite spriteUrl={Characters[char].sprite} height={32} width={32} direction={0} step={1} />
    </div>
  );
});

export default Character;
