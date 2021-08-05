/* eslint-disable no-unused-expressions */
import Directions from '../config/Directions';
import { isAbleToWalk } from './utils/mapUtils';
import { stepSize, maxStepSize } from '../config/PlayerSettings';

window.stepSize = stepSize; // Set step size globally

/**
 * Player moving function
 * @param {Ref<HTMLElement>} charRef Character reference
 * @param {Ref<HTMLElement>} mapRef Map reference
 * @param {Object} pathLayerData Path layer data
 * @param {String} direction Direction String
 * @param {React.Dispatch} setPos Position setting dispatch
 * @param {React.Dispatch} setStep Stepping dispatch
 * @param {React.Dispatch} setDirection Direction setting dispatch
 */
export const move = (charRef, mapRef, pathLayerData, direction, setPos, setStep, setDirection) => {
  const able = isAbleToWalk(charRef, mapRef, pathLayerData, direction, window.stepSize);

  // If able to move one of directions dispatch updates position on that direction
  able &&
    setPos((position) => {
      return {
        x:
          direction === 'UP'
            ? position.x - window.stepSize
            : direction === 'DOWN'
            ? position.x + window.stepSize
            : position.x,
        y:
          direction === 'LEFT'
            ? position.y - window.stepSize
            : direction === 'RIGHT'
            ? position.y + window.stepSize
            : position.y,
      };
    });

  setStep((step) => (step + 1) % 3); // Step animation
  setDirection(Directions[direction]); // Set player direction
};
