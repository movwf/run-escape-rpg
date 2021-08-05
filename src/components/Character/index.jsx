import React from 'react';
import Sprite from './Sprite';
import useKeyPress from '../../hooks/useKeyPress';
import { Characters } from '../../config/CharacterModels';
import KeyboardSettings from '../../config/KeyboardSettings';
import { move, speedUp } from '../../@core/characterMovements';

const Character = React.forwardRef(({ startPos, pathLayerData, char, data }, ref) => {
  const charRef = ref;
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const [direction, setDirection] = React.useState(0);
  const [step, setStep] = React.useState(1);

  useKeyPress((event) => {
    switch (event.keyCode) {
      case KeyboardSettings.ESCAPE_KEY:
        data.setOpenSettings((open) => !open);
        break;

      case KeyboardSettings.SPACE_KEY:
        speedUp();
        break;

      case KeyboardSettings.ARROW_UP_KEY:
        move(charRef, data.mapRef, pathLayerData, 'UP', setPos, setStep, setDirection);
        break;

      case KeyboardSettings.ARROW_DOWN_KEY:
        move(charRef, data.mapRef, pathLayerData, 'DOWN', setPos, setStep, setDirection);
        break;

      case KeyboardSettings.ARROW_LEFT_KEY:
        move(charRef, data.mapRef, pathLayerData, 'LEFT', setPos, setStep, setDirection);
        break;

      case KeyboardSettings.ARROW_RIGHT_KEY:
        move(charRef, data.mapRef, pathLayerData, 'RIGHT', setPos, setStep, setDirection);
        break;

      default:
        break;
    }
  });

  return (
    <div
      id="character"
      ref={charRef}
      style={{
        display: 'inline-block',
        position: 'relative',
        top: `${pos.x + startPos.x}px`,
        left: `${pos.y + startPos.y}px`,
      }}
    >
      <Sprite
        spriteUrl={Characters[char].sprite}
        height={32}
        width={32}
        direction={direction}
        step={step}
      />
    </div>
  );
});

export default Character;
